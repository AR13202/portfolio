import { useEffect, useRef } from "react";
import gsap from "gsap";

const SideScrollText = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;

    if (el) {
      gsap.to(el, {
        xPercent: -100,   // move text fully sideways
        repeat: -1,       // infinite loop
        duration: 15,     // speed (higher = slower)
        ease: "linear",   // constant speed
      });
    }
  }, []);

  return (
    <div className="overflow-hidden w-full bg-transparent">
      <div
        ref={textRef}
        className="whitespace-nowrap text-3xl font-bold text-gray-400"
      >
        🚀 Full Stack Developer • React • Next.js • TypeScript • Three.js • Node.js • MongoDB • Docker • AWS •
      </div>
    </div>
  );
};

export default SideScrollText;