import { useRef, type Ref } from "react";
import Typewriter from "./Typewriter";
import BackgroundCanvas from "./BackgroundCanvas";
import VariableProximity from "./VariableProximity";


const FirstSection = ({
  titleRef,
  quoteRef,
  aboutTextRef,
  containerRef,
  canvasContainerRef,
  experienceRef,
  aboutStartRef
}: {
  titleRef: Ref<HTMLDivElement> | undefined,
  quoteRef: Ref<HTMLDivElement> | undefined,
  aboutTextRef: Ref<HTMLDivElement> | undefined,
  containerRef: Ref<HTMLDivElement> | undefined,
  canvasContainerRef: Ref<HTMLDivElement> | undefined,
  experienceRef: Ref<HTMLDivElement> | undefined,
  aboutStartRef: Ref<HTMLDivElement> | undefined,
}) => {

  const aboutText1Ref = useRef<HTMLDivElement>(null);
  const aboutText2Ref = useRef<HTMLDivElement>(null);

  const content = [
    "“Full-stack developer who writes fewer bugs than a rainforest, fueled by coffee, curiosity, and questionable Google searches.”",
    "“Turning caffeine into code since forever. Known for writing functions that sometimes work and commits that always raise eyebrows.”",
    "“I build apps, squash bugs, and occasionally rename files twenty times until they make sense. Still waiting for dark mode life.”",
    "“I write code like I cook—lots of improvising, a little chaos, and somehow it still works.”",
    "“Full-stack developer. Half-stack of patience. Zero-stack of sleep.”",
  ];

  return (
    <div
      ref={containerRef}
      className="section-1 w-[100dvw] h-[400dvh] bg-slate-950 justify-center items-center relative z-10"
    >
      {/* Background */}
      <BackgroundCanvas canvasRef={canvasContainerRef} />

      {/* Intro */}
      <div className="intro h-[100dvh] relative flex justify-center items-center">
        {/* Title */}
        <div ref={titleRef} className="title title-container relative z-10">
          <h1 className="calSans title-container-text text-[#17ff62] font-semibold">Hey, I'm</h1>
          <h1 className="title-container-typewriter text-white">Aryan Verma</h1>
          <Typewriter
            classname="title-container-subHeading calSans text-[#00FF85] font-semibold"
            texts={["Full Stack Developer"]}
            delay={50}
            pause={60000}
            infinite={false}
          />
        </div>

        {/* Quotes */}
        <div
          ref={quoteRef}
          className="description absolute top-10 font-mono left-20 flex font-semibold gap-5 w-1/5 text-[18px] calSans text-gray-300"
        >
          <Typewriter
            classname="text-white font-mono"
            texts={content}
            delay={50}
            pause={4000}
            infinite={true}
          />
        </div>
      </div>

      {/* About Me */}
      <div
        className="about-me h-[400dvh] relative flex flex-col bg-slate-950 text-white z-10"
      >
        <div id="aboutContainer" className="h-[100dvh] top-0 flex justify-center items-center">
          <div className="w-3/4 h-1/2">
            <div className="text-[24px] text-amber-400 font-semibold">ABOUT ME</div>
            <div className="flex relative gap-5 justify-evenly w-[100dvw] h-full">
              <div id="aboutText" className="relative top-0 left-0 w-[200dvw] flex">
                {/* <h1 ref={aboutStartRef} className="font-extrabold text-[50px] w-3/5 ml-[12dvw]">
                  "Programming is not about writing code, it’s about solving problems and shaping ideas into reality."
                </h1> */}

                <div className="w-[100dvw]">
                  <h1 ref={aboutTextRef} className="font-bold text-[40px] w-3/5">
                    {/* "I am a Full Stack Developer with 2 years of experience building scalable, efficient, and user-friendly applications.
                    My expertise spans across front-end and back-end development, allowing me to craft seamless digital solutions from concept
                    to deployment.", */}
                    <div
                      ref={aboutText1Ref}
                      style={{position: 'relative'}}
                      >
                        <VariableProximity
                          label={'"I am a Full Stack Developer with 2 years of experience building scalable, efficient, and user-friendly applications. My expertise spans across front-end and back-end development, allowing me to craft seamless digital solutions from concept to deployment."'}
                          className={'relative z-10'}
                          fromFontVariationSettings="'wght' 400, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={aboutText1Ref}
                          radius={100}
                          falloff='linear'
                        />
                      </div>
                  </h1>
                </div>

                <div className="w-[100dvw]">
                  <h1 ref={experienceRef} className="font-bold text-[40px] w-3/5">
                    "Currently working as an SDE at Ikarus 3D, contributing to a SaaS platform with scalable dashboards, 3D product configurators,
                    real-time communication, and secure authentication features.",
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 w-[100dvw] h-[100dvh] -z-10">
            <svg width="100dvw" height="150dvh" viewBox="0 0 4058 2853" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="svg-path" d="M0.5 43.5C285.5 43.5 864.886 378 810 1213C770.824 1809 -187 1294 291 889.5C1094.83 209.27 1641 1066 2001.5 1511C2362 1956 2852.07 1625.61 3090.5 1400.5C3359 1147 3708 1290 3708 1897C3708 2382.6 3893.5 2809.5 4057.5 2809.5" stroke="url(#paint0_linear_2211_2828)" stroke-width="86.5"/>
                <defs>
                <linearGradient id="paint0_linear_2211_2828" x1="4062" y1="2831.5" x2="-0.000283071" y2="43.0005" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6BADFF"/>
                <stop offset="1" stop-color="#0072FF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="h-[100dvh] w-auto"></div>
        <div id="showText2" className="h-[100dvh] w-auto"></div>
      </div>
    </div>
  );
};

export default FirstSection;