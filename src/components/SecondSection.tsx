import { type Ref } from "react";
import SkillConstellation from "./SkillConstellation";

export interface SkillNode {
  name: string;
  src: string;
  category: string;
  position: [number, number, number];
  connections: string[];
}

export const tableSkills: SkillNode[] = [
  // Headings placed strategically apart to form 4 distinct quadrants/clusters
  { name: "Languages", src: "", category: "Heading", position: [-5, -3, 0], connections: ["FrameWorks & Libraries", "Databases"] },
  { name: "FrameWorks & Libraries", src: "", category: "Heading", position: [-2, 3, 0], connections: ["Languages", "Tools & Platforms"] },
  { name: "Databases", src: "", category: "Heading", position: [4, -3, 0], connections: ["Languages", "Tools & Platforms"] },
  { name: "Tools & Platforms", src: "", category: "Heading", position: [4, 3, 0], connections: ["FrameWorks & Libraries", "Databases"] },
  
  // LANGUAGES (Orbiting [-5, -3, 0])
  { name: "c++", src: "/logos/cpp.png", category: "Languages", position: [-7, -2, 1], connections: ["Languages"] },
  { name: "java", src: "/logos/java.png", category: "Languages", position: [-6, -4.5, 0], connections: ["Languages"] },
  { name: "javascript", src: "/logos/js.png", category: "Languages", position: [-4, -1.5, 1], connections: ["Languages"] },
  { name: "typescript", src: "/logos/ts.png", category: "Languages", position: [-3, -4, 0], connections: ["Languages"] },
  { name: "python", src: "/logos/python.png", category: "Languages", position: [-5.5, -1, -1], connections: ["Languages"] },

  // TOOLS & PLATFORMS (Orbiting [4, 3, 0])
  { name: "aws", src: "/logos/aws.png", category: "Tools & Platforms", position: [6, 4, 1], connections: ["Tools & Platforms"] },
  { name: "git", src: "/logos/git.png", category: "Tools & Platforms", position: [2.5, 4.5, 0], connections: ["Tools & Platforms"] },
  { name: "docker", src: "/logos/docker.png", category: "Tools & Platforms", position: [5.5, 2, -1], connections: ["Tools & Platforms"] },
  { name: "linux", src: "/logos/linux.png", category: "Tools & Platforms", position: [3, 1.5, 1], connections: ["Tools & Platforms"] },
  { name: "firebase", src: "/logos/firebase.png", category: "Tools & Platforms", position: [2, 2.5, -1], connections: ["Tools & Platforms"] },

  // DATABASES (Orbiting [4, -3, 0])
  { name: "mongodb", src: "/logos/mongodb.png", category: "Databases", position: [2.5, -2, 1], connections: ["Databases"] },
  { name: "mysql", src: "/logos/mysql.png", category: "Databases", position: [5.5, -4, 0], connections: ["Databases"] },

  // FRAMEWORKS & LIBRARIES (Orbiting [-2, 3, 0])
  { name: "react", src: "/logos/react.png", category: "FrameWorks & Libraries", position: [-4, 4, 1], connections: ["FrameWorks & Libraries"] },
  { name: "nodejs", src: "/logos/nodejs.png", category: "FrameWorks & Libraries", position: [0, 4, 0], connections: ["FrameWorks & Libraries"] },
  { name: "expressjs", src: "/logos/expressjs.png", category: "FrameWorks & Libraries", position: [-1, 5, 1], connections: ["nodejs"] },
  { name: "nextjs", src: "/logos/nextjs.png", category: "FrameWorks & Libraries", position: [-3.5, 5, -1], connections: ["react"] },
  { name: "react three fiber", src: "/logos/r3f.jpeg", category: "FrameWorks & Libraries", position: [-5, 2.5, 2], connections: ["react"] },
  { name: "redux", src: "/logos/redux.png", category: "FrameWorks & Libraries", position: [-3, 2, -2], connections: ["react"] },
  { name: "gsap", src: "/logos/gsap.png", category: "FrameWorks & Libraries", position: [-1, 1.5, 1], connections: ["FrameWorks & Libraries"] },
  { name: "vite", src: "/logos/vite.png", category: "FrameWorks & Libraries", position: [-3, 1, 1], connections: ["FrameWorks & Libraries"] },
  { name: "serverless", src: "/logos/serverless.png", category: "FrameWorks & Libraries", position: [0, 2, -1], connections: ["FrameWorks & Libraries"] },
  { name: "websocket", src: "/logos/websocket.png", category: "FrameWorks & Libraries", position: [1, 5, -1], connections: ["nodejs"] },
  { name: "threejs", src: "/logos/threejs.png", category: "FrameWorks & Libraries", position: [-6, 1.5, 1], connections: ["react three fiber"] },
  { name: "model-viewer", src: "/logos/modelViewer.svg", category: "FrameWorks & Libraries", position: [-1, 3, 2], connections: ["html"] },
  { name: "zustand", src: "/logos/zustand.svg", category: "FrameWorks & Libraries", position: [-4.5, 1, -1], connections: ["react"] },
  { name: "html", src: "/logos/html.png", category: "FrameWorks & Libraries", position: [0, 3, 2], connections: ["FrameWorks & Libraries"] },
  { name: "css", src: "/logos/css.png", category: "FrameWorks & Libraries", position: [1.5, 2.5, 1], connections: ["html"] },
  { name: "tailwind", src: "/logos/tailwind.png", category: "FrameWorks & Libraries", position: [1.5, 1.5, 0], connections: ["css"] },
];

export const BackgroundSVG = ({ color }: { color: string }) => {
  return (
    <svg
      className="absolute rounded-md top-0 left-0 w-[100%] h-[100%] cursor-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx="10"
        ry="10"
        stroke={color}
        fill="transparent"
        stroke-width="8"
      />
    </svg>
  );
};
export default function SkillsTable({
  skillSection,
  skillSectionContainer,
}:{
  skillSection:Ref<HTMLDivElement> | undefined,
  skillSectionContainer:Ref<HTMLDivElement> | undefined,
}) {
  return (
    <div id="mainSkillContainer" className="h-[400dvh] bg-slate-950 relative z-10 overflow-hidden">
        <div ref={skillSection} className="relative z-20 h-[100dvh] transition-all duration-1000 bg-slate-950 text-white p-8 overflow-hidden flex justify-center items-center">
          <div ref={skillSectionContainer} id="skillContainer" className="w-[90%] h-[80dvh] relative pointer-events-auto">
            <SkillConstellation />
          </div>
        </div>
        <div id="makeSkillHeadingVisible" className="h-[100dvh] w-auto"></div>
        <div id="makeSkillsVisible" className="h-[100dvh] w-auto"></div>
    </div>
  );
}

/**
 * python, css, model-viewer, shopify, wordpress, zustand,
 * also add https://madewithgsap.com/effects/effect000 effect on hover
 * add opacity on hover and description on skills on click
 * gsap effect on skills section scroll
 */
