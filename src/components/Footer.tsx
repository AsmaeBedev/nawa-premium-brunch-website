import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Utensils, ShoppingBag, Bike } from 'lucide-react';

// Simple SVG social icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const hours = [
  { day: 'Lundi – Vendredi', time: '07h30 – 18h00' },
  { day: 'Samedi', time: '07h30 – 20h00' },
  { day: 'Dimanche', time: '08h00 – 19h00' },
];

const services = [
  { icon: Utensils, label: 'Repas sur place', desc: 'Profitez de notre cadre chaleureux' },
  { icon: ShoppingBag, label: 'Vente à emporter', desc: 'Commande prête en 15 minutes' },
  { icon: Bike, label: 'Livraison', desc: 'Directement chez vous' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer id="contact" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Contact / Info section */}
      <section className="py-36 md:py-44 border-t" style={{ borderColor: 'rgba(61,43,31,0.08)' }}>
        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: '#F5DDD3' }}
            >
              <span
                className="text-xs tracking-[0.25em] text-[#C8795A] uppercase font-medium"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Nous Trouver
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium text-[#3D2B1F]"
              style={{ fontFamily: 'Lora, serif', lineHeight: 1.2 }}
            >
              Venez Nous Rendre Visite.
            </motion.h2>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Column 1: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#F5DDD3' }}
              >
                <MapPin size={18} color="#C8795A" />
              </div>
              <h3
                className="text-xl font-semibold text-[#3D2B1F] mb-5"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Contact & Adresse
              </h3>
              <div className="space-y-5">
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#9B7B6A] mb-1"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Adresse
                  </p>
                  <p
                    className="text-[#3D2B1F] leading-relaxed"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Immeuble Nakhil, 2 Av. Annakhil,
                    <br />
                    El Jadida 24000, Maroc
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase text-[#9B7B6A] mb-1"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Téléphone
                  </p>
                  <motion.a
                    href="tel:+212523353182"
                    whileHover={{ color: '#C8795A' }}
                    className="text-[#3D2B1F] flex items-center gap-2 transition-colors duration-200"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    <Phone size={14} />
                    05 23 35 31 82
                  </motion.a>
                </div>
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: '#C8795A', color: 'white' }}
                    className="w-10 h-10 rounded-full border border-[#3D2B1F]/15 flex items-center justify-center text-[#9B7B6A] transition-all duration-300"
                  >
                    <InstagramIcon />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: '#C8795A', color: 'white' }}
                    className="w-10 h-10 rounded-full border border-[#3D2B1F]/15 flex items-center justify-center text-[#9B7B6A] transition-all duration-300"
                  >
                    <FacebookIcon />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#DFF0E1' }}
              >
                <Clock size={18} color="#7A9E7E" />
              </div>
              <h3
                className="text-xl font-semibold text-[#3D2B1F] mb-5"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Nos Horaires
              </h3>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <motion.div
                    key={h.day}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: 'rgba(61,43,31,0.08)' }}
                  >
                    <span
                      className="text-[#6B4C3B] text-sm"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-medium text-[#C8795A]"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {h.time}
                    </span>
                  </motion.div>
                ))}
                <div
                  className="flex items-center gap-2 pt-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-pulse" />
                  <span
                    className="text-xs text-[#7A9E7E]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Idéal pour les lève-tôt — dès 07h30
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#F5DDD3' }}
              >
                <Utensils size={18} color="#C8795A" />
              </div>
              <h3
                className="text-xl font-semibold text-[#3D2B1F] mb-5"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Nos Services
              </h3>
              <div className="space-y-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                    style={{ backgroundColor: 'white', boxShadow: '0 2px 16px rgba(61,43,31,0.05)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#F5DDD3' }}
                    >
                      <s.icon size={16} color="#C8795A" />
                    </div>
                    <div>
                      <p
                        className="font-medium text-[#3D2B1F] text-sm mb-0.5"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {s.label}
                      </p>
                      <p
                        className="text-xs text-[#9B7B6A]"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Reservation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #C8795A 0%, #9B5A40 100%)' }}
          >
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
              style={{ backgroundColor: 'white', transform: 'translate(20%, -30%)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
              style={{ backgroundColor: 'white', transform: 'translate(-20%, 30%)' }}
            />
            <div className="relative">
              <p
                className="text-white/80 text-sm tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Réservation
              </p>
              <h3
                className="text-3xl md:text-4xl font-medium text-white mb-4"
                style={{ fontFamily: 'Lora, serif' }}
              >
                Réservez votre table dès maintenant.
              </h3>
              <p
                className="text-white/70 mb-10 max-w-md mx-auto"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
              >
                Appelez-nous ou passez directement. Notre équipe se fera un plaisir de vous accueillir.
              </p>
              <motion.a
                href="tel:+212523353182"
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-white text-white font-medium text-base tracking-wide transition-all duration-300"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <Phone size={18} />
                05 23 35 31 82
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom bar */}
      <div
        className="py-8 border-t"
        style={{ borderColor: 'rgba(61,43,31,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#C8795A] flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: 'Lora, serif' }}>N</span>
            </div>
            <span
              className="text-[#3D2B1F] font-semibold tracking-[0.15em] text-sm"
              style={{ fontFamily: 'Lora, serif' }}
            >
              NAWA
            </span>
          </div>
          <p
            className="text-xs text-[#9B7B6A] text-center"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            © {new Date().getFullYear()} NAWA Brunch & Café · El Jadida, Maroc · Tous droits réservés.
          </p>
          <p
            className="text-xs text-[#9B7B6A]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Fait avec ❤️ à El Jadida
          </p>
        </div>
      </div>
    </footer>
  );
}
