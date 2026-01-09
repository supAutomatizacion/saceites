"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import {
    AudioLines,
    Smartphone,
} from "lucide-react"

import { DataTable } from "@/components/table/data-table"
import { columns } from "@/components/table/workers-columns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

import Image from "next/image"

const data = [
    {
        name: "Actividad de prueba #1",
        status: "Completada",
        date: "08/01/2026",
    },
    {
        name: "Actividad de prueba #2",
        status: "Completada",
        date: "08/01/2026",
    },
    {
        name: "Actividad de prueba #3",
        status: "Pendiente",
        date: "08/01/2026",
    },
    {
        name: "Actividad de prueba #4",
        status: "Pendiente",
        date: "08/01/2026",
    },
]

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            // plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="h-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="flex flex-row gap-4 w-full h-full p-1">
                            <div className="h-full flex-1 shadow-xl p-2">
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 justify-center h-full shadow-2xl">
                                    <div className="relative w-[160px] h-[160px]">
                                        <Image
                                            src="/sebastian.jpeg"
                                            fill
                                            sizes="200px"
                                            alt="Picture of the author"
                                            className="rounded-lg"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-10 justify-center">
                                        <div className="flex flex-col gap-2 justify-end">
                                            <div className="bg-saceites-2">
                                                Joanh Sebastian
                                            </div>
                                            <div>
                                                Especialista en electricidad
                                            </div>
                                            <div className="flex gap-4">
                                                <AudioLines />
                                                <p>MTTO 3</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <Smartphone />
                                                <p> 312 514 38 36</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>progreso</p>
                                            <Progress value={33} />
                                        </div>
                                    </div>
                                    <Card className="col-span-2 border-none mx-3 shadow-none">
                                        <DataTable columns={columns} data={data} />
                                    </Card>
                                </div>
                            </div>
                            <div className="h-full flex-1 shadow-xl p-2">
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 justify-center h-full shadow-2xl">
                                    <div className="relative w-[160px] h-[160px] shadow-2xl">
                                        <Image
                                            src="/sergio.jpeg"
                                            fill
                                            sizes="200px"
                                            alt="Picture of the author"
                                            className="rounded-lg"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-10 justify-center">
                                        <div className="flex flex-col gap-2 justify-end">
                                            <div className="bg-saceites-2">
                                                Sergio Pancho
                                            </div>
                                            <div>
                                                Especialista en regriferacion
                                            </div>
                                            <div className="flex gap-4">
                                                <AudioLines />
                                                <p>MTTO 4</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <Smartphone />
                                                <p> 312 514 38 36</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>progreso</p>
                                            <Progress value={33} />
                                        </div>
                                    </div>
                                    <Card className="col-span-2 border-none mx-3 shadow-none">
                                        <DataTable columns={columns} data={data} />
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
