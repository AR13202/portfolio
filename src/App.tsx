import { useEffect, useRef } from "react";
import FirstSection from "./components/FirstSection";
// import Loader from "./components/Loader";
import SecondSection from "./components/SecondSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { stagger } from 'animejs';
import Loader from "./components/Loader";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);
const Github = () => {
  return (
    <div className="w-fit h-fit rounded-full">
      <svg
        width="38px"
        height="38px"
        // className="hover:text-white"
        viewBox="0 0 20.00 20.00"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#bababa"
        stroke="#bababa"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>github [#fef6f6]</title> <desc>Created with Sketch.</desc>{" "}
          <defs> </defs>{" "}
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
            {" "}
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill="#ffffff"
            >
              {" "}
              <g id="icons" transform="translate(56.000000, 160.000000)">
                {" "}
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#fef6f6]"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

const LinkedIn = () => {
  return (
    <svg
      width="54px"
      height="54px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
          fill="#ffffff"
        ></path>{" "}
      </g>
    </svg>
  );
};

const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="42px"
      height="42px"
      viewBox="0,0,256,256"
    >
      <g
        fill="#ffffff"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(5.12,5.12)">
          <path d="M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"></path>
        </g>
      </g>
    </svg>
  );
};

// let value = 1;
// let lastScrollY:number = window.scrollY;
function App() {

  const titleRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const aboutStartRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillSection = useRef<HTMLDivElement>(null);
  const skillSectionHeading = useRef<HTMLDivElement>(null);
  const skillSectionContainer = useRef<HTMLDivElement>(null);
  // gsap
  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;
    if (!skillSection.current) return;
    // section-1
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",       // fade starts when section enters
          end: "+=300",      // fade finishes when section leaves
          scrub: true,            // tie animation to scroll
        },
      });
      gsap.to(quoteRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",       // fade starts when section enters
          end: "+=300",      // fade finishes when section leaves
          scrub: true,            // tie animation to scroll
        },
      });

      const aboutSection = document.getElementsByClassName('about-me');
      const aboutContainer = document.getElementById('aboutContainer');
      const aboutText = document.getElementById('aboutText');
      const showText2 = document.getElementById('showText2');
      if(aboutSection.length === 0) return;
      if(!aboutContainer) return;
      if(!aboutText) return;
      gsap.fromTo(aboutSection,{
        opacity:0
      },{
        opacity:1,
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:aboutSection,
          start:"top 50%",
          end:"top 10%",
          scrub:true,
          // markers:true,
        }
      })
      gsap.fromTo(
        "#svg-path",
        { drawSVG: "0%" },
        { 
          drawSVG: "100%", 
          duration: 3, 
          ease: "power2.out", 
          scrollTrigger:{
            trigger: aboutSection,
            start: "top 0%",
            end: "center 10%",
            scrub: true,
            // markers:true,
          } 
        }
      );
      gsap.to(aboutContainer,{
        position:'fixed',
        scrollTrigger:{
          trigger:aboutSection,
          start:"top 0%",
          end:'top 0%',
          scrub:true,
          // markers:true,
        }
      })
      gsap.fromTo(aboutText,{
        left:'0',
      },{
        left:'-100dvw',
        ease:"power2.out",
        duration:500,
        stagger:0.1,
        scrollTrigger:{
          trigger:showText2,
          start:"top 90%",
          end:'top 10%',
          scrub:true,
          // markers:true,
        }
      })

    }, containerRef);

    // section-2
    const ctx2 = gsap.context(()=>{
      const root = document.getElementById("skillContainer");
      if(!root) return;
      const skill = document.getElementsByClassName("media");
      const skillHeading = document.getElementById("skillHeading");
      const handleSkillHeading = document.getElementById("makeSkillHeadingVisible");
      const handleSkills = document.getElementById("makeSkillsVisible");
      if(!handleSkillHeading || !handleSkills) return;
      if(!skillHeading) return;
      gsap.set([skill],{
        opacity:0,
      })
      gsap.set(skillHeading,{
        transformPerspective:1000,
      })
      gsap.fromTo(root,{
        opacity:0,
      },{
        position:"fixed",
        opacity:1,
        duration:1,
        top:"50%",
        translateY:"-50%",
        ease:"power2.out",
        scrollTrigger:{
          trigger:root,
          start: "top 80%",
          end:"top 25%",
          scrub:true,
          // markers:true,
        }
      })
      gsap.fromTo(skillHeading,{rotationX:-90},{
        rotationX:0,
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:handleSkillHeading,
          start: "top 80%",
          end:"top 30%",
          scrub:true,
          // markers:true,
        }
      })
      gsap.to(skill,{
        opacity:1,
        duration:1,
        ease:"power2.out",
        stagger:0.1,
        scrollTrigger:{
          trigger:handleSkills,
          start: "top 80%",
          end:"top 30%",
          scrub:true,
          // markers:true,
        }
      })
    })

    // section-3
    const ctx3 = gsap.context(()=>{
      const workContainer = document.getElementsByClassName("myWork");
      if(!workContainer) return;
      gsap.fromTo(workContainer,{
        visibility:"hidden"
      },{
        // opacity:1,
        visibility:"visible",
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
          trigger:workContainer,
          start:"top 100%",
          end:"top 25%",
          scrub:true,
          // markers:true,
        },
      })


      // initial state
      const ele = document.getElementById('1');
      if(!ele) return;
      gsap.set(ele,{
        transformPerspective:1000,
      })
      gsap.fromTo(ele,{
        rotationX:-90,
        // opacity:0,
      },{
        // opacity:1,
        rotationX:0,
        duration:1,
        position:'fixed',
        ease:"power2.out",
        scrollTrigger:{
          trigger:ele,
          start:"top 80%",
          end:"top 50%",
          scrub:true,
          // markers:true,
        },
      })

      const works = [
        { id: '2', height: '94%' },
        { id: '3', height: '92%' },
        { id: '4', height: '90%' },
        { id: '5', height: '88%' },
        { id: '6', height: '86%' },
        { id: '7', height: '84%' },
      ];

      works.forEach(({ id, height }) => {
        const element = document.getElementById(id);
        if (!element) return;

        gsap.fromTo(
          element,
          {
            height: "0%",
            // opacity: 0,
          },
          {
            height,
            // opacity: 1,
            position: "fixed",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 20%",
              scrub: true,
              // markers: true, // enable for debugging
            },
          }
        );
      });

    })

    return () => {
      ctx.revert();
      ctx2.revert();
      ctx3.revert();
    };
  }, []);

  return (
    <div className="overflow-x-hidden relative">
      <div className="header fixed top-0 z-99 h-[10dvh] w-full">
        <div className="nav-links absolute top-10 right-20 flex font-semibold gap-5 text-[18px] poppinsFont text-gray-300">
          <div className="font-mono cursor-pointer hover:text-white hover:line-through">
            About Me
          </div>
          <div className="font-mono cursor-pointer hover:text-white hover:line-through">
            Skills
          </div>
          <div className="font-mono cursor-pointer hover:text-white hover:line-through">
            Work
          </div>
          <div className="font-mono cursor-pointer hover:text-white hover:line-through">
            Contact
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 h-[10dvh] w-fit z-99">
        <div className="social-links absolute bottom-10 left-20 flex items-center font-semibold gap-2">
            <div className="cursor-pointer hover:text-white">
              <Github />
            </div>
            <div className="cursor-pointer hover:text-white">
              <LinkedIn />
            </div>
            <div className="calSans cursor-pointer hover:text-white">
              <Twitter />
            </div>
          </div>
      </div>
      {/* <Loader/> */}
      <FirstSection
        titleRef={titleRef}
        quoteRef={quoteRef}
        aboutTextRef={aboutTextRef}
        containerRef={containerRef}
        canvasContainerRef={canvasContainerRef}
        aboutStartRef={aboutStartRef}
        experienceRef={experienceRef}
      />
      <SecondSection
        skillSection={skillSection}
        skillSectionHeading={skillSectionHeading}
        skillSectionContainer={skillSectionContainer}
      />
      <ThirdSection/>
      <FourthSection/>
      {/* <Loader/> */}
   </div>
  )
}

export default App
