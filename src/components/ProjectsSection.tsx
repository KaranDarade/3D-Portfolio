import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1img1: 'https://picsum.photos/seed/nextlevel1/400/250',
    col1img2: 'https://picsum.photos/seed/nextlevel2/400/350',
    col2img: 'https://picsum.photos/seed/nextlevel3/600/650',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1img1: 'https://picsum.photos/seed/aura1/400/250',
    col1img2: 'https://picsum.photos/seed/aura2/400/350',
    col2img: 'https://picsum.photos/seed/aura3/600/650',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1img1: 'https://picsum.photos/seed/solaris1/400/250',
    col1img2: 'https://picsum.photos/seed/solaris2/400/350',
    col2img: 'https://picsum.photos/seed/solaris3/600/650',
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
  scrollYProgress,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
  scrollYProgress: any;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [index / totalCards, (index + 1) / totalCards],
    [1, targetScale]
  );

  return (
    <div className="h-[85vh] flex items-center">
      <motion.div
        className="sticky overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full"
        style={{ top: `${index * 28 + 96}px`, scale, transformOrigin: 'top' }}
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <span className="text-[#D7E2EA]/60 font-light uppercase text-sm sm:text-base tracking-wider">
              {project.category}
            </span>
            <span className="text-[#D7E2EA] font-medium uppercase flex-1" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
              {project.name}
            </span>
            <LiveProjectButton />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <img
                src={project.col1img1}
                alt=""
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1img2}
                alt=""
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div style={{ width: '60%' }}>
              <img
                src={project.col2img}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
