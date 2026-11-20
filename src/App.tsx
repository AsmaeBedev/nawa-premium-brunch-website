import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Footer from './components/Footer';

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        backgroundColor: '#C8795A',
        opacity: 0.7,
      }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Subtle dot grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(61,43,31,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          zIndex: 0,
        }}
      />

      <CustomCursor />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          {/* Decorative separator */}
          <div className="flex justify-center items-center gap-4 py-2" style={{ opacity: 0.2 }}>
            <div className="h-px w-32 bg-[#C8795A]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8795A]" />
            <div className="h-px w-32 bg-[#C8795A]" />
          </div>
          <Menu />
          {/* Decorative separator */}
          <div className="flex justify-center items-center gap-4 py-2" style={{ opacity: 0.2 }}>
            <div className="h-px w-32 bg-[#7A9E7E]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#7A9E7E]" />
            <div className="h-px w-32 bg-[#7A9E7E]" />
          </div>
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}
