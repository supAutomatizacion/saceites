"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { printers } from "@/data/fechadoras/printer";
import PrinterModel from "@/components/canva/printerCanva";
import FloorGrid from "@/components/canva/floor";
import { useState } from "react";

export default function PlantCanvas() {

    const [hovered, setHovered] = useState(false);

    return (
        <Canvas
            camera={{
                position: [25, 10, 25],
                fov: 45,
            }}
        >
            <ambientLight intensity={2} />
            {/* Fechadoras */}
            <FloorGrid />
            {
                printers.map((printer) => (
                    <PrinterModel
                        key={printer.id}
                        position={printer.position}
                        status={printer.status}
                        name={printer.name}
                    />
                ))
            }
            <OrbitControls
                enablePan={true}
                maxPolarAngle={Math.PI / 3}
                minDistance={15}
                maxDistance={35}
            />
        </Canvas>
    );
}