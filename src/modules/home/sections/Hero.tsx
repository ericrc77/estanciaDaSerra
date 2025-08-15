import { motion } from 'framer-motion';
// Assets servidos via pasta public
const heroVideo = '/media/hero-placeholder.mp4';
const logo = '/media/logo-horizontal.png';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-75">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-6"
      >
        <img src={logo} alt="Estância da Serra" className="mx-auto max-w-[420px] w-11/12 mb-8 drop-shadow" />
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-white max-w-3xl mx-auto leading-tight">
          Um Condomínio em Construção no Coração da Natureza
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6">
          A Estância da Serra está ganhando forma: estradas internas em finalização e preparação do terreno. Acompanhe a evolução e garanta prioridade nas próximas etapas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#progresso" className="px-8 py-4 rounded-full bg-brand-green text-white font-medium shadow-soft hover:bg-brand-green/90 transition">Ver Progresso</a>
          <a href="#contato" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur text-white font-medium shadow-soft hover:bg-white/20 transition border border-white/20">Registrar Interesse</a>
        </div>
      </motion.div>
    </section>
  );
}
