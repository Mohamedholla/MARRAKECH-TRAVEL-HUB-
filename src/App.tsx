/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Ghost, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Star 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "212687401599";
const EMAIL = "MOHMEDSITOUMGHAR@GMAIL.COM";
const ADDRESS = "Marrakech 45000, Maroc";

const activities = [
  {
    id: 1,
    name: "Mohamed salah",
    image: "https://c.files.bbci.co.uk/A179/production/_99473314_mohamedsalah01.jpg",
    promo: true,
  },
  {
    id: 2,
    name: "Balade en dromadaire",
    image: "https://images.unsplash.com/photo-1523496922380-91d5af098ad5?auto=format&fit=crop&q=80&w=800",
    promo: true,
  },
  {
    id: 3,
    name: "Dîner & Camp Désert",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800",
    promo: true,
  },
  {
    id: 4,
    name: "Soirée Bivouac",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
    promo: true,
  }
];

export default function App() {
  const openWhatsApp = (activityName?: string) => {
    const text = activityName 
      ? `Bonjour, je souhaite réserver l'activité : ${activityName}`
      : "Bonjour, je souhaite réserver une aventure à Marrakech !";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#8B0000] rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-9 h-9 bg-[#D4AF37] rounded-full"></div>
                <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                  <div className="w-4 h-1.5 bg-white absolute top-1 left-1 rounded-full transform -rotate-12"></div>
                  <div className="w-2 h-5 bg-white absolute top-1 right-2 rounded-full transform rotate-12"></div>
                </div>
              </div>
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic text-white">Marrakech <span className="text-orange-600">Travel Hub</span></span>
          </div>
          <button 
            onClick={() => openWhatsApp()}
            className="hidden md:flex items-center gap-2 bg-orange-600 hover:bg-orange-500 transition-colors px-6 py-2 rounded-full font-semibold text-sm"
          >
            <MessageCircle size={18} />
            Contact Direct
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1920" 
            alt="Marrakech Desert"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 px-3 py-1 rounded-full text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} fill="currentColor" />
              Expérience N°1 à Marrakech
            </div>
            <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
              Unveil the <span className="text-orange-600">Magic</span> of Morocco
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-lg leading-relaxed">
              Vivez l'adrénaline pure au cœur du désert. Buggy, Quad et Moto Cross pour une aventure inoubliable.
            </p>

            <button 
              onClick={() => openWhatsApp()}
              className="group relative flex items-center gap-4 bg-orange-600 hover:bg-orange-500 transition-all px-8 py-5 rounded-2xl font-black text-xl uppercase italic tracking-tighter overflow-hidden shadow-2xl shadow-orange-600/20"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={28} className="relative z-10" />
              <span className="relative z-10">Réservez WhatsApp</span>
              <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                Nos <span className="text-orange-600">Activités</span>
              </h2>
              <div className="h-1.5 w-24 bg-orange-600 rounded-full"></div>
            </div>
            <p className="text-zinc-400 max-w-md text-lg">
              Choisissez votre monture et partez à la conquête des dunes de Marrakech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-600/50 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>

                {activity.promo && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg animate-pulse">
                    PROMO DU MOMENT
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight">
                    {activity.name}
                  </h3>
                  <button 
                    onClick={() => openWhatsApp(activity.name)}
                    className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-orange-600 hover:text-white transition-all py-3 rounded-xl font-bold uppercase text-sm tracking-wider"
                  >
                    <MessageCircle size={18} />
                    Réservez par WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000" 
                alt="Adventure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 p-8 rounded-3xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Sécurité 100%</p>
                  <p className="text-zinc-500 text-sm">Guides certifiés</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Expérience</p>
                  <p className="text-zinc-500 text-sm">Plus de 10 ans</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8">
              L'Aventure <span className="text-orange-600">Authentique</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Plongez au cœur de la palmeraie de Marrakech pour une expérience hors du commun. Nos guides passionnés vous feront découvrir des paysages époustouflants, entre désert de pierre et oasis verdoyantes. Que vous soyez débutant ou pilote chevronné, nous adaptons nos parcours pour vous garantir des sensations fortes en toute sécurité. Des moments inoubliables vous attendent sous le soleil du Maroc.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-orange-500 font-black text-3xl mb-1">5k+</p>
                <p className="text-zinc-500 text-sm uppercase font-bold tracking-wider">Clients Satisfaits</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-orange-500 font-black text-3xl mb-1">100%</p>
                <p className="text-zinc-500 text-sm uppercase font-bold tracking-wider">Adrénaline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-[#8B0000] rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-9 h-9 bg-[#D4AF37] rounded-full"></div>
                    <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                      <div className="w-4 h-1.5 bg-white absolute top-1 left-1 rounded-full transform -rotate-12"></div>
                      <div className="w-2 h-5 bg-white absolute top-1 right-2 rounded-full transform rotate-12"></div>
                    </div>
                  </div>
                </div>
                <span className="font-black text-2xl tracking-tighter uppercase italic text-white">Marrakech <span className="text-orange-600">Travel Hub</span></span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8">
                Votre partenaire de confiance pour des aventures mémorables à Marrakech. Buggy, Quad, Moto et Dromadaire.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/marrakechtravelhub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Ghost size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black italic uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-zinc-400">
                  <Phone size={18} className="text-orange-600" />
                  <span>+212 687 401 599</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-400">
                  <Mail size={18} className="text-orange-600" />
                  <span className="text-sm break-all">{EMAIL}</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-400">
                  <MapPin size={18} className="text-orange-600 mt-1 shrink-0" />
                  <span>{ADDRESS}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black italic uppercase tracking-wider mb-6">Horaires</h4>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex justify-between">
                  <span>Lun - Dim</span>
                  <span className="text-white font-bold">08:00 - 20:00</span>
                </li>
                <li className="text-xs text-zinc-600 mt-4 italic">
                  * Ouvert les jours fériés
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Marrakech Travel Hub. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          Réservez maintenant !
        </span>
      </button>
    </div>
  );
}
