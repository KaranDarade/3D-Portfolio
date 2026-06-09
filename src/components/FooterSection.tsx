const navLinks = ['About', 'Price', 'Projects', 'Contact'];
const socialLinks = [
  { name: 'GitHub', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="hero-heading font-black uppercase text-2xl md:text-3xl tracking-tight">
            KD
          </span>

          <nav className="flex gap-6 md:gap-10 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-sm md:text-base hover:text-[#D7E2EA] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-[#D7E2EA]/40 font-medium uppercase tracking-wider text-xs hover:text-[#D7E2EA] transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#D7E2EA]/10">
          <p className="text-[#D7E2EA]/30 font-light text-xs tracking-wide">
            &copy; {new Date().getFullYear()} KD. All rights reserved.
          </p>
          <p className="text-[#D7E2EA]/20 font-light text-xs tracking-wide">
            Designed &amp; Built by KD
          </p>
        </div>
      </div>
    </footer>
  );
}
