
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHandshake } from 'react-icons/fa';
import React, { useState } from 'react';
import ChatBot from '../../../components/ChatBot';

export function Contact() {
  const [showChat, setShowChat] = useState(false);
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Telefone',
      value: '+55 33 9860-0270',
      href: 'tel:+5533986002700',
      color: 'text-brand-green-600'
    },
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: 'contato@estanciadaserra.com.br',
      href: 'mailto:contato@estanciadaserra.com.br',
      color: 'text-brand-orange-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localização',
      value: 'Iapu, MG',
      href: '#location',
      color: 'text-brand-gray-600'
    }
  ];

  const socialMedia = [
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://instagram.com/estancia.da.serra',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-50'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/5533986002700',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-brand-gray-50 to-white">
      <div className="container-padding mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-fluid-section-title font-bold text-brand-gray-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-fluid-base text-brand-gray-600 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para ajudá-lo a encontrar o lote perfeito na Estância da Serra. 
              Entre em contato conosco através dos canais abaixo.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-brand-gray-100 to-brand-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-gray-800 mb-2">{info.label}</h3>
                    <p className="text-brand-gray-600 break-all">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-brand-gray-800 mb-6">
              Siga-nos nas Redes Sociais
            </h3>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-gray-600 ${social.color} ${social.bgColor} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-brand-gray-500 mt-4">
              Acompanhe nossos projetos e novidades
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-primary rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Conhecer a Estância da Serra?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Agende uma visita e descubra o seu futuro lar
            </p>
            <motion.button
              type="button"
              className="inline-flex items-center gap-3 bg-white text-brand-green-700 px-8 py-4 rounded-full font-semibold hover:bg-brand-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-brand-green-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowChat(true)}
            >
              <FaHandshake className="w-5 h-5" />
              <span>Agendar Visita</span>
            </motion.button>
            {showChat && <ChatBot userId={String(Date.now())} />}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
