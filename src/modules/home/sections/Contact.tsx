import emailjs from 'emailjs-com';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('sending');
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE || 'service_xxx',
        import.meta.env.VITE_EMAILJS_TEMPLATE || 'template_xxx',
        Object.fromEntries(formData.entries()),
        import.meta.env.VITE_EMAILJS_PUBLIC || 'public_xxx'
      )
      .then(() => setStatus('sent'))
      .catch(() => setStatus('error'));
  }

  return (
    <section id="contato" className="bg-brand-dark text-white py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-display font-semibold mb-8">Fale Conosco</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={onSubmit} className="space-y-4">
            <input required name="nome" placeholder="Nome" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <input required type="email" name="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <input name="telefone" placeholder="Telefone" className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <textarea required name="mensagem" placeholder="Mensagem" rows={5} className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <button disabled={status==='sending'} className="px-6 py-3 rounded-full bg-brand-green disabled:opacity-60 font-medium hover:bg-brand-green/90 transition">
              {status==='sending' ? 'Enviando...' : status==='sent' ? 'Enviada!' : 'Enviar'}
            </button>
            {status==='error' && <p className="text-sm text-red-400">Erro ao enviar. Tente novamente.</p>}
          </form>
          <div className="space-y-6">
            <p className="text-brand-green font-semibold text-lg">Condomínio Estância da Serra</p>
            <p className="text-white/70 max-w-md">Preencha seus dados para receber prioridade nas próximas etapas de lançamento, atualizações de avanço das obras e condições comerciais assim que forem divulgadas.</p>
            <div className="space-y-2 text-white/80 text-sm">
              <p><strong>Endereço (referência):</strong> Região rural - ajustar quando definido</p>
              <p><strong>Telefone:</strong> (00) 00000-0000</p>
              <p><strong>E-mail:</strong> contato@estanciadasserra.com.br</p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com/estancia.da.serra" target="_blank" rel="noopener" className="underline">Instagram</a>
              <a href="#" className="underline">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
