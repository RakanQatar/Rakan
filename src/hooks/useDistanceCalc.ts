import { useState, useCallback } from 'react';

interface DistanceResult {
  distanceKm: number | null;
  loading: boolean;
  error: string | null;
}

/**
 * Attempts to fetch driving distance between two addresses in Qatar
 * using the Google Maps Distance Matrix API (if VITE_GOOGLE_MAPS_KEY is set).
 * Falls back to null so the UI can show a manual input instead.
 */
export function useDistanceCalc() {
  const [state, setState] = useState<DistanceResult>({
    distanceKm: null,
    loading: false,
    error: null,
  });

  const calculate = useCallback(async (origin: string, destination: string) => {
    if (!origin.trim() || !destination.trim()) return;

    const apiKey = (import.meta as Record<string, unknown> & { env: Record<string,string> }).env?.VITE_GOOGLE_MAPS_KEY;

    if (!apiKey) {
      // No API key — the UI will show manual distance input
      setState({ distanceKm: null, loading: false, error: null });
      return;
    }

    setState({ distanceKm: null, loading: true, error: null });
    try {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin + ', Qatar')}&destinations=${encodeURIComponent(destination + ', Qatar')}&key=${apiKey}&language=ar&units=metric`;
      const res  = await fetch(url);
      const data = await res.json();
      const meters = data?.rows?.[0]?.elements?.[0]?.distance?.value;
      if (meters) {
        setState({ distanceKm: meters / 1000, loading: false, error: null });
      } else {
        setState({ distanceKm: null, loading: false, error: 'تعذّر تحديد المسافة تلقائياً' });
      }
    } catch {
      setState({ distanceKm: null, loading: false, error: 'حدث خطأ أثناء حساب المسافة' });
    }
  }, []);

  const reset = useCallback(() => {
    setState({ distanceKm: null, loading: false, error: null });
  }, []);

  return { ...state, calculate, reset };
}
