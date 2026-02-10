export default function AIDock({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%]
        px-6 py-3 bg-[rgba(29,58,95,0.65)] backdrop-blur-xl
        rounded-full border border-[rgba(194,157,111,0.4)]
        flex items-center justify-center gap-3 text-white font-semibold
        shadow-lg transition-all duration-300 active:scale-95
        z-50
      "
    >
      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      Strategic Advisor
    </div>
  );
}
