"use client"

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";


const Model = () => {
  const materials = useLoader(MTLLoader, "/fechadora_videojet.mtl");
  const obj = useLoader(OBJLoader, "/fechadora_videojet.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={2} />;
};

export default function Viewer() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}