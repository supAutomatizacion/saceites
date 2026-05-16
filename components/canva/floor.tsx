

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;

const CELL_SIZE = 2;

export default function FloorGrid() {

    const cells = [];

    for (let x = 0; x < GRID_WIDTH; x++) {

        for (let z = 0; z < GRID_HEIGHT; z++) {

            let cellColor = "#8b8b8b";

            if (x >= 1 && x <= 2 && z >= 10 && z <= 11) {
                cellColor = "red";
            }

            if (x >= 6 && x <= 7 && z >= 6 && z <= 7) {
                cellColor = "green";
            }

            if (x >= 11 && x <= 12 && z >= 6 && z <= 7) {
                cellColor = "green";
            }

            if (x >= 11 && x <= 12 && z >= 3 && z <= 4) {
                cellColor = "green";
            }

            if (x >= 11 && x <= 12 && z >= 10 && z <= 11) {
                cellColor = "green";
            }

            if (x >= 16 && x <= 17 && z >= 6 && z <= 7) {
                cellColor = "green";
            }

            cells.push(
                <mesh
                    key={`${x}-${z}`}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[
                        x * CELL_SIZE - (GRID_WIDTH * CELL_SIZE) / 2 + CELL_SIZE / 2,
                        0,
                        z * CELL_SIZE - (GRID_HEIGHT * CELL_SIZE) / 2 + CELL_SIZE / 2
                    ]}
                >
                    <planeGeometry
                        args={[CELL_SIZE, CELL_SIZE]}
                    />
                    <meshStandardMaterial color={cellColor} transparent
                        opacity={0.5} />
                </mesh>
            );
        }
    }

    return <>{cells}</>;
}