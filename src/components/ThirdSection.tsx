import { useRef } from "react";

const ThirdSection = () => {
  const parentRef = useRef(null);
  return (
    <div ref={parentRef} className="myWork h-[900dvh] w-full bg-slate-950 overflow-hidden relative text-white z-10">
      {/* <div
        className={`${
          isFixed ? "fixed top-0 left-0" : "absolute top-0 left-0"
        } h-[100dvh] w-[100%] bg-slate-950 transition-all duration-300`}
      >
      </div> */}

      <div className="h-[100dvh] w-auto">
      </div>
      <div className="h-[100dvh] w-auto">
        <h1 id="1" className="z-20 top-4/5 right-1/10 title-container-MyWork">My Work</h1>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="2" className="h-[94%] w-[75%] flex rounded-t-3xl bottom-0 bg-red-400 left-1/2 -translate-x-1/2 relative">
          <div className="w-3/5 h-full border border-black bg-blue-100 rounded-tl-3xl"></div>
          <div className="w-2/5 h-full flex flex-col">
            <div className="w-full h-1/2 border rounded-tr-3xl border-black bg-green-300"></div>
            <div className="w-full h-1/2 border border-black bg-purple-300"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
            <div className="absolute bottom-40 left-10 text-[60px] font-bold">
              Blog App
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="3" className="flex h-[92%] w-[77%] rounded-t-3xl bottom-0 bg-green-400 left-1/2 -translate-x-1/2 relative">
          <div className="w-1/3 h-full border border-black bg-blue-100 rounded-tl-3xl"></div>
          <div className="w-1/3 h-full border border-black bg-purple-300"></div>
          <div className="w-1/3 h-full  border rounded-tr-3xl border-black bg-green-300"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
            <div className="absolute bottom-40 left-10 text-[60px] font-bold">
              Image Configurator
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="4" className="flex h-[90%] w-[79%] rounded-t-3xl bottom-0 bg-yellow-400 left-1/2 -translate-x-1/2 relative">
          <div className="w-3/5 h-full border border-black bg-blue-100 rounded-tl-3xl"></div>
          <div className="w-2/5 h-full flex flex-col">
            <div className="w-full h-1/2 border rounded-tr-3xl border-black bg-green-300"></div>
            <div className="w-full h-1/2 border border-black bg-purple-300"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
            <div className="absolute bottom-40 left-10 text-[60px] font-bold">
              Ikarus Delta App
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="5" className="flex h-[88%] w-[81%] rounded-t-3xl bottom-0 bg-purple-400 left-1/2 -translate-x-1/2">
          <div className="w-1/3 h-full border border-black bg-blue-100 rounded-tl-3xl"></div>
          <div className="w-1/3 h-full border border-black bg-purple-300"></div>
          <div className="w-1/3 h-full  border rounded-tr-3xl border-black bg-green-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
              <div className="absolute bottom-40 left-10 text-[60px] font-bold">
                GlobeTrotters
              </div>
            </div>
          </div>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="6" className="flex h-[86%] w-[83%] rounded-t-3xl bottom-0 bg-orange-400 left-1/2 -translate-x-1/2">
          <div className="w-2/5 h-full flex flex-col">
            <div className="w-full h-1/2 border rounded-tl-3xl border-black bg-green-300"></div>
            <div className="w-full h-1/2 border border-black bg-purple-300"></div>
          </div>
          <div className="w-3/5 h-full border border-black bg-blue-100 rounded-tr-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
            <div className="absolute bottom-40 left-10 text-[60px] font-bold">
              Modular Configurator
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100dvh] w-auto">
        <div id="7" className="flex h-[84%] w-[85%] rounded-t-3xl bottom-0 bg-slate-400 left-1/2 -translate-x-1/2">
          <div className="w-full h-full border border-black bg-blue-100 rounded-t-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 rounded-t-3xl">
            <div className="absolute bottom-40 left-10 text-[60px] font-bold">
              Solar System 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection

/*
Ikarus Delta Platform
Blog App
Modular Sofa
Quiz App - Websockets
Image Configurator
Solar System Simulation
*/