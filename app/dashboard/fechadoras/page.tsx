import { ArrowBigLeftDash } from "lucide-react";
import EarthCanvas from "@/components/canva/fechadora";
import Image from "next/image";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";

export default function Fechadoras() {
    return (
        <div className="h-full w-full  ">
            <div className="col-start-3 col-end-5 row-start-6 row-end-8 shadow-lg text-center h-[300px] ">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>Solidos</p>
                        <EarthCanvas/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Operativa</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-7 col-end-9 row-start-6 row-end-8 shadow-lg text-center">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>SIG</p>
                        <Image
                            src="/videojet.bmp"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Fuera de linea</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-11 col-end-13 row-start-2 row-end-4 shadow-lg text-center">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>Trepko 1</p>
                        <Image
                            src="/videojet.bmp"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Operativa</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-11 col-end-13 row-start-5 row-end-7 shadow-lg text-center">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>Trepko 2</p>
                        <Image
                            src="/videojet.bmp"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Operativa</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-11 col-end-13 row-start-8 row-end-10 shadow-lg text-center">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>Trepko 3</p>
                        <Image
                            src="/videojet.bmp"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Operativa</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-17 col-end-19 row-start-6 row-end-8 shadow-lg text-center">
                <HoverCard openDelay={80} closeDelay={200}>
                    <HoverCardTrigger>
                        <p>Primo</p>
                        <Image
                            src="/videojet.bmp"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Estado</span>
                                <span className="text-green-600 font-medium">Operativa</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Referencia</span>
                                <span>FCH-SOL-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Incidencias</span>
                                <span className="font-semibold">3</span>
                            </div>
                            <div className="border-t my-2" />
                            <Link
                                href="/registro-fallas"
                                className="text-blue-600 hover:underline text-center"
                            >
                                Ver registro de fallas →
                            </Link>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className="col-start-1 col-end-21 row-start-1 row-end-2 border-b text-center items-center">
                ---
            </div>
            <div className="col-start-1 col-end-21 row-start-10 row-end-11 border-t text-center items-center">
                ---
            </div>
            <div className="[writing-mode:vertical-rl] col-start-1 col-end-2 row-start-5 row-end-6 rounded-sm  text-foreground text-center">
                <div className="flex flex-col items-center">
                    <p className="bg-black text-white">liquidos</p>
                    <ArrowBigLeftDash />
                </div>
            </div>
        </div>
    )
}