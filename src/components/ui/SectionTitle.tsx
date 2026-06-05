interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = false, light = false }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
          light
            ? 'bg-white/15 text-[#C9A86A]'
            : 'bg-[#8A1538]/8 text-[#8A1538]'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-black leading-tight mb-4 ${
        light ? 'text-white' : 'text-[#1C1C1C]'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${
          center ? 'mx-auto' : ''
        } ${
          light ? 'text-white/75' : 'text-[#5A5A5A]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
