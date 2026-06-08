import { useRef, useState, useEffect, useCallback } from 'react';

interface EyePosition {
  x: number;
  y: number;
}

export default function AnimatedPortrait({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<EyePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxPx = 5.5;
    const clamp = Math.min(dist / 15, 1);
    setPos({
      x: (dx / (dist || 1)) * clamp * maxPx,
      y: (dy / (dist || 1)) * clamp * maxPx,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#3a3a4e" />
            <stop offset="100%" stopColor="#222235" />
          </radialGradient>
          <radialGradient id="eyeShine" cx="35%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d0d0e0" />
          </radialGradient>
          <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141425" />
            <stop offset="100%" stopColor="#1e1e32" />
          </linearGradient>
        </defs>

        {/* Neck */}
        <rect x="90" y="220" width="60" height="60" rx="10" fill="#1e1e30" />

        {/* Shoulders */}
        <path d="M45 270 Q50 240 90 230 L150 230 Q190 240 195 270 Z" fill="#1a1a2e" />
        <path d="M60 270 Q65 250 95 240 L145 240 Q175 250 180 270 Z" fill="#222238" />

        {/* Head */}
        <ellipse cx="120" cy="135" rx="72" ry="92" fill="url(#skinGrad)" />

        {/* Hair base */}
        <path d="M48 100 Q55 40 120 35 Q185 40 192 100 Q188 80 170 68 Q150 58 120 56 Q90 58 70 68 Q52 80 48 100Z" fill="url(#hairGrad)" />
        {/* Hair sides */}
        <path d="M48 100 Q46 110 50 120 Q52 115 54 108Z" fill="url(#hairGrad)" />
        <path d="M192 100 Q194 110 190 120 Q188 115 186 108Z" fill="url(#hairGrad)" />

        {/* Eyebrows */}
        <path d="M62 108 Q72 100 86 104" stroke="#111120" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M154 108 Q168 100 178 104" stroke="#111120" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="85" cy="125" rx="13" ry="15" fill="url(#eyeShine)" />
        <ellipse cx="155" cy="125" rx="13" ry="15" fill="url(#eyeShine)" />
        <ellipse cx="85" cy="125" rx="13" ry="15" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />

        {/* Pupils */}
        <circle cx={85 + pos.x} cy={125 + pos.y} r="5.5" fill="#0C0C0C" />
        <circle cx={155 + pos.x} cy={125 + pos.y} r="5.5" fill="#0C0C0C" />

        {/* Eye highlights */}
        <circle cx={85 + pos.x * 0.6 - 1.5} cy={125 + pos.y * 0.6 - 2} r="2" fill="rgba(255,255,255,0.7)" />
        <circle cx={155 + pos.x * 0.6 - 1.5} cy={125 + pos.y * 0.6 - 2} r="2" fill="rgba(255,255,255,0.7)" />

        {/* Nose */}
        <path d="M120 130 Q115 145 108 152 Q120 158 132 152 Q125 145 120 130Z" fill="#2e2e44" opacity="0.4" />
        <line x1="120" y1="132" x2="120" y2="150" stroke="#2e2e44" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

        {/* Mouth */}
        <path d="M100 168 Q110 176 120 176 Q130 176 140 168" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  );
}
