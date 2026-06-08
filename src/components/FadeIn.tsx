import { motion } from 'framer-motion';

interface FadeInProps {
  as?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'section' | 'nav' | 'img';
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const MotionComponents: Record<string, any> = {
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  section: motion.section,
  nav: motion.nav,
  img: motion.img,
};

export default function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...rest
}: FadeInProps) {
  const MotionComponent = MotionComponents[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
