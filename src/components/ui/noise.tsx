export const Noise = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-1 opacity-[0.05] mix-blend-overlay"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <title>noise</title>
        <filter id="postab-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#postab-noise)" />
      </svg>
    </div>
  );
};
