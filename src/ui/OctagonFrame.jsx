// A thin octagon border with a bright segment continuously traveling around
// it (like data pulsing along a circuit trace), wrapping whatever's passed
// as children (clipped to the same octagon).
const POINTS = '30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30';

export default function OctagonFrame({
  size = 112,
  accent = '#4ADE80',
  dim = 'rgba(74,222,128,0.35)',
  className = '',
  children,
}) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
        <polygon points={POINTS} fill="none" stroke={dim} strokeWidth="1.5" />
        <polygon
          points={POINTS}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeDasharray="40 290"
          className="octagon-trace"
        />
      </svg>
      <div className="octagon-clip absolute inset-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
