import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';
import { circleRippleUniforms, vertexShader, fragmentShader, MAX_CLICKS } from '../utils/circleRippleShader';

gsap.registerPlugin(ScrollTrigger);

export default function CircleRippleBackground() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, gl } = useThree();
  const clock = useRef(new THREE.Clock());
  const clickIndex = useRef(0);

  const planeRef = useRef<THREE.Mesh>(null);
  // Update resolution when viewport size changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  }, [size]);

  // Animate time uniform
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.current.getElapsedTime();
    }
  });

  // Handle clicks for ripples
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!materialRef.current) return;
      const uniforms = materialRef.current.uniforms;
      const rect = gl.domElement.getBoundingClientRect();

      const fx = (e.clientX - rect.left) * (gl.domElement.width / rect.width);
      const fy = (rect.height - (e.clientY - rect.top)) * (gl.domElement.height / rect.height);

      uniforms.uClickPos.value[clickIndex.current].set(fx, fy);
      uniforms.uClickTimes.value[clickIndex.current] = uniforms.uTime.value;
      clickIndex.current = (clickIndex.current + 1) % MAX_CLICKS;
    };

    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, [gl]);

  return (
      <mesh ref={planeRef}>
        <planeGeometry args={[2, 2, 200, 200]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={circleRippleUniforms}
          transparent
          glslVersion={THREE.GLSL3}
        />
      </mesh>
  );
}
