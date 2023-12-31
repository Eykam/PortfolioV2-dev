import { useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { MeshBasicMaterial, Color, FrontSide } from "three";

import CustomShaderMaterial from "three-custom-shader-material";
import { patchShaders } from "gl-noise/build/glNoise.m";
import { Wireframe } from "@react-three/drei";

const shader = {
  vertex: /* glsl */ `
    uniform float uTime;
    void main() {
      csm_Position.z = (sin((csm_Position.y * .2  - uTime) * 2.) * 2.0) + (cos((csm_Position.x * .2  - uTime) * 2.) * 2.0);
    }
    `,
  fragment: /* glsl */ `

    void main() {
      

    }
    `,
};

function Thing() {
  const planeRef = useRef(null);
  const matRef = useRef(null);

  useFrame(({ clock }) => {
    matRef.current.uniforms.uTime.value = clock.elapsedTime;
    console.log("curr", matRef.current);
  });

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
    }),
    []
  );

  return (
    <mesh rotation-x={-Math.PI / 2} rotation-z={0.5}>
      <planeGeometry
        ref={planeRef}
        args={[250, 200, 128, 64]}
        attach="geometry"
      />

      <CustomShaderMaterial
        ref={matRef}
        attach="material"
        baseMaterial={MeshBasicMaterial}
        vertexShader={patchShaders(shader.vertex)}
        fragmentShader={patchShaders(shader.fragment)}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

function MeshGrid() {
  return (
    <Suspense>
      <Thing />
    </Suspense>
  );
}

export default MeshGrid;
