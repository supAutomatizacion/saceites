"use client";

import { useState } from "react";

import { useLoader } from "@react-three/fiber";

import { Html } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

import { PrinterStatus } from "@/data/fechadoras/types";

export default function PrinterModel({
  position,
  status,
  name,
}: {
  position: [number, number, number];
  status: PrinterStatus;
  name: string;
}) {

  const [hovered, setHovered] = useState(false);

  const materials = useLoader(
    MTLLoader,
    "/fechadora_videojet.mtl"
  );

  const obj = useLoader(
    OBJLoader,
    "/fechadora_videojet.obj",
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  let color = "#22c55e";

  if (status === "alarm") color = "#ef4444";

  if (status === "offline") color = "#9ca3af";

  // obj.traverse((child: any) => {
  //   if (child.isMesh) {
  //     child.material.color.set(color);
  //   }
  // });

  return (
    <group
      position={position}

      onPointerOver={() => {
        document.body.style.cursor = "pointer";
        setHovered(true);
      }}

      onPointerOut={() => {
        document.body.style.cursor = "default";
        setHovered(false);
      }}
    >

      <primitive
        object={obj.clone()}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={hovered ? 2.2 : 2}
      />

      {hovered && (
        <Html
          position={[0, 4, 0]}
          center
        >
          <div className="bg-black/80 text-white p-3 rounded-xl w-48 shadow-xl">

            <p className="font-bold mb-2 border-b">
              {name}
            </p>

            <div className="flex justify-between">
              <span>Estado:</span>
              <span>{status}</span>
            </div>

            <div className="flex justify-between">
              <span>Producción:</span>
              <span>OK</span>
            </div>

          </div>
        </Html>
      )}

    </group>
  );
}