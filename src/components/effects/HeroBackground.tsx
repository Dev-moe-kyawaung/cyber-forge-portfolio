"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

function NeonGrid() {
  const geometry = useMemo(() => new THREE.PlaneGeometry(40, 40, 40, 40), []);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        wireframe: true,
        transparent: true,
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color("#00f0ff") }, // cyan
          uColor2: { value: new THREE.Color("#ff00ff") }, // magenta
        },
        vertexShader: `
          uniform float uTime;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = sin(pos.x * 0.3 + uTime * 0.4) * 0.4
                            + sin(pos.y * 0.25 + uTime * 0.3) * 0.4;
            pos.z += elevation;
            vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying float vElevation;

          void main() {
            float mixStrength = (vElevation + 0.8) / 1.6;
            vec3 color = mix(uColor1, uColor2, clamp(mixStrength, 0.0, 1.0));
            float alpha = 0.15 + 0.35 * mixStrength;
            gl_FragColor = vec4(color, alpha);
          }
        `,
      }),
    []
  );

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <primitive object={geometry} attach="geometry" />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function AnimatedScene() {
  const meshRef = useMemo(() => new THREE.Object3D(), []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={55} />
      <color attach="background" args={["#050508"]} />
      <Stars radius={80} depth={40} count={2000} factor={3} saturation={0} fade />
      <NeonGrid />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        polarAngle={Math.PI / 2.2}
      />
    </>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <AnimatedScene />
      </Canvas>
    </div>
  );
}
