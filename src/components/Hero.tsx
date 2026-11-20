import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-32 right-0 w-[55vw] max-w-[800px] h-[85vh] rounded-[3rem] overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <motion.div style={{ y: imageY }} className="w-full h-full">
          <img
            src="/images/hero-brunch.jpg"
            alt="Table brunch NAWA"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}
          />
        </motion.div>
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 rounded-[3rem]"
          style={{
            background: 'linear-gradient(120deg, rgba(250,247,242,0.6) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Decorative organic blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-20 right-[50vw] w-44 h-44 rounded-full"
        style={{ backgroundColor: '#DFF0E1', zIndex: 0, filter: 'blur(2px)' }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-40 left-6 w-28 h-28 rounded-full"
        style={{ backgroundColor: '#F5DDD3', zIndex: 0, filter: 'blur(1px)' }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-1/2 right-[44vw] w-6 h-6 rounded-full"
        style={{ backgroundColor: '#C8795A', opacity: 0.3, zIndex: 0 }}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20 relative" style={{ zIndex: 2 }}>
        <motion.div style={{ y: textY, opacity }} className="max-w-[560px]">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{ backgroundColor: '#F5DDD3' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#C8795A] animate-pulse" />
            <span
              className="text-xs tracking-[0.25em] text-[#C8795A] uppercase font-medium"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              El Jadida, Maroc · Ouvert dès 07h30
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-[#3D2B1F] mb-8"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Votre Parenthèse
            <br />
            <em className="text-[#C8795A] not-italic">de Douceur</em>
            <br />
            à El Jadida.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#9B7B6A] leading-relaxed mb-12 max-w-[440px]"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
          >
            Un espace chaleureux pour savourer des brunchs originaux, 
            préparés avec soin par des passionnés.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="#carte"
              whileHover={{ scale: 1.04, backgroundColor: '#B5684A' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C8795A] text-white font-medium text-base tracking-wide transition-all duration-300"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Découvrir la Carte
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ gap: '16px' }}
              className="inline-flex items-center gap-2.5 text-[#3D2B1F] font-medium text-base group"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span>Réserver une table</span>
              <motion.span
                whileHover={{ x: 5 }}
                className="w-9 h-9 rounded-full border border-[#3D2B1F]/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#C8795A] group-hover:bg-[#C8795A] group-hover:text-white"
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Small stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-10 mt-16 pt-10 border-t border-[#3D2B1F]/08"
          >
            {[
              { value: '07h30', label: 'Ouverture' },
              { value: '100%', label: 'Fait maison' },
              { value: '★ 4.9', label: 'Avis clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-xl font-semibold text-[#3D2B1F]"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-[#9B7B6A] tracking-wide mt-0.5"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating card over hero image */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-28 right-[8vw] z-10 hidden lg:block"
      >
        <div
          className="bg-white rounded-2xl p-4 flex items-center gap-4"
          style={{ boxShadow: '0 20px 60px rgba(61,43,31,0.15)', minWidth: 220 }}
        >
          <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
            <img src="/images/menu-coffee.jpg" alt="Café Latte" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[#3D2B1F] font-medium text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Latte Art Maison
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[1,2,3,4,5].map(i => <span key={i} className="text-[#C8795A] text-xs">★</span>)}
            </div>
            <p className="text-[#9B7B6A] text-xs mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>Café de spécialité</p>
          </div>
        </div>
      </motion.div>

      {/* Second floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute top-36 right-[10vw] z-10 hidden lg:block"
      >
        <div
          className="bg-[#DFF0E1] rounded-2xl px-5 py-3 text-center"
          style={{ boxShadow: '0 10px 30px rgba(122,158,126,0.2)' }}
        >
          <p className="text-[#7A9E7E] font-semibold text-lg" style={{ fontFamily: 'Lora, serif' }}>100%</p>
          <p className="text-[#7A9E7E] text-[10px] tracking-[0.15em] uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>Fait maison</p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span
          className="text-[10px] tracking-[0.3em] text-[#9B7B6A] uppercase"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-[#C8795A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
