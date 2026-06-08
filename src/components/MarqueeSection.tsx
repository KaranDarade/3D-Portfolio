import { useRef, useState, useEffect } from 'react';

const marqueeImages = Array.from({ length: 21 }, (_, i) =>
  `https://picsum.photos/seed/marquee${i + 1}/420/270`
);

const row1 = marqueeImages.slice(0, 11);
const row2 = marqueeImages.slice(11);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollOffset = (window.scrollY - rect.top + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderRow = (images: string[], direction: 'right' | 'left') => {
    const triple = [...images, ...images, ...images];
    const x = direction === 'right' ? offset - 200 : -(offset - 200);

    return (
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}
      >
        {triple.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {renderRow(row1, 'right')}
        {renderRow(row2, 'left')}
      </div>
    </section>
  );
}
