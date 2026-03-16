import React, { useMemo, useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, BarChart, Bar, Cell, PieChart, Pie, Treemap, Legend
} from 'recharts';
import { 
  Phone, Users, PhoneOff, CheckCircle, AlertTriangle, TrendingUp, 
  Globe, MessageSquare, Mail, MapPin, Zap, ShieldCheck, Activity,
  ArrowUpRight, ArrowDownRight, Clock, Target, BrainCircuit, Download, Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateMockData, getForecastData, CallMetrics } from '../data/mockData';
import { QatarMap } from './QatarMap';
import { cn } from '../lib/utils';
import { getDashboardInsights } from '../services/geminiService';

const MAROON = '#8D1B3D';
const GOLD = '#C5A059';
const WHITE = '#FFFFFF';

const translations = {
  en: {
    title: "STRATEGIC COMMAND CENTER",
    subtitle: "Unified Call Center — Ministry of Municipality",
    overview: "Overview",
    performance: "Performance",
    geospatial: "Geospatial",
    forecasting: "Forecasting",
    systemStatus: "System Status",
    operational: "OPERATIONAL",
    totalCalls: "Total Calls",
    answered: "Answered",
    lostCalls: "Lost Calls",
    serviceLevel: "Service Level",
    abandonRate: "Abandon Rate",
    fcr: "FCR",
    waitTime: "Wait Time",
    csat: "CSAT",
    trendTitle: "3-YEAR PERFORMANCE TREND",
    trendSubtitle: "Strategic growth analysis 2023 — 2025",
    channelTitle: "MULTI-CHANNEL DISTRIBUTION",
    aiInsights: "AI PREDICTIVE INSIGHTS",
    geospatialTitle: "GEOSPATIAL DEMAND",
    stabilityIndex: "Stability Index",
    leadershipScore: "Leadership Score",
    liveAlerts: "Live Alerts",
    export: "Export Report",
    preparedBy: "Prepared by",
    leadershipTitle: "Operational Performance Leadership",
    name: "Rakan Mohammed Al-Marri",
    dept: "Unified Call Center – Ministry of Municipality"
  },
  ar: {
    title: "مركز القيادة الاستراتيجي",
    subtitle: "مركز الاتصال الموحد — وزارة البلدية",
    overview: "نظرة عامة",
    performance: "الأداء",
    geospatial: "الموقع الجغرافي",
    forecasting: "التنبؤ",
    systemStatus: "حالة النظام",
    operational: "قيد التشغيل",
    totalCalls: "إجمالي المكالمات",
    answered: "تم الرد عليها",
    lostCalls: "المكالمات المفقودة",
    serviceLevel: "مستوى الخدمة",
    abandonRate: "معدل التخلي",
    fcr: "حل من المرة الأولى",
    waitTime: "وقت الانتظار",
    csat: "رضا العملاء",
    trendTitle: "اتجاه الأداء لثلاث سنوات",
    trendSubtitle: "تحليل النمو الاستراتيجي 2023 — 2025",
    channelTitle: "توزيع القنوات المتعددة",
    aiInsights: "رؤى الذكاء الاصطناعي التنبؤية",
    geospatialTitle: "الطلب الجغرافي المكاني",
    stabilityIndex: "مؤشر الاستقرار",
    leadershipScore: "درجة القيادة",
    liveAlerts: "تنبيهات مباشرة",
    export: "تصدير التقرير",
    preparedBy: "إعداد",
    leadershipTitle: "قيادة الأداء التشغيلي",
    name: "راكان محمد آل عتيق المري",
    dept: "مركز الاتصال الموحد – وزارة البلدية"
  }
};

