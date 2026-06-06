/**
 * Drieul Pricing Configuration
 * Edit these values to update pricing across the entire site.
 * All amounts in QAR (Qatari Riyal).
 */
export const pricingConfig = {
  standard: {
    baseFare:    8,      // رسوم الفتح
    perKm:       1.5,    // سعر الكيلومتر
    perMinute:   0.25,   // سعر الدقيقة
    hourlyRate:  55,     // سعر الساعة (حجز بالساعة)
    minimumFare: 14,     // الحد الأدنى للرحلة
  },
  luxury: {
    baseFare:    15,
    perKm:       2.5,
    perMinute:   0.45,
    hourlyRate:  95,
    minimumFare: 25,
  },
  /** Average driving speed in Doha (km/h) — used for time estimation */
  avgSpeedKmh: 35,
  currency:    'ر.ق',
  currencyCode: 'QAR',
} as const;

export type VehicleClass      = 'standard' | 'luxury';
export type BookingType       = 'trip' | 'hourly';
export type DriverPreference  = 'any' | 'male' | 'female';

export function calcTripPrice(
  distanceKm: number,
  vehicleClass: VehicleClass
): number {
  const cfg = pricingConfig[vehicleClass];
  const estimatedMinutes = (distanceKm / pricingConfig.avgSpeedKmh) * 60;
  const raw = cfg.baseFare + distanceKm * cfg.perKm + estimatedMinutes * cfg.perMinute;
  return Math.max(cfg.minimumFare, Math.ceil(raw));
}

export function calcHourlyPrice(
  hours: number,
  vehicleClass: VehicleClass
): number {
  const cfg = pricingConfig[vehicleClass];
  return Math.max(cfg.minimumFare, Math.ceil(hours * cfg.hourlyRate));
}
