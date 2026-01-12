"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DataTable } from "@/components/table/data-table"

import { AudioLines, Smartphone } from "lucide-react"
import Image from "next/image"

import { columns } from "@/components/table/columns"
import { Task } from "@/types/table/schema"
import { Worker } from "@/types/workers/schema"

type WorkersProps = {
  tasks: Task[]
  workers: Worker[]
}

/* Utilidad para agrupar de a 2 */
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export default function CarouselPlugin({ tasks, workers }: WorkersProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const workerPairs = chunkArray(workers, 2)

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {workerPairs.map((pair, index) => (
          <CarouselItem key={index} className="p-0 m-0">
            {/* CONTENEDOR DE DOS TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {pair.map((worker) => (
                <Card
                  key={worker.id}
                  className="flex flex-col h-full p-4 shadow-xl"
                >
                  {/* HEADER: FOTO + INFO */}
                  <div className="grid grid-cols-[160px_1fr] gap-4 mb-4">
                    {/* Foto */}
                    <div className="relative w-[160px] h-[160px]">
                      <Image
                        src="/user-placeholder.png"
                        fill
                        sizes="160px"
                        alt={worker.nombre}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    {/* Información */}
                    <div className="flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">
                          {worker.nombre}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {worker.rango}
                        </p>

                        <div className="flex items-center gap-2 text-sm">
                          <AudioLines size={16} />
                          <span>{worker.radio}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                          <Smartphone size={16} />
                          <span>{worker.telefono}</span>
                        </div>
                      </div>

                      {/* Progreso */}
                      <div>
                        <p className="text-xs mb-1">Progreso</p>
                        <Progress value={33} />
                      </div>
                    </div>
                  </div>

                  {/* TABLA – OCUPA TODO EL ANCHO */}
                  <div className="mt-auto w-full">
                    <DataTable data={tasks} columns={columns} />
                  </div>
                </Card>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
