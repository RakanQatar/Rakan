export interface CallMetrics {
  date: string;
  year: number;
  month: string;
  incoming: number;
  answered: number;
  lost: number;
  serviceLevel: number;
  abandonRate: number;
  aht: number; // in seconds
  waitTime: number; // in seconds
  fcr: number;
  crmRequests: number;
  complaints: number;
  digitalInteractions: {
    socialMedia: number;
    email: number;
    systemPortal: number;
  };
  regionData: {
    doha: number;
    alRayyan: number;
    alWakra: number;
    alKhor: number;
    alDaayen: number;
    ummSalal: number;
    alShamal: number;
    alShahaniya: number;
  };
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const generateMockData = (): CallMetrics[] => {
  const data: CallMetrics[] = [];
  const years = [2023, 2024, 2025];

  years.forEach(year => {
    months.forEach((month, index) => {
      // Base growth trend
      const growthFactor = year === 2025 ? 1.2 : year === 2024 ? 1.1 : 1.0;
      const seasonalFactor = 1 + Math.sin((index / 12) * Math.PI) * 0.2;
      
      const incoming = Math.floor(15000 * growthFactor * seasonalFactor + Math.random() * 2000);
      const answered = Math.floor(incoming * (0.85 + Math.random() * 0.1));
      const lost = incoming - answered;
      
      data.push({
        date: `${month} ${year}`,
        year,
        month,
        incoming,
        answered,
        lost,
        serviceLevel: 80 + Math.random() * 15,
        abandonRate: 2 + Math.random() * 5,
        aht: 180 + Math.random() * 60,
        waitTime: 15 + Math.random() * 20,
        fcr: 75 + Math.random() * 10,
        crmRequests: Math.floor(incoming * 0.6),
        complaints: Math.floor(incoming * 0.05),
        digitalInteractions: {
          socialMedia: Math.floor(incoming * 0.15),
          email: Math.floor(incoming * 0.1),
          systemPortal: Math.floor(incoming * 0.25),
        },
        regionData: {
          doha: Math.floor(Math.random() * 5000),
          alRayyan: Math.floor(Math.random() * 4000),
          alWakra: Math.floor(Math.random() * 3000),
          alKhor: Math.floor(Math.random() * 2000),
          alDaayen: Math.floor(Math.random() * 1500),
          ummSalal: Math.floor(Math.random() * 1200),
          alShamal: Math.floor(Math.random() * 800),
          alShahaniya: Math.floor(Math.random() * 1000),
        }
      });
    });
  });

  return data;
};

export const getForecastData = (lastData: CallMetrics) => {
  const forecast = [];
  for (let i = 1; i <= 6; i++) {
    forecast.push({
      month: `Forecast +${i}`,
      incoming: Math.floor(lastData.incoming * (1 + i * 0.02)),
      pressure: 75 + i * 2,
      requests: Math.floor(lastData.crmRequests * (1 + i * 0.015)),
    });
  }
  return forecast;
};
