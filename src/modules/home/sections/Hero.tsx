import { motion } from 'framer-motion';
// Assets servidos via pasta public
// Vídeo institucional (substituir por versão final quando disponível)
const heroVideo = 'media/hero.mp4';
const logo = 'media/logo-horizontal.png';

export function Hero() {
  return (
  <section id="inicio" className="relative min-h-[100svh] h-[100dvh] xl:h-[92vh] w-full flex items-center justify-center overflow-hidden pb-safe">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover brightness-75" poster="/media/logo-horizontal.png" onError={(e)=>{(e.currentTarget as HTMLVideoElement).style.display='none';}}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hidden bg-center bg-cover brightness-75" style={{backgroundImage:'url(/gallery/1.jpg)'}} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center px-4 xs:px-6"
      >
  <img src={logo} alt="Estância da Serra" className="mx-auto max-w-[340px] phone:max-w-[360px] md:max-w-[420px] w-11/12 mb-5 md:mb-8 drop-shadow" />
        <h1 className="text-fluid-hero md:text-5xl font-display font-semibold text-white max-w-3xl mx-auto">
          Um Condomínio em Construção no Coração da Natureza
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-5 md:mt-6 leading-relaxed">
          A Estância da Serra está ganhando forma: estradas internas em finalização e preparação do terreno. Acompanhe a evolução e garanta prioridade nas próximas etapas.
        </p>
        <div className="flex flex-col phone:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-10">
          <a href="#progresso" className="px-6 phone:px-7 sm:px-8 py-3 phone:py-3.5 sm:py-4 rounded-full bg-brand-green text-white font-medium shadow-soft hover:bg-brand-green/90 transition text-sm xs:text-base">Ver Progresso</a>
          <a href="#contato" className="px-6 phone:px-7 sm:px-8 py-3 phone:py-3.5 sm:py-4 rounded-full bg-white/10 backdrop-blur text-white font-medium shadow-soft hover:bg-white/20 transition border border-white/20 text-sm xs:text-base">Registrar Interesse</a>
        </div>
      </motion.div>
    </section>
  );
}
