import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const carouselImages = [
  { src: '/images/ambiance-1.jpg', caption: 'Un cadre chaleureux & moderne' },
  { src: '/images/ambiance-barista.jpg', caption: 'Notre barista en action' },
  { src: '/images/ambiance-family.jpg', caption: 'Des moments en famille' },
  { src: '/images/hero-brunch.jpg', caption: 'La table de vos rêves' },
  { src: '/images/juice-smoothie.jpg', caption: 'Jus & smoothies du moment' },
];

const values = [
  {
    icon: Heart,
    title: 'Fait avec Amour',
    desc: 'Chaque plat est préparé à la main, avec des ingrédients soigneusement sélectionnés.',
    color: '#F5DDD3',
    accent: '#C8795A',
  },
  {
    icon: Users,
    title: 'Ambiance Familiale',
    desc: 'Un espace pensé pour tous : les familles, les amis et les amoureux du brunch.',
    color: '#DFF0E1',
    accent: '#7A9E7E',
  },
  {
    icon: Award,
    title: 'Géré par des Pros',
    desc: 'Une équipe passionnée et expérimentée, dédiée à vous offrir le meilleur.',
    color: '#F5DDD3',
    accent: '#C8795A',
  },
  {
    icon: Leaf,
    title: 'Produits Frais',
    desc: 'Des ingrédients frais sourcés localement, pour une cuisine saine et savoureuse.',
    color: '#DFF0E1',
    accent: '#7A9E7E',
  },
];

function AutoCarousel() {
  const [position, setPosition] = useState(0);
  const speed = 0.4;
  const cardWidth = 380;
  const gap = 24;
  const totalWidth = (cardWidth + gap) * carouselImages.length;

  useAnimationFrame(() => {
    setPosition((prev) => {
      const next = prev - speed;
      return next <= -totalWidth ? 0 : next;
    });
  });

  const doubled = [...carouselImages, ...carouselImages];

  return (
    <div className="relative overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <div
        className="flex"
        style={{
          transform: `translateX(${position}px)`,
          gap: `${gap}px`,
          willChange: 'transform',
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="shrink-0 relative rounded-3xl overflow-hidden"
            style={{ width: cardWidth, height: 420 }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(61,43,31,0.7) 0%, transparent 55%)',
              }}
            />
            <p
              className="absolute bottom-6 left-6 text-white text-sm font-medium"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {img.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-36 md:py-44 overflow-hidden" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Section header */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: '#DFF0E1' }}
            >
              <span
                className="text-xs tracking-[0.25em] text-[#7A9E7E] uppercase font-medium"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                L'Expérience Nawa
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F]"
              style={{ fontFamily: 'Lora, serif', lineHeight: 1.15 }}
            >
              Géré par des Pros,
              <br />
              <em className="text-[#7A9E7E]">Conçu pour Vous.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-[#9B7B6A] leading-relaxed"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
          >
            Chez NAWA, nous croyons que chaque repas est une occasion spéciale. 
            Notre équipe de passionnés met tout son cœur pour créer des moments 
            mémorables, dans un cadre qui allie modernité, chaleur et convivialité.
          </motion.p>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="mb-24"
      >
        <AutoCarousel />
      </motion.div>

      {/* Values grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(61,43,31,0.1)' }}
              className="rounded-2xl p-8 transition-all duration-400"
              style={{ backgroundColor: val.color, boxShadow: '0 4px 20px rgba(61,43,31,0.05)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: val.accent + '20' }}
              >
                <val.icon size={22} color={val.accent} />
              </div>
              <h3
                className="text-lg font-semibold text-[#3D2B1F] mb-3"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {val.title}
              </h3>
              <p
                className="text-sm text-[#9B7B6A] leading-relaxed"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
              >
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ backgroundColor: '#3D2B1F' }}
        >
          {/* decorative */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ backgroundColor: '#C8795A', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ backgroundColor: '#7A9E7E', transform: 'translate(-30%, 30%)' }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <p
              className="text-3xl md:text-4xl font-medium text-white/90 mb-8 leading-[1.3]"
              style={{ fontFamily: 'Lora, serif' }}
            >
              <em>
                "Un cadre magnifique, un service impeccable et des brunchs qui valent
                vraiment le détour. NAWA est devenu notre rendez-vous du week-end."
              </em>
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C8795A] flex items-center justify-center text-white font-semibold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                S
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>Salma R.</p>
                <p className="text-white/50 text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>Cliente fidèle · El Jadida</p>
              </div>
              <div className="ml-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#C8795A] text-sm">★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
