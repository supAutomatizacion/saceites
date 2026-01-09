"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import { DataTable } from "@/components/table/data-table"
import { columns } from "@/components/table/workers-columns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="h-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="flex flex-row gap-4 w-full h-full p-1">
                            <Card className="h-full flex-1">
                                <CardContent className="grid grid-cols-2 grid-rows-2 gap-2 justify-center h-full">
                                    <Avatar className="size-50">
                                        <AvatarImage src="/sebastian.jpeg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-4xl font-semibold">{index + 1} - AA</span>
                                    <div className="col-span-2">
                                        <DataTable columns={columns} data={data} />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="h-full flex-1">
                                <CardContent className="grid grid-cols-2 grid-rows-2 gap-2 justify-center h-full">
                                    <Avatar className="size-50">
                                        <AvatarImage src="/sergio.jpeg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-4xl font-semibold">{index + 1} - AA</span>
                                    <div className="col-span-2">
                                        <DataTable columns={columns} data={data} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
