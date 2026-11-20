export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="w-full flex justify-center items-center py-4"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <div
        className="flex items-center gap-4"
        style={{ opacity: 0.15 }}
      >
        <div className="h-px w-24 bg-[#C8795A]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C8795A]" />
        <div className="h-px w-24 bg-[#C8795A]" />
      </div>
    </div>
  );
}
