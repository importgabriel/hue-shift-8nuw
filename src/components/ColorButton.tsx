'use client';

interface ColorButtonProps {
  onClick: () => void;
}

export default function ColorButton({ onClick }: ColorButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-8 py-4
        bg-gradient-to-r from-purple-500 to-pink-500
        hover:from-purple-600 hover:to-pink-600
        active:from-purple-700 active:to-pink-700
        text-white font-semibold text-lg
        rounded-full
        transform transition-all duration-200
        hover:scale-105 hover:shadow-lg
        active:scale-95
        focus:outline-none focus:ring-4 focus:ring-purple-300
        shadow-md
      "
      type="button"
    >
      Change Background Color
    </button>
  );
}