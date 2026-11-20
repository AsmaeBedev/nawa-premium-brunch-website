import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'La Carte', href: '#carte' },
  { label: 'L\'Expérience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-xl shadow-[0_2px_40px_rgba(61,43,31,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#accueil"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#C8795A] flex items-center justify-center">
              <span className="text-white font-lora font-bold text-lg leading-none" style={{ fontFamily: 'Lora, serif' }}>N</span>
            </div>
            <div>
              <span
                className="text-2xl font-bold tracking-[0.15em] text-[#3D2B1F]"
                style={{ fontFamily: 'Lora, serif', letterSpacing: '0.2em' }}
              >
                NAWA
              </span>
              <p className="text-[10px] tracking-[0.3em] text-[#9B7B6A] font-outfit uppercase -mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Brunch & Café
              </p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                className="text-sm tracking-wide text-[#6B4C3B] hover:text-[#C8795A] transition-colors duration-300 relative group"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8795A] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, backgroundColor: '#B5684A' }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-[#C8795A] text-white text-sm font-medium tracking-wide transition-all duration-300"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Réserver
            </motion.a>
            <button
              className="md:hidden text-[#3D2B1F] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-medium text-[#3D2B1F] hover:text-[#C8795A] transition-colors"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-10 py-3.5 rounded-full bg-[#C8795A] text-white text-lg font-medium"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Réserver une table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
