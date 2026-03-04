import { ArrowRight } from "lucide-react";

interface IntroScreenProps {
  onNavigate: () => void;
}

function IntroScreen({ onNavigate }: IntroScreenProps) {
  return (
    <button
      type="button"
      className="min-h-screen w-full flex flex-col items-center justify-center cursor-pointer relative bg-transparent border-none outline-none text-white"
      onClick={onNavigate}
    >
      <div className="text-center space-y-6">
        <h1
          className="font-bold tracking-[0.1em] leading-none w-full text-center px-4"
          style={{ fontSize: "clamp(3rem, 15vw, 16rem)" }}
        >
          BALANCE
        </h1>
        <p className="text-lg md:text-xl text-gray-400 italic tracking-wider">
          Tip the Art
        </p>
      </div>

      <div className="absolute bottom-12 flex items-center gap-2 text-gray-500 text-sm">
        <span>Click anywhere to continue</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}

export default IntroScreen;
