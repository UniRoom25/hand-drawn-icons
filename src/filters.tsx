export const TextureFilter = ({ id }: { id: string }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
    <feColorMatrix type="saturate" values="0" in="noise" result="desaturatedNoise" />
    <feComposite operator="in" in="desaturatedNoise" in2="SourceGraphic" result="composite" />
    <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
  </filter>
);

export const RoughFilter = ({ id }: { id: string }) => (
  <filter id={id}>
    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
  </filter>
);
