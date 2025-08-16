import { motion, AnimatePresence } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: 'logo-navbar',
  md: 'logo-navbar',
  lg: 'logo-navbar',
  xl: 'logo-hero'
};

const logoStyles = {
  sm: 'logo-estancia',
  md: 'logo-estancia',
  lg: 'logo-estancia',
  xl: 'logo-estancia logo-estancia-hero'
};

const textSizeClasses = {
  sm: 'text-xs xs:text-sm',
  md: 'text-sm xs:text-base phone:text-lg',
  lg: 'text-lg xs:text-xl phone:text-2xl',
  xl: 'text-xl xs:text-2xl phone:text-3xl md:text-4xl'
};

export function Logo({ 
  size = 'md', 
  showText = false, 
  className = '', 
  animated = false 
}: LogoProps) {
  const logoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  if (animated) {
    return (
      <motion.div 
        variants={logoVariants}
        className={`flex items-center gap-2 w-full max-w-full ${className}`}
      >
        <img 
          src="/media/logo-provisoria.jpeg" 
          alt="Estância da Serra" 
          className={`${sizeClasses[size]} ${logoStyles[size]} object-contain flex-shrink-0`}
        />
        <AnimatePresence>
          {showText && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`font-display font-bold text-brand-green-600 tracking-wide ${textSizeClasses[size]} hidden ${size === 'sm' ? 'md:block' : 'phone:block'} truncate flex-1 min-w-0`}
            >
              ESTÂNCIA DA SERRA
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <div className={`flex items-center gap-2 w-full max-w-full ${className}`}>
      <img 
        src="/media/logo-provisoria.jpeg" 
        alt="Estância da Serra" 
        className={`${sizeClasses[size]} ${logoStyles[size]} object-contain flex-shrink-0`}
      />
      <AnimatePresence>
        {showText && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`font-display font-bold text-brand-green-600 tracking-wide ${textSizeClasses[size]} hidden ${size === 'sm' ? 'md:block' : 'phone:block'} truncate flex-1 min-w-0`}
          >
            ESTÂNCIA DA SERRA
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
