import {
  Decal,
  Environment,
  useGLTF,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";

import { Mesh } from "three";
import useScrollStore, { View } from "../../../Store";
import { useFrame } from "@react-three/fiber";

export const Display = ({ source }: { source: string }) => {
  const { nodes, materials } = useGLTF("/models/laptop.glb");

  const { getView } = useScrollStore((state) => ({ getView: state.getView }));
  const view = useMemo(() => getView(), [getView]);

  const startingPos = view === View.small ? 14.9 : 14.8;

  const laptop = useRef<THREE.Group>(null);
  const data = useScroll();

  useEffect(() => {
    view === View.small
      ? window.addEventListener("touchmove", (e) => {
          e.preventDefault();

          if (laptop.current) {
            laptop.current.rotation.y =
              Math.PI +
              (e.touches[0].clientX - window.innerWidth / 2) * -0.0003;
            // laptop.current.rotation.x = e.touches[0].clientY * -0.0002;
          }
        })
      : window.addEventListener("mousemove", (e) => {
          if (laptop.current) {
            const rotationOffsetY =
              Math.PI + (e.clientX - window.innerWidth / 2) * -0.00005;
            const rotationOffsetX = e.clientY * -0.00005;

            laptop.current.rotation.y = rotationOffsetY;
            laptop.current.rotation.x = rotationOffsetX;
          }
        });
  }, [view]);

  useFrame(() => {
    const scrollPercentage = data.range(0, 1 / 3);
    if (laptop.current) {
      laptop.current.position.y = startingPos + scrollPercentage * 1.25;
    }
  });

  const displayTexture = useTexture(source);

  return (
    <>
      <Suspense>
        <Environment preset="night" />
      </Suspense>

      <Suspense>
        <group
          rotation-y={-Math.PI}
          rotation-x={view === View.small ? 0.1 : 0}
          position={
            view === View.small
              ? [0.5, 15.5, 98.25]
              : view === View.medium
              ? [0.5, 14.8, 98.75]
              : [0.5, 14.8, 99]
          }
          ref={laptop}
          dispose={null}
        >
          <group
            position={[0.5, 0.026, 0.483]}
            rotation={[3.118, 0, -Math.PI]}
            scale={0.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_4 as Mesh).geometry}
              material={materials.body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_5 as Mesh).geometry}
              material={materials.keys_bezel_and_bottom}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_6 as Mesh).geometry}
              material={materials.shiny_metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_7 as Mesh).geometry}
              material={materials.holes}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_8 as Mesh).geometry}
              material={materials.metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_9 as Mesh).geometry}
              material={materials.ports}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_10 as Mesh).geometry}
              material={materials.indicator}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_11 as Mesh).geometry}
              material={materials.speaker}
            />
          </group>
          <group
            position={[0.5, 0.032, 0.76]}
            rotation={[-1.42, 0, Math.PI]}
            scale={0.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_13 as Mesh).geometry}
              material={materials.body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_14 as Mesh).geometry}
              material={materials.keys_bezel_and_bottom}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_15 as Mesh).geometry}
              material={materials.display}
            >
              <Decal
                map={displayTexture}
                scale={[3.7, 2.05, 1]}
                position={[0, 0, 1.2]}
                rotation={[-1.42, Math.PI, Math.PI]}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_16 as Mesh).geometry}
              material={materials.webcam}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_17 as Mesh).geometry}
              material={materials.webcam_lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_18 as Mesh).geometry}
              material={materials.webcam2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_19 as Mesh).geometry}
              material={materials.infrared_camera}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_20 as Mesh).geometry}
              material={materials.webcam_body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_21 as Mesh).geometry}
              material={materials.indicator}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Object_22 as Mesh).geometry}
              material={materials.holes}
            />
          </group>
        </group>
      </Suspense>
    </>
  );
};

useGLTF.preload("/models/laptop.glb");
