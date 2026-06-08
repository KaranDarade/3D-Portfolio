import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const aboutText =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn
        as="img"
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
        src="https://picsum.photos/seed/moon-icon/210/210"
        alt=""
      />

      <FadeIn
        as="img"
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
        src="https://picsum.photos/seed/object3d/180/180"
        alt=""
      />

      <FadeIn
        as="img"
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
        src="https://picsum.photos/seed/lego-icon/210/210"
        alt=""
      />

      <FadeIn
        as="img"
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
        src="https://picsum.photos/seed/group3d/220/220"
        alt=""
      />

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          About me
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  );
}
