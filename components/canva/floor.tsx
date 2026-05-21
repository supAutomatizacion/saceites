"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;

const CELL_SIZE = 2;

export default function FloorGrid() {

    const cells = [];

    for (let x = 0; x < GRID_WIDTH; x++) {

        for (let z = 0; z < GRID_HEIGHT; z++) {

            let cellColor = "#d0d0d0";
            let emissiveIntensity = 0;

            // ALARMA
            if (x >= 1 && x <= 2 && z >= 10 && z <= 11) {
                cellColor = "red";
                emissiveIntensity = 15;
            }

            // OK
            if (x >= 6 && x <= 7 && z >= 6 && z <= 7) {
                cellColor = "#00ff00";
                emissiveIntensity = 8;
            }

            if (x >= 11 && x <= 12 && z >= 6 && z <= 7) {
                cellColor = "#00ff00";
                emissiveIntensity = 8;
            }

            if (x >= 11 && x <= 12 && z >= 3 && z <= 4) {
                cellColor = "#00ff00";
                emissiveIntensity = 8;
            }

            if (x >= 11 && x <= 12 && z >= 10 && z <= 11) {
                cellColor = "#00ff00";
                emissiveIntensity = 8;
            }

            if (x >= 16 && x <= 17 && z >= 6 && z <= 7) {
                cellColor = "#00ff00";
                emissiveIntensity = 8;
            }

            cells.push(
                <GlowingCell
                    key={`${x}-${z}`}
                    x={x}
                    z={z}
                    cellColor={cellColor}
                    emissiveIntensity={emissiveIntensity}
                />
            );
        }
    }

    return <>{cells}</>;
}

function GlowingCell({
    x,
    z,
    cellColor,
    emissiveIntensity,
}: {
    x: number;
    z: number;
    cellColor: string;
    emissiveIntensity: number;
}) {

    const materialRef = useRef<any>(null);

    useFrame((state) => {

        if (!materialRef.current) return;

        // Pulsación suave
        const pulse =
            Math.sin(state.clock.elapsedTime * 3) * 0.5 + 0.5;

        materialRef.current.emissiveIntensity =
            emissiveIntensity * (0.6 + pulse);
    });

    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[
                x * CELL_SIZE -
                (GRID_WIDTH * CELL_SIZE) / 2 +
                CELL_SIZE / 2,

                0,

                z * CELL_SIZE -
                (GRID_HEIGHT * CELL_SIZE) / 2 +
                CELL_SIZE / 2,
            ]}
        >
            <planeGeometry
                args={[CELL_SIZE, CELL_SIZE]}
            />

            <meshStandardMaterial
                color={cellColor}
                emissive={cellColor}
                emissiveIntensity={emissiveIntensity}
                transparent
                opacity={0.65}
            />
        </mesh>
    );
}