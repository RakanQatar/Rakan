import React from 'react';
import { motion } from 'framer-motion';

const regions = [
  { id: 'doha', name: 'Doha', path: 'M 150,250 L 170,240 L 180,260 L 160,270 Z', color: '#8D1B3D' },
  { id: 'alRayyan', name: 'Al Rayyan', path: 'M 50,200 L 150,250 L 140,350 L 40,300 Z', color: '#8D1B3D' },
  { id: 'alWakra', name: 'Al Wakra', path: 'M 150,350 L 200,450 L 250,400 L 180,300 Z', color: '#8D1B3D' },
  { id: 'alKhor', name: 'Al Khor', path: 'M 100,50 L 200,100 L 180,150 L 80,100 Z', color: '#8D1B3D' },
  { id: 'alDaayen', name: 'Al Daayen', path: 'M 180,150 L 220,180 L 200,220 L 160,200 Z', color: '#8D1B3D' },
  { id: 'ummSalal', name: 'Umm Salal', path: 'M 140,150 L 180,150 L 160,200 L 120,200 Z', color: '#8D1B3D' },
  { id: 'alShamal', name: 'Al Shamal', path: 'M 120,10 L 160,30 L 140,60 L 100,40 Z', color: '#8D1B3D' },
  { id: 'alShahaniya', name: 'Al Shahaniya', path: 'M 20,100 L 80,100 L 100,200 L 40,200 Z', color: '#8D1B3D' },
];

// Simple SVG representation of Qatar map
export const QatarMap: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/20 rounded-xl border border-white/10 p-4">
      <svg viewBox="0 0 300 500" className="w-full h-full max-h-[400px]">
        {/* Simplified Qatar Outline */}
        <path
          d="M 120,10 L 160,30 L 180,80 L 220,150 L 240,250 L 220,350 L 180,450 L 120,480 L 60,450 L 40,350 L 30,250 L 50,150 L 80,80 Z"
          fill="rgba(141, 27, 61, 0.1)"
          stroke="#C5A059"
          strokeWidth="2"
        />
        
        {regions.map((region) => {
          const value = data[region.id] || 0;
          const opacity = Math.min(0.2 + (value / 5000) * 0.8, 1);
          
          return (
            <motion.path
              key={region.id}
              d={region.path}
              fill={region.color}
              fillOpacity={opacity}
              stroke="#C5A059"
              strokeWidth="0.5"
              whileHover={{ scale: 1.05, fillOpacity: 1 }}
              className="cursor-pointer transition-all duration-300"
            >
              <title>{`${region.name}: ${value} Requests`}</title>
            </motion.path>
          );
        })}
        
        {/* Doha Marker */}
        <circle cx="165" standalone="true" cy="255" r="5" fill="#C5A059">
          <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      <div className="absolute bottom-4 right-4 text-[10px] text-white/50 font-mono">
        INTERACTIVE GEOSPATIAL ANALYSIS
      </div>
    </div>
  );
};
