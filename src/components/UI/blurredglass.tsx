interface GlassButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function GlassButton({ text, onClick, className = "" }: GlassButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 
                  px-6 py-2 rounded-full text-white font-medium 
                  hover:bg-white/20 transition 
                  shadow-lg ${className}`}
    >
      {text}
    </button>
  );
}
