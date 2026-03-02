// import React, { useRef, useLayoutEffect, useState } from "react";

import gsap from "gsap";
import { InertiaPlugin } from "gsap/all";
import { useEffect, useState, type Ref } from "react";
import LiquidEther from "./LiquidEther";

/** Data (unchanged) */
const tableSkills = [
  { name: "c++", src: "/logos/cpp.png", category: "Languages" },
  { name: "aws", src: "/logos/aws.png", category: "Tools & Platforms" },
  { name: "git", src: "/logos/git.png", category: "Tools & Platforms" },
  { name: "docker", src: "/logos/docker.png", category: "Tools & Platforms" },
  { name: "linux", src: "/logos/linux.png", category: "Tools & Platforms" },
  {
    name: "firebase",
    src: "/logos/firebase.png",
    category: "Tools & Platforms",
  },
  { name: "mongodb", src: "/logos/mongodb.png", category: "Databases" },
  { name: "mysql", src: "/logos/mysql.png", category: "Databases" },
  { name: "java", src: "/logos/java.png", category: "Languages" },
  {
    name: "react",
    src: "/logos/react.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "nodejs",
    src: "/logos/nodejs.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "expressjs",
    src: "/logos/expressjs.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "nextjs",
    src: "/logos/nextjs.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "react three fiber",
    src: "/logos/r3f.jpeg",
    category: "FrameWorks & Libraries",
  },
  {
    name: "redux",
    src: "/logos/redux.png",
    category: "FrameWorks & Libraries",
  },
  { name: "gsap", src: "/logos/gsap.png", category: "FrameWorks & Libraries" },
  { name: "javascript", src: "/logos/js.png", category: "Languages" },
  { name: "typescript", src: "/logos/ts.png", category: "Languages" },
  { name: "vite", src: "/logos/vite.png", category: "FrameWorks & Libraries" },
  {
    name: "serverless",
    src: "/logos/serverless.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "websocket",
    src: "/logos/websocket.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "threejs",
    src: "/logos/threejs.png",
    category: "FrameWorks & Libraries",
  },
  {
    name: "model-viewer",
    src: "/logos/modelViewer.svg",
    category: "FrameWorks & Libraries",
  },
  {
    name: "zustand",
    src: "/logos/zustand.svg",
    category: "FrameWorks & Libraries",
  },
  { name: "python", src: "/logos/python.png", category: "Languages" },
  { name: "html", src: "/logos/html.png", category: "FrameWorks & Libraries" },
  { name: "css", src: "/logos/css.png", category: "FrameWorks & Libraries" },
  {
    name: "tailwind",
    src: "/logos/tailwind.png",
    category: "FrameWorks & Libraries",
  },
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
gsap.registerPlugin(InertiaPlugin);

export default function SkillsTable({
  skillSection,
  skillSectionHeading,
  skillSectionContainer,
}:{
  skillSection:Ref<HTMLDivElement> | undefined,
  skillSectionHeading:Ref<HTMLDivElement> | undefined,
  skillSectionContainer:Ref<HTMLDivElement> | undefined,
}) {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [textAnimate, setTextAnimate] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(InertiaPlugin);

    let oldX = 0,
      oldY = 0,
      deltaX = 0,
      deltaY = 0;

    const root = document.querySelector(".mwg_effect000");
    if (!root) return;

    // 🔹 Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      deltaX = e.clientX - oldX;
      deltaY = e.clientY - oldY;
      oldX = e.clientX;
      oldY = e.clientY;
    };

    // 🔹 Hover handler for each media element
    const handleMouseEnter = (el: Element) => {
      const image = el.querySelector("img");
      if (!image) return;

      const tl = gsap.timeline({
        onComplete: () => tl.kill(),
      });

      tl.timeScale(1.2);

      // inertia effect
      tl.to(image, {
        inertia: {
          x: { velocity: deltaX * 30, end: 0 },
          y: { velocity: deltaY * 30, end: 0 },
        },
      });

      // random rotation bounce
      tl.fromTo(
        image,
        { rotate: 0 },
        {
          duration: 0.4,
          rotate: (Math.random() - 0.5) * 30, // -15° to +15°
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        "<"
      );
    };

    // Attach listeners
    root.addEventListener("mousemove", handleMouseMove);
    const medias = root.querySelectorAll(".media");
    medias.forEach((el) =>
      el.addEventListener("mouseenter", () => handleMouseEnter(el))
    );

    // Cleanup on unmount
    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
      medias.forEach((el) =>
        el.removeEventListener("mouseenter", () => handleMouseEnter(el))
      );
    };
  }, []);



  useEffect(() => {
    if (selectedSkill !== undefined) {
      setTextAnimate(true);
      const timeout = setTimeout(() => setTextAnimate(false), 400); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [selectedSkill]);

  return (
    <div id="mainSkillContainer" className="h-[400dvh] bg-slate-950 relative z-10 overflow-hidden">
        {/* // <LiquidEther
        //   id="mainSkillContainer"
        //   colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        //   mouseForce={20}
        //   cursorSize={100}
        //   isViscous={false}
        //   viscous={30}
        //   iterationsViscous={32}
        //   iterationsPoisson={32}
        //   resolution={0.5}
        //   isBounce={false}
        //   autoDemo={true}
        //   autoSpeed={0.5}
        //   autoIntensity={2.2}
        //   takeoverDuration={0.25}
        //   autoResumeDelay={3000}
        //   autoRampDuration={0.6}
        //   className="h-[400dvh] bg-slate-950 relative z-10 overflow-hidden"
        // > */}
        <div ref={skillSection} onClick={()=>setSelectedSkill("")} className="relative mwg_effect000 z-20 h-[100dvh] transition-all duration-1000 bg-slate-950 text-white p-8 overflow-hidden flex justify-center items-center">
          <div ref={skillSectionContainer} id="skillContainer" className="medias w-[80%] h-[70dvh] grid grid-cols-8 grid-rows-4 gap-3">
            {tableSkills.map((skill) => (
              <div
                key={skill.name}
                onClick={(e) => {e.stopPropagation(); setSelectedSkill(skill.name)}}
                className={`${selectedSkill==skill.name ? 'bg-slate-900' : 'bg-transparent'} media relative w-full h-full rounded-md transition-all `}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain p-5 rounded-md z-1"
                />
                {selectedSkill == skill.name && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-fit whitespace-nowrap z-6
                  border-slate-600 rounded  shadow px-4 py-1 uppercase font-medium"
                  >
                    {skill.name}
                  </div>
                )}
              </div>
            ))}
            <div id="skillHeading" className=" rounded-lg row-start-4 col-span-4 col-start-5 flex items-center justify-center">
              <h1 ref={skillSectionHeading}
                className={`calSans skillsHeading ${
                  textAnimate ? "animateText" : ""
                }`}
              >
                {selectedSkill === ""
                  ? "Technical Skills"
                  : tableSkills.find((skill) => skill.name === selectedSkill)
                      ?.category}
              </h1>
            </div>
          </div>
        </div>
        <div id="makeSkillHeadingVisible" className="h-[100dvh] w-auto"></div>
        <div id="makeSkillsVisible" className="h-[100dvh] w-auto"></div>

        {/* // </LiquidEther> */}
    </div>
  );
}

/**
 * python, css, model-viewer, shopify, wordpress, zustand,
 * also add https://madewithgsap.com/effects/effect000 effect on hover
 * add opacity on hover and description on skills on click
 * gsap effect on skills section scroll
 */
