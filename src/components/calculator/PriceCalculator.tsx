import { useState } from 'react';
import { clsx } from 'clsx';
import {
  pricingConfig,
  calcTripPrice,
  calcHourlyPrice,
  type VehicleClass,
  type BookingType,
  type DriverPreference,
} from '../../config/pricing';
import { useDistanceCalc } from '../../hooks/useDistanceCalc';

export function PriceCalculator() {
  const [bookingType, setBookingType]   = useState<BookingType>('trip');
  const [vehicleClass, setVehicleClass] = useState<VehicleClass>('standard');
  const [driverPref, setDriverPref]     = useState<DriverPreference>('any');
  const [origin, setOrigin]             = useState('');
  const [destination, setDestination]   = useState('');
  const [hours, setHours]               = useState(1);
  const [manualKm, setManualKm]         = useState('');
  const [result, setResult]             = useState<number | null>(null);
  const [calculated, setCalculated]     = useState(false);

  const { distanceKm, loading, error, calculate, reset } = useDistanceCalc();
  const hasApiKey = !!import.meta.env.VITE_GOOGLE_MAPS_KEY;

  async function handleCalculate() {
    setCalculated(false);
    setResult(null);

    if (bookingType === 'hourly') {
      setResult(calcHourlyPrice(hours, vehicleClass));
      setCalculated(true);
      return;
    }

    if (hasApiKey) await calculate(origin, destination);

    const km = hasApiKey ? (distanceKm ?? parseFloat(manualKm)) : parseFloat(manualKm);
    if (!km || isNaN(km) || km <= 0) return;

    setResult(calcTripPrice(km, vehicleClass));
    setCalculated(true);
  }

  function handleReset() {
    setResult(null);
    setCalculated(false);
    setOrigin('');
    setDestination('');
    setManualKm('');
    reset();
  }

  const tab          = 'flex-1 py-2.5 text-sm font-bold rounded-[12px] transition-all duration-200';
  const activeTab    = 'bg-[#8A1538] text-white shadow-sm';
  const inactiveTab  = 'text-[#5A5A5A] hover:text-[#1C1C1C]';
  const chip         = 'px-4 py-2 rounded-[10px] text-sm font-medium border transition-all duration-150 cursor-pointer';
  const activeChip   = 'bg-[#8A1538] border-[#8A1538] text-white';
  const inactiveChip = 'border-[rgba(138,21,56,0.2)] text-[#5A5A5A] hover:border-[#8A1538] hover:text-[#8A1538]';

  return (
    <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(138,21,56,0.12)] p-6 w-full max-w-md">
      <h3 className="text-lg font-black text-[#1C1C1C] mb-5">احسب سعر رحلتك</h3>

      {/* Booking type */}
      <div className="flex gap-1 bg-[#F4F1EA] p-1 rounded-[14px] mb-5">
        {(['trip', 'hourly'] as const).map(t => (
          <button key={t} onClick={() => setBookingType(t)}
            className={clsx(tab, bookingType === t ? activeTab : inactiveTab)}>
            {t === 'trip' ? 'مشوار من/إلى' : 'حجز بالساعة'}
          </button>
        ))}
      </div>

      {bookingType === 'trip' ? (
        <div className="space-y-3 mb-5">
          {hasApiKey ? (
            <>
              <input type="text" placeholder="نقطة الانطلاق (مثل: اللؤلؤة)"
                value={origin} onChange={e => setOrigin(e.target.value)}
                className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
              <input type="text" placeholder="الوجهة (مثل: مطار حمد الدولي)"
                value={destination} onChange={e => setDestination(e.target.value)}
                className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
            </>
          ) : (
            <div>
              <label className="block text-xs text-[#5A5A5A] mb-1.5">المسافة بالكيلومتر</label>
              <input type="number" placeholder="مثل: 12" min="1" max="200"
                value={manualKm} onChange={e => setManualKm(e.target.value)}
                className="w-full border border-[rgba(28,28,28,0.15)] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#8A1538] transition-colors" />
              <p className="text-[11px] text-[#5A5A5A] mt-1.5">
                ℹ️ أدخل المسافة يدوياً. لتفعيل الحساب التلقائي أضف VITE_GOOGLE_MAPS_KEY.
              </p>
            </div>
          )}
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      ) : (
        <div className="mb-5">
          <label className="block text-xs text-[#5A5A5A] mb-1.5">عدد الساعات</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setHours(h => Math.max(1, h - 1))}
              className="w-9 h-9 rounded-full border border-[rgba(138,21,56,0.3)] text-[#8A1538] font-bold hover:bg-[#8A1538]/8 transition-colors">−</button>
            <span className="text-2xl font-black text-[#1C1C1C] w-8 text-center">{hours}</span>
            <button onClick={() => setHours(h => Math.min(12, h + 1))}
              className="w-9 h-9 rounded-full border border-[rgba(138,21,56,0.3)] text-[#8A1538] font-bold hover:bg-[#8A1538]/8 transition-colors">+</button>
          </div>
        </div>
      )}

      {/* Vehicle class */}
      <div className="mb-4">
        <label className="block text-xs text-[#5A5A5A] mb-2">فئة السيارة</label>
        <div className="flex gap-2">
          {(['standard', 'luxury'] as const).map(v => (
            <button key={v} onClick={() => setVehicleClass(v)}
              className={clsx(chip, vehicleClass === v ? activeChip : inactiveChip)}>
              {v === 'standard' ? 'عادية' : 'فاخرة'}
            </button>
          ))}
        </div>
      </div>

      {/* Driver preference */}
      <div className="mb-6">
        <label className="block text-xs text-[#5A5A5A] mb-2">تفضيل السائق</label>
        <div className="flex gap-2 flex-wrap">
          {([['any', 'لا يهم'], ['male', 'ذكر'], ['female', 'أنثى']] as [DriverPreference, string][]).map(([v, label]) => (
            <button key={v} onClick={() => setDriverPref(v)}
              className={clsx(chip, driverPref === v ? activeChip : inactiveChip)}>{label}</button>
          ))}
        </div>
      </div>

      {!calculated ? (
        <button onClick={handleCalculate} disabled={loading || (bookingType === 'trip' && !hasApiKey && !manualKm)}
          className="w-full bg-[#8A1538] text-white font-bold py-3.5 rounded-[14px] shadow-[0_4px_16px_rgba(138,21,56,0.30)] hover:bg-[#6b1029] disabled:opacity-50 disabled:cursor-not-allowed transition-all">
          {loading ? 'جاري الحساب…' : 'احسب السعر'}
        </button>
      ) : (
        <div className="bg-[#FAF8F3] border border-[rgba(138,21,56,0.15)] rounded-[16px] p-5 text-center">
          <p className="text-xs text-[#5A5A5A] mb-1">السعر التقديري</p>
          <p className="text-4xl font-black text-[#8A1538]">
            {result} <span className="text-xl font-bold">{pricingConfig.currency}</span>
          </p>
          <p className="text-[11px] text-[#8A1538] font-bold mt-1">سعر ثابت ومضمون</p>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
              className="w-full bg-[#8A1538] text-white font-bold py-3 rounded-[12px] hover:bg-[#6b1029] transition-colors text-sm">
              احجز عبر التطبيق
            </a>
            <button onClick={handleReset} className="text-xs text-[#5A5A5A] hover:text-[#8A1538] transition-colors">
              ← حساب جديد
            </button>
          </div>
          <p className="text-[10px] text-[#5A5A5A] mt-3">• السعر تقديري وقد يختلف حسب الظروف</p>
        </div>
      )}
    </div>
  );
}
