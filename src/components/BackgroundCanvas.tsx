import { Canvas } from "@react-three/fiber";
import CircleRippleBackground from "./circleRippleBackground.js";

const BackgroundCanvas = ({
  canvasRef,
}: {
  canvasRef: React.Ref<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      ref={canvasRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90dvw] h-[90dvh] -z-10"
    >
      <Canvas className="w-full h-full m-auto ">
        <CircleRippleBackground />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;

