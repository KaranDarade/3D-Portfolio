import FadeIn from './FadeIn';
import Navbar from './Navbar';
import ContactButton from './ContactButton';


export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-between overflow-hidden relative" style={{ overflowX: 'clip' }}>
      <Navbar />

      <div className="overflow-hidden w-full">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
          Hi, i&apos;m KD
        </FadeIn>
      </div>

      <FadeIn
        as="div"
        delay={0.35}
        y={20}
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10"
      >
        <p
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </p>

        <FadeIn as="div" delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </FadeIn>


    </section>
  );
}
