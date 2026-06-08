import FadeIn from './FadeIn';

const links = ['About', 'Price', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
      <div className="flex w-full justify-between">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </FadeIn>
  );
}
