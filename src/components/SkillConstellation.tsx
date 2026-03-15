import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line, useTexture, Billboard } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { tableSkills, type SkillNode } from "./SecondSection";

const ConstellationNode = ({ skill, activeCategory, onHover, onUnhover }: { skill: SkillNode; activeCategory: string | null; onHover: (name: string, category: string) => void; onUnhover: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  // Floating animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = skill.position[1] + Math.sin(state.clock.elapsedTime + skill.position[0]) * 0.15;
    }
  });

  // Do not load texture if this is a heading node without an image
  const texture = useTexture(skill.category === "Heading" ? "/logos/cpp.png" : skill.src);

  // Ensure the texture color space is correct for WebGL
  useMemo(() => {
    if (skill.category !== "Heading") {
      texture.colorSpace = THREE.SRGBColorSpace;
    }
  }, [texture, skill.category]);

  // Calculate aspect ratio so the image isn't squished ("object-contain" equivalent for WebGL planes)
  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const scale = hovered ? 0.9 : 0.6;
  const width = aspect > 1 ? scale : scale * aspect;
  const height = aspect > 1 ? scale / aspect : scale;

  const isHeading = skill.category === "Heading";

  // Determine if this node belongs to the currently hovered category
  const isHighlighted = activeCategory === null || skill.category === activeCategory || (isHeading && skill.name === activeCategory);
  const opacityOffset = isHighlighted ? 1 : 0.15;

  return (
    <group
      ref={ref}
      position={skill.position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
        onHover(skill.name, isHeading ? skill.name : skill.category);
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
        onUnhover();
      }}
    >
      {/* Billboard ensures the logo always faces the camera */}
      {!isHeading && (
        <Billboard>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial
              map={texture}
              transparent
              opacity={opacityOffset}
              alphaTest={0.05}
              toneMapped={false}
            />
          </mesh>
        </Billboard>
      )}

      {/* Render heading text as a floating node */}
      {isHeading && (
        <Html center zIndexRange={[100, 0]} className="pointer-events-none">
          <div className={`transition-all duration-300 font-bold tracking-widest uppercase whitespace-nowrap px-4 py-2 border rounded shadow-lg backdrop-blur-md ${hovered ? 'scale-110 border-[#17ff62] text-[#17ff62] bg-slate-900/90 shadow-[#17ff62]/50' : 'scale-100 border-white/20 text-white bg-slate-900/50'} ${!isHighlighted ? 'opacity-20' : 'opacity-100'}`}>
            {skill.name}
          </div>
        </Html>
      )}
      {hovered && !isHeading && (
        <Html distanceFactor={12} className="pointer-events-none">
          <div className="flex flex-col items-center justify-center -translate-x-1/2 -translate-y-12 transition-opacity">
            <div className="bg-slate-900 border border-[#17ff62] text-[#17ff62] px-3 py-1 rounded shadow-lg shadow-[#17ff62]/20 text-sm font-semibold whitespace-nowrap">
              {skill.name.toUpperCase()}
            </div>
            <div className="w-[1px] h-6 bg-gradient-to-b from-[#17ff62] to-transparent"></div>
          </div>
        </Html>
      )}
    </group>
  );
};

const ConstellationEdges = ({ skills, activeCategory }: { skills: SkillNode[], activeCategory: string | null }) => {
  const edges = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3; isHighlighted: boolean }[] = [];
    const skillMap = new Map(skills.map(s => [s.name, s]));

    skills.forEach(skill => {
      const startPos = new THREE.Vector3(...skill.position);

      skill.connections.forEach(targetName => {
        const targetSkill = skillMap.get(targetName);
        if (targetSkill) {
          // A line is highlighted if BOTH nodes belong to the hovered category, 
          // or if one of the nodes IS the heading defining that category.
          const isHighlighted = activeCategory === null ||
            (skill.category === activeCategory && targetSkill.category === activeCategory) ||
            (skill.name === activeCategory && targetSkill.category === activeCategory) ||
            (targetSkill.name === activeCategory && skill.category === activeCategory);

          lines.push({
            start: startPos,
            end: new THREE.Vector3(...targetSkill.position),
            isHighlighted
          });
        }
      });
    });
    return lines;
  }, [skills, activeCategory]);

  return (
    <>
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={[edge.start, edge.end]}
          color={edge.isHighlighted ? "#17ff62" : "#8d9dad"}
          lineWidth={edge.isHighlighted ? 2 : 1.5}
          transparent
          opacity={edge.isHighlighted ? 0.6 : 0.15}
        />
      ))}
    </>
  );
};

export default function SkillConstellation() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleHover = (_skillName: string, category: string) => {
    setHoveredCategory(category);
  };

  const handleUnhover = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="w-full h-full flex flex-col absolute top-0 left-0 z-10">
      {/* Dynamic Heading separated from the 3D scene */}
      <div className="w-full flex justify-center z-20 shrink-0 pointer-events-none pb-4 pt-2">
        <h1 className={`title-container-MyWork uppercase transition-all duration-300 ${hoveredCategory ? 'opacity-100 text-[#17ff62] drop-shadow-[0_0_10px_rgba(23,255,98,0.5)]' : 'opacity-70 text-white'}`}>
          {hoveredCategory || "Technical Skills"}
        </h1>
      </div>

      <div className="w-full flex-grow relative">
        <Canvas camera={{ position: [8, 0, 0], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />

          {/* Draw graph lines */}
          <ConstellationEdges skills={tableSkills} activeCategory={hoveredCategory} />

          {/* Draw graph nodes */}
          {tableSkills.map((skill) => (
            <ConstellationNode
              key={skill.name}
              skill={skill}
              activeCategory={hoveredCategory}
              onHover={handleHover}
              onUnhover={handleUnhover}
            />
          ))}

          {/* Default Auto-Rotating Controls taking back over */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>
    </div>
  );
}
