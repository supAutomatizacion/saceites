"use client";

import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import {
    EffectComposer,
    Bloom,
} from "@react-three/postprocessing";

import { printers } from "@/data/fechadoras/printer";

import PrinterModel from "@/components/canva/printerCanva";

import FloorGrid from "@/components/canva/floor";

export default function PlantCanvas() {

    return (
        <Canvas
            camera={{
                position: [25, 10, 25],
                fov: 45,
            }}
        >

            {/* Fondo */}
            <color
                attach="background"
                args={["#111827"]}
            />

            {/* Luz ambiente básica */}
            <ambientLight intensity={0.6} />

            {/* Luz principal */}
            <directionalLight
                position={[10, 20, 10]}
                intensity={4}
            />

            {/* Grid */}
            <FloorGrid />

            {/* Fechadoras */}
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

            {/* Glow / Bloom */}
            <EffectComposer>

                <Bloom
                    intensity={1}
                    luminanceThreshold={0.15}
                    luminanceSmoothing={2.2}
                />

            </EffectComposer>

            {/* Controles */}
            <OrbitControls
                enablePan={true}
                maxPolarAngle={Math.PI / 3}
                minDistance={15}
                maxDistance={35}
            />

        </Canvas>
    );
}