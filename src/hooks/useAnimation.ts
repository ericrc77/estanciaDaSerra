import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useAnimateOnScroll(options: UseAnimateOnScrollOptions = {}) {
  const {
    threshold = 0.2,
    triggerOnce = true,
    delay = 0
  } = options;

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start('visible');
      }, delay);
      return () => clearTimeout(timer);
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [inView, controls, delay, triggerOnce]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return { ref, controls, variants, inView };
}

export function useStaggerChildren(delayBetween = 0.1) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delayBetween
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return { containerVariants, itemVariants };
}
