import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = [
  {
    id: 'brunch',
    label: 'Brunch & Créations',
    emoji: '🌿',
    image: '/images/menu-brunch.jpg',
    color: '#DFF0E1',
    accent: '#7A9E7E',
    items: [
      {
        name: 'Le Grand Nawa',
        desc: 'Œufs brouillés, avocat écrasé, feta, tomates cerises, pain sourdough grillé',
        price: '85 MAD',
        tag: 'Signature',
      },
      {
        name: 'Eggs Benedict Marocain',
        desc: 'Œufs pochés, sauce hollandaise au safran, saumon fumé, pain brioché',
        price: '75 MAD',
        tag: 'Coup de cœur',
      },
      {
        name: 'Açaï Bowl Frais',
        desc: 'Purée d\'açaï, granola artisanal, banane, fruits de saison, miel de fleurs',
        price: '65 MAD',
        tag: null,
      },
      {
        name: 'Shakshuka Épicée',
        desc: 'Œufs en cocotte dans une sauce tomate épicée, poivrons, coriandre, pain pita',
        price: '70 MAD',
        tag: null,
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers Artisanaux',
    emoji: '🍔',
    image: '/images/menu-burger.jpg',
    color: '#F5DDD3',
    accent: '#C8795A',
    items: [
      {
        name: 'Le Classic Nawa',
        desc: 'Steak haché 160g, cheddar fondu, laitue, tomate, cornichon, sauce maison',
        price: '90 MAD',
        tag: 'Bestseller',
      },
      {
        name: 'Crispy Chicken',
        desc: 'Poulet croustillant, coleslaw maison, avocat, sauce sriracha miel',
        price: '85 MAD',
        tag: null,
      },
      {
        name: 'Le Végétarien',
        desc: 'Galette de légumes grillés, houmous, feta, roquette, tomates séchées',
        price: '75 MAD',
        tag: 'Green',
      },
      {
        name: 'Smash Burger Double',
        desc: 'Double galette smash, fromage raclette, oignons caramélisés, sauce truffe',
        price: '100 MAD',
        tag: 'Premium',
      },
    ],
  },
  {
    id: 'douceurs',
    label: 'Douceurs & Desserts',
    emoji: '🥞',
    image: '/images/menu-crepes.jpg',
    color: '#F5DDD3',
    accent: '#C8795A',
    items: [
      {
        name: 'Crêpes Nutella & Banane',
        desc: 'Crêpes fines, Nutella artisanal, banane fraîche, chantilly légère',
        price: '45 MAD',
        tag: 'Gourmand',
      },
      {
        name: 'Pancakes Moelleux',
        desc: 'Tour de pancakes, sirop d\'érable, myrtilles fraîches, beurre noisette',
        price: '55 MAD',
        tag: null,
      },
      {
        name: 'Gaufre Liégeoise',
        desc: 'Gaufre croustillante, glace vanille, coulis de framboises, sucre perlé',
        price: '50 MAD',
        tag: null,
      },
      {
        name: 'Crêpes Suzette',
        desc: 'Crêpes flambées à l\'orange, beurre citronné, sucre glace, zestes confits',
        price: '60 MAD',
        tag: 'Classique',
      },
    ],
  },
  {
    id: 'boissons',
    label: 'Barista & Jus Frais',
    emoji: '☕',
    image: '/images/menu-coffee.jpg',
    color: '#DFF0E1',
    accent: '#7A9E7E',
    items: [
      {
        name: 'Latte Art Maison',
        desc: 'Café de spécialité single origin, lait entier micromousse, art latte signature',
        price: '30 MAD',
        tag: 'Barista',
      },
      {
        name: 'Jus Orange Pressé',
        desc: 'Oranges fraîches pressées à la minute, vitamines naturelles, zéro sucre ajouté',
        price: '35 MAD',
        tag: 'Frais',
      },
      {
        name: 'Smoothie Tropical',
        desc: 'Mangue, ananas, banane, lait de coco, gingembre frais, curcuma',
        price: '45 MAD',
        tag: null,
      },
      {
        name: 'Cold Brew Marocain',
        desc: 'Cold brew 18h, eau de rose, lait d\'amande, notes florales et épicées',
        price: '40 MAD',
        tag: 'Signature',
      },
    ],
  },
];

function MenuCard({ item, index, accent }: { item: typeof categories[0]['items'][0]; index: number; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(61,43,31,0.10)' }}
      className="group bg-white rounded-2xl p-6 transition-all duration-400"
      style={{ boxShadow: '0 4px 24px rgba(61,43,31,0.06)' }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h4
          className="text-lg font-semibold text-[#3D2B1F] leading-snug group-hover:text-[var(--accent)] transition-colors duration-300"
          style={{ fontFamily: 'Lora, serif', '--accent': accent } as React.CSSProperties}
        >
          {item.name}
        </h4>
        {item.tag && (
          <span
            className="shrink-0 text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium"
            style={{
              fontFamily: 'Outfit, sans-serif',
              backgroundColor: accent === '#7A9E7E' ? '#DFF0E1' : '#F5DDD3',
              color: accent,
            }}
          >
            {item.tag}
          </span>
        )}
      </div>
      <p
        className="text-sm text-[#9B7B6A] leading-relaxed mb-5"
        style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
      >
        {item.desc}
      </p>
      <div className="flex items-center justify-between">
        <span
          className="text-base font-semibold"
          style={{ fontFamily: 'Outfit, sans-serif', color: accent }}
        >
          {item.price}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xs px-4 py-2 rounded-full border transition-all duration-300"
          style={{
            fontFamily: 'Outfit, sans-serif',
            borderColor: accent + '40',
            color: accent,
          }}
        >
          Commander
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('brunch');

  const activeCat = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="carte" className="py-36 md:py-44" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div ref={ref} className="text-center mb-20">
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
              Notre Carte
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D2B1F] mb-6"
            style={{ fontFamily: 'Lora, serif', lineHeight: 1.15 }}
          >
            Des Saveurs Pensées
            <br />
            <em className="text-[#C8795A]">avec Passion.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-[#9B7B6A] max-w-xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
          >
            Chaque plat est une invitation à ralentir et à savourer le moment présent.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'Outfit, sans-serif',
                backgroundColor: activeTab === cat.id ? cat.accent : 'white',
                color: activeTab === cat.id ? 'white' : '#6B4C3B',
                boxShadow:
                  activeTab === cat.id
                    ? `0 8px 30px ${cat.accent}40`
                    : '0 2px 12px rgba(61,43,31,0.06)',
              }}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Active category display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Category image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={activeCat.image}
                alt={activeCat.label}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${activeCat.accent}60 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-2xl font-medium text-white mb-1"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {activeCat.emoji} {activeCat.label}
                </p>
                <p
                  className="text-sm text-white/80"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {activeCat.items.length} créations originales
                </p>
              </div>
            </motion.div>
          </div>

          {/* Menu items grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activeCat.items.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} accent={activeCat.accent} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