const KPICard = ({ title, value, subValue, icon: Icon, trend, color = MAROON, target, isRTL }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
    <div className={cn("flex justify-between items-start mb-4", isRTL ? "flex-row-reverse" : "")}>
      <div className={cn("p-3 rounded-xl bg-opacity-20", `bg-[${color}]`)} style={{ backgroundColor: `${color}33` }}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      {trend !== undefined && (
        <div className={cn("flex items-center text-xs font-medium", trend > 0 ? "text-emerald-400" : "text-rose-400", isRTL ? "flex-row-reverse" : "")}>
          {trend > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {Math.abs(trend)}%
        </div>
      )}
    </div>
    <div className={cn("space-y-1", isRTL ? "text-right" : "")}>
      <h3 className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{title}</h3>
      <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      <p className="text-white/40 text-[10px] font-mono">{subValue}</p>
      
      {target && (
        <div className="mt-3 space-y-1">
          <div className={cn("flex justify-between text-[8px] font-bold uppercase text-white/30", isRTL ? "flex-row-reverse" : "")}>
            <span>{isRTL ? "التقدم" : "Progress"}</span>
            <span>{target}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${target}%` }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

export const Dashboard: React.FC = () => {
  const allData = useMemo(() => generateMockData(), []);
  const currentYearData = useMemo(() => allData.filter(d => d.year === 2025), [allData]);
  const lastMonth = currentYearData[currentYearData.length - 1];
  const prevMonth = currentYearData[currentYearData.length - 2];
  const forecast = useMemo(() => getForecastData(lastMonth), [lastMonth]);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [dynamicInsights, setDynamicInsights] = useState<any[]>([]);
  const [isLoadingInsights, setIsLoadingInsights] = useState(false);

  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    const fetchInsights = async () => {
      setIsLoadingInsights(true);
      const insights = await getDashboardInsights(lastMonth);
      setDynamicInsights(insights);
      setIsLoadingInsights(false);
    };
    fetchInsights();
  }, [lastMonth]);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Metric,Value\n"
      + `${t.totalCalls},${lastMonth.incoming}\n`
      + `${t.answered},${lastMonth.answered}\n`
      + `${t.serviceLevel},${lastMonth.serviceLevel}%\n`
      + `${t.csat},4.8/5`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Qatar_Municipality_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Operational Stability Index Calculation
  const stabilityIndex = useMemo(() => {
    const sl = lastMonth.serviceLevel / 100;
    const ar = (100 - lastMonth.abandonRate) / 100;
    const fcr = lastMonth.fcr / 100;
    const ahtScore = Math.max(0, 1 - (lastMonth.aht - 180) / 120);
    return Math.round(((sl + ar + fcr + ahtScore) / 4) * 100);
  }, [lastMonth]);

  // Leadership Impact Score
  const leadershipScore = useMemo(() => {
    const avg2023 = allData.filter(d => d.year === 2023).reduce((acc, d) => acc + d.serviceLevel, 0) / 12;
    const avg2025 = currentYearData.reduce((acc, d) => acc + d.serviceLevel, 0) / currentYearData.length;
    const improvement = (avg2025 - avg2023) / avg2023;
    return Math.round(85 + improvement * 50);
  }, [allData, currentYearData]);

  const channelData = [
    { name: isRTL ? 'صوتي' : 'Voice', value: lastMonth.answered, color: MAROON },
    { name: isRTL ? 'تواصل' : 'Social', value: lastMonth.digitalInteractions.socialMedia, color: GOLD },
    { name: isRTL ? 'بريد' : 'Email', value: lastMonth.digitalInteractions.email, color: '#444' },
    { name: isRTL ? 'بوابة' : 'Portal', value: lastMonth.digitalInteractions.systemPortal, color: '#666' },
  ];

  return (
    <div className={cn("min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-maroon-500/30", isRTL ? "rtl" : "ltr")} dir={isRTL ? "rtl" : "ltr"}>
      {/* Sadu Pattern Overlay */}
      <div className="fixed inset-0 sadu-pattern pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/60 backdrop-blur-xl px-8 py-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className={cn("flex items-center space-x-6", isRTL ? "space-x-reverse" : "")}>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 border-2 border-[#8D1B3D] shadow-[0_0_20px_rgba(141,27,61,0.3)]">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Qatar.svg/1200px-Emblem_of_Qatar.svg.png" alt="Qatar Emblem" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter flex items-center">
              <span className="text-[#8D1B3D] mx-2">{t.title.split(' ')[0]}</span> {t.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">{t.subtitle}</p>
          </div>
        </div>
        
        {/* Navigation / Filters */}
        <nav className="hidden xl:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
          {['Overview', 'Performance', 'Geospatial', 'Forecasting'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold transition-all duration-300",
                activeTab === tab.toLowerCase() 
                  ? "bg-[#8D1B3D] text-white shadow-lg" 
                  : "text-white/40 hover:text-white"
              )}
            >
              {t[tab.toLowerCase() as keyof typeof t]}
            </button>
          ))}
        </nav>

        <div className={cn("flex items-center space-x-4", isRTL ? "space-x-reverse" : "")}>
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center space-x-2"
          >
            <Languages className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[10px] font-bold">{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
          
          <button 
            onClick={() => window.print()}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center space-x-2"
          >
            <Activity className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[10px] font-bold">{isRTL ? "طباعة PDF" : "Print PDF"}</span>
          </button>
          
          <button 
            onClick={handleExport}
            className="p-2 rounded-lg bg-[#8D1B3D]/20 border border-[#8D1B3D]/40 hover:bg-[#8D1B3D]/30 transition-colors flex items-center space-x-2"
          >
            <Download className="w-4 h-4 text-[#8D1B3D]" />
            <span className="text-[10px] font-bold">{t.export}</span>
          </button>

          <div className="h-10 w-[1px] bg-white/10" />
          
          <div className={cn("text-right", isRTL ? "text-left" : "text-right")}>
            <div className="text-[10px] text-white/40 uppercase font-bold">{t.systemStatus}</div>
            <div className="flex items-center text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mx-2 animate-pulse" />
              {t.operational}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 p-8 space-y-8">
        {/* AI Insights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(dynamicInsights.length > 0 ? dynamicInsights : [
            { title: "Efficiency Optimization", desc: "AHT has decreased by 14% since Q4 2024 while maintaining a 92% FCR.", type: "optimization" },
            { title: "Demand Pattern Shift", desc: "Digital portal requests are outpacing voice calls by 1.5x in the Doha region.", type: "trend" },
            { title: "Sustainability Alert", desc: "Operational Stability Index is at an all-time high (94%).", type: "alert" }
          ]).map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-4",
                isRTL ? "border-r-4 border-l-0" : "border-l-4",
                insight.type === 'alert' ? "border-rose-500" : "border-[#C5A059]"
              )}
            >
              <div className={cn("flex items-center mb-1", isRTL ? "flex-row-reverse" : "")}>
                {insight.type === 'alert' ? <AlertTriangle className="w-4 h-4 mx-2 text-rose-500" /> : <Zap className="w-4 h-4 mx-2 text-[#C5A059]" />}
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/80">{insight.title}</h4>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">{insight.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          <KPICard title={t.totalCalls} value={lastMonth.incoming.toLocaleString()} subValue={isRTL ? "المستهدف: 15,000" : "Target: 15,000"} icon={Phone} trend={12} target={94} isRTL={isRTL} />
          <KPICard title={t.answered} value={lastMonth.answered.toLocaleString()} subValue={isRTL ? "92% معدل النجاح" : "92% Success Rate"} icon={CheckCircle} trend={8} target={92} isRTL={isRTL} />
          <KPICard title={t.lostCalls} value={lastMonth.lost.toLocaleString()} subValue={isRTL ? "المستهدف: <5%" : "Target: <5%"} icon={PhoneOff} trend={-15} color="#ef4444" target={12} isRTL={isRTL} />
          <KPICard title={t.serviceLevel} value={`${lastMonth.serviceLevel.toFixed(1)}%`} subValue={isRTL ? "المعيار: 80%" : "Benchmark: 80%"} icon={Zap} trend={5} color={GOLD} target={lastMonth.serviceLevel} isRTL={isRTL} />
          <KPICard title={t.abandonRate} value={`${lastMonth.abandonRate.toFixed(1)}%`} subValue={isRTL ? "المعيار: <3%" : "Benchmark: <3%"} icon={AlertTriangle} trend={-10} color="#f59e0b" target={lastMonth.abandonRate * 10} isRTL={isRTL} />
          <KPICard title={t.fcr} value={`${lastMonth.fcr.toFixed(1)}%`} subValue={isRTL ? "حل من المرة الأولى" : "First Contact Res."} icon={Target} trend={3} target={lastMonth.fcr} isRTL={isRTL} />
          <KPICard title={t.waitTime} value={`${Math.round(lastMonth.waitTime)}s`} subValue={isRTL ? "متوسط وقت الانتظار" : "Avg. Queue Time"} icon={Clock} trend={-5} target={45} isRTL={isRTL} />
          <KPICard title={t.csat} value="4.8/5" subValue={isRTL ? "رضا العملاء" : "Customer Satisfaction"} icon={Users} trend={2} color={GOLD} target={96} isRTL={isRTL} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Trends & Channels */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            
            {/* Trend Analysis */}
            <section className="bg-black/40 border border-white/10 rounded-3xl p-8">
              <div className={cn("flex justify-between items-end mb-8", isRTL ? "flex-row-reverse" : "")}>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <h2 className="text-xl font-bold tracking-tight">{t.trendTitle}</h2>
                  <p className="text-white/40 text-sm">{t.trendSubtitle}</p>
                </div>
                <div className={cn("flex space-x-2", isRTL ? "space-x-reverse" : "")}>
                  {[2023, 2024, 2025].map(y => (
                    <div key={y} className="flex items-center text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5">
                      <div className="w-2 h-2 rounded-full mx-2" style={{ backgroundColor: y === 2025 ? MAROON : y === 2024 ? GOLD : '#444' }} />
                      {y}
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={allData}>
                    <defs>
                      <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={MAROON} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={MAROON} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="date" 
                      stroke="rgba(255,255,255,0.3)" 
                      fontSize={10} 
                      tickFormatter={(val) => val.split(' ')[0]}
                      interval={2}
                      reversed={isRTL}
                    />
                    <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} orientation={isRTL ? "right" : "left"} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', textAlign: isRTL ? 'right' : 'left' }}
                      itemStyle={{ fontSize: '12px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="incoming" 
                      stroke={MAROON} 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorIncoming)" 
                    />
                    <Line type="monotone" dataKey="answered" stroke={GOLD} strokeWidth={2} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Channel Analysis */}
              <section className="bg-black/40 border border-white/10 rounded-3xl p-8">
                <h2 className={cn("text-lg font-bold mb-6 flex items-center", isRTL ? "flex-row-reverse" : "")}>
                  <Globe className="w-5 h-5 mx-2 text-[#C5A059]" />
                  {t.channelTitle}
                </h2>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={channelData}
                      dataKey="value"
                      stroke="#000"
                      fill={MAROON}
                    >
                      <Tooltip />
                    </Treemap>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {channelData.map(c => (
                    <div key={c.name} className={cn("flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5", isRTL ? "flex-row-reverse" : "")}>
                      <span className="text-xs text-white/60">{c.name}</span>
                      <span className="text-sm font-bold">{c.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Smart Forecasting */}
              <section className="bg-black/40 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className={cn("absolute top-0 p-4", isRTL ? "left-0" : "right-0")}>
                  <BrainCircuit className="w-8 h-8 text-[#C5A059] opacity-20" />
                </div>
                <h2 className={cn("text-lg font-bold mb-6 flex items-center", isRTL ? "flex-row-reverse" : "")}>
                  <TrendingUp className="w-5 h-5 mx-2 text-[#C5A059]" />
                  {t.aiInsights}
                </h2>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={forecast}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={8} reversed={isRTL} />
                      <YAxis stroke="rgba(255,255,255,0.3)" fontSize={8} orientation={isRTL ? "right" : "left"} />
                      <Tooltip 
                         contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', textAlign: isRTL ? 'right' : 'left' }}
                      />
                      <Bar dataKey="incoming" fill={GOLD} radius={[4, 4, 0, 0]}>
                        {forecast.map((entry, index) => (
                          <Cell key={`cell-${index}`} fillOpacity={0.4 + (index * 0.1)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-4 bg-[#C5A059]/10 rounded-xl border border-[#C5A059]/20">
                  <p className={cn("text-[10px] text-[#C5A059] font-bold uppercase mb-1", isRTL ? "text-right" : "text-left")}>{isRTL ? "توقعات الذكاء الاصطناعي" : "AI Prediction"}</p>
                  <p className={cn("text-xs text-white/80 leading-relaxed", isRTL ? "text-right" : "text-left")}>
                    {isRTL 
                      ? "من المتوقع زيادة بنسبة 12.4% في طلبات الخدمة للربع الثالث من عام 2026. يوصى بزيادة تخصيص الموظفين بنسبة 15%."
                      : "Expected 12.4% surge in service requests for Q3 2026. Recommended staff allocation increase: +15%."}
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Map & Indices */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            
            {/* Geographic Map */}
            <section className="bg-black/40 border border-white/10 rounded-3xl p-8">
              <h2 className={cn("text-lg font-bold mb-6 flex items-center", isRTL ? "flex-row-reverse" : "")}>
                <MapPin className="w-5 h-5 mx-2 text-[#C5A059]" />
                {t.geospatialTitle}
              </h2>
              <div className="h-[400px]">
                <QatarMap data={lastMonth.regionData} />
              </div>
            </section>

            {/* Strategic Indices */}
            <section className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 border border-white/10 rounded-3xl p-6 text-center">
                <div className="text-[10px] text-white/40 font-bold uppercase mb-4">{t.stabilityIndex}</div>
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-24 h-24">
                    <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle 
                      cx="48" cy="48" r="40" fill="none" stroke={MAROON} strokeWidth="8" 
                      strokeDasharray={251.2} 
                      strokeDashoffset={251.2 * (1 - stabilityIndex / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xl font-bold">{stabilityIndex}%</span>
                </div>
                <div className="mt-4 text-[10px] text-emerald-400 font-bold">{isRTL ? "مستقر للغاية" : "HIGHLY STABLE"}</div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-3xl p-6 text-center">
                <div className="text-[10px] text-white/40 font-bold uppercase mb-4">{t.leadershipScore}</div>
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-24 h-24">
                    <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle 
                      cx="48" cy="48" r="40" fill="none" stroke={GOLD} strokeWidth="8" 
                      strokeDasharray={251.2} 
                      strokeDashoffset={251.2 * (1 - leadershipScore / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xl font-bold">{leadershipScore}</span>
                </div>
                <div className="mt-4 text-[10px] text-[#C5A059] font-bold">{isRTL ? "استثنائي" : "EXCEPTIONAL"}</div>
              </div>
            </section>

            {/* Smart Alerts */}
            <section className="bg-black/40 border border-white/10 rounded-3xl p-6">
              <h2 className={cn("text-sm font-bold mb-4 flex items-center uppercase tracking-widest", isRTL ? "flex-row-reverse" : "")}>
                <Activity className="w-4 h-4 mx-2 text-rose-500" />
                {t.liveAlerts}
              </h2>
              <div className="space-y-3">
                <div className={cn("flex items-start p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl", isRTL ? "flex-row-reverse" : "")}>
                  <AlertTriangle className="w-4 h-4 text-rose-500 mx-3 mt-0.5" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-xs font-bold text-rose-500">{isRTL ? "ارتفاع معدل التخلي" : "Abandon Rate Spike"}</p>
                    <p className="text-[10px] text-white/60">{isRTL ? "تم اكتشاف زيادة بنسبة 2.5% في قطاع الريان." : "Detected 2.5% increase in Al Rayyan sector."}</p>
                  </div>
                </div>
                <div className={cn("flex items-start p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl", isRTL ? "flex-row-reverse" : "")}>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mx-3 mt-0.5" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="text-xs font-bold text-emerald-500">{isRTL ? "تحقيق هدف مستوى الخدمة" : "SLA Target Achieved"}</p>
                    <p className="text-[10px] text-white/60">{isRTL ? "تم الحفاظ على مستوى الخدمة فوق 90% لمدة 48 ساعة." : "Service Level maintained above 90% for 48h."}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-xl p-12 mt-12">
        <div className={cn("max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0", isRTL ? "md:flex-row-reverse md:text-right" : "")}>
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tighter text-[#C5A059]">{t.leadershipTitle}</h3>
            <p className="text-lg font-medium">{t.name}</p>
            <p className="text-white/40 text-sm">{t.dept}</p>
          </div>
          
          <div className={cn("flex flex-col items-center space-y-4", isRTL ? "md:items-start" : "md:items-end")}>
            <div className="flex space-x-6">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Qatar.svg/1200px-Emblem_of_Qatar.svg.png" alt="Logo" className="h-12 opacity-50 grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className={isRTL ? "text-left" : "text-right"}>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.preparedBy}</p>
              <p className="text-sm font-bold text-[#C5A059]">{lang === 'en' ? "Rakan Mohammed Al-Marri" : "راكان محمد آل عتيق المري"}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
