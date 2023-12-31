import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Wireframe } from "@react-three/drei";

let factor = 10.0;

export const Grid = () => {
  const geometry = useRef<THREE.PlaneGeometry>(null!);
  const complete = useRef(true);
  let offset = Date.now();

  const moveNoise = (delta: number) => {
    const position = geometry.current?.getAttribute("position");
    offset += delta * 1000;

    if (position) {
      complete.current = false;

      for (let i = 0; i < position.array.length; i++) {
        const pos_x = position.getX(i);
        const pos_y = position.getY(i);
        const xoff = pos_x / factor;
        const yoff = pos_y / factor;
        const zoff =
          (Math.sin(yoff - offset / 800) * 1.3) ** 2 +
          (Math.cos(xoff - offset / 800) * 1.3) ** 2;

        position.setXYZ(i, pos_x, pos_y, zoff);
      }

      position.needsUpdate = true;
      complete.current = true;
    }
  };

  useFrame((state, delta) => {
    if (complete.current) {
      moveNoise(delta);
    }
  });

  return (
    <mesh rotation-x={-Math.PI / 2} rotation-z={0.5}>
      <planeGeometry
        ref={geometry}
        attach="geometry"
        args={[250, 200, 128, 64]}
      />
      {/* THESE ARE CAUSING THE ERROR ON DESKTOP / NOT SURE WHY NOT WORKING ON MOBILE*/}
      <meshBasicMaterial opacity={0.7} color={"#000000"} />
      <Wireframe
        stroke={new THREE.Color(160 / 255, 42 / 255, 201 / 255)}
        strokeOpacity={0.25}
        side={THREE.FrontSide}
      />
    </mesh>
  );
};
