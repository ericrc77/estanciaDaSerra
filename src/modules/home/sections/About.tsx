import { motion } from 'framer-motion';
import { useAnimateOnScroll, useStaggerChildren } from '../../../hooks/useAnimation';
import { Check, MapPin, Shield, Sparkles } from 'lucide-react';
import { asset } from '../../../shared/assetPath';

const features = [
  { icon: Shield, text: 'Portaria projetada', color: 'text-brand-green-600' },
  { icon: MapPin, text: 'Mobilidade interna otimizada', color: 'text-brand-orange-600' },
  { icon: Sparkles, text: 'Viário em finalização', color: 'text-brand-green-600' },
  { icon: Check, text: 'Ambiente silencioso', color: 'text-brand-gray-600' },
  { icon: Check, text: 'Potencial paisagístico', color: 'text-brand-orange-600' },
  { icon: Check, text: 'Lotes amplos', color: 'text-brand-green-600' }
];

export function About() {
  const { ref, controls, variants } = useAnimateOnScroll({ threshold: 0.3 });
  const { containerVariants, itemVariants } = useStaggerChildren(0.1);

  return (
    <section 
      id="sobre" 
      className="relative px-4 xs:px-6 max-w-6xl mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(${asset('media/terreno.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85 backdrop-blur-sm" />
      
      <motion.div 
        ref={ref}
        animate={controls}
        variants={variants}
        className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-start w-full py-16"
      >
        <div className="order-2 md:order-1 space-y-8 w-full">
          <motion.header
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="w-full"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-fluid-section-title font-display font-semibold text-brand-gray-800 mb-6 leading-tight word-break-keep"
            >
              Viver Conectado à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-500 to-brand-orange-500">
                Paisagem
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-brand-gray-600 dark:text-white/80 word-break-keep"
            >
              Implantação em fase inicial com foco em infraestrutura essencial e preparação do terreno. 
              Proposta de urbanismo que valoriza visuais amplos, boa insolação e áreas destinadas ao convívio futuro.
            </motion.p>
          </motion.header>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 phone:grid-cols-2 gap-4 w-full"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-brand-gray-700/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 card-hover group w-full min-w-0"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-green-100 dark:bg-brand-green-900/30 flex items-center justify-center group-hover:bg-brand-orange-200 dark:group-hover:bg-brand-orange-800/50 transition-colors">
                  <feature.icon size={16} className={feature.color} />
                </div>
                <span className="text-sm font-medium text-brand-gray-700 dark:text-white/90 group-hover:text-brand-orange-700 dark:group-hover:text-brand-orange-300 transition-colors word-break-keep flex-1 min-w-0">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-4 rounded-2xl bg-gradient-to-r from-brand-green-50 to-brand-green-100 dark:from-brand-green-900/20 dark:to-brand-green-800/20 border border-brand-green-200 dark:border-brand-green-700/50"
          >
            <p className="text-xs xs:text-sm text-brand-green-800 dark:text-brand-green-200 leading-relaxed">
              <strong className="font-semibold">Transparência:</strong> Informações técnicas complementares serão divulgadas conforme avanço das etapas de construção.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={variants}
          className="order-1 md:order-2 relative group"
        >
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-soft-lg">
              <motion.img 
              src={asset('gallery/1.jpg')} 
              alt="Vista da área do empreendimento" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            {/* Overlay gradientes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-brand-green-900/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-orange-900/20" />
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 glass-effect text-white/90 text-xs font-medium px-3 py-2 rounded-lg backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green-400 rounded-full animate-pulse-slow" />
                Imagem ilustrativa
              </div>
            </motion.div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-4 right-4 glass-effect text-white text-xs px-3 py-2 rounded-lg backdrop-blur-md"
            >
              <div className="text-center">
                <div className="font-bold text-brand-orange-300">+1000m²</div>
                <div className="text-white/80">Lotes amplos</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-green-200 to-brand-green-400 rounded-full opacity-20 blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-brand-orange-200 to-brand-orange-400 rounded-full opacity-10 blur-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
