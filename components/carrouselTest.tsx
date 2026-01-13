"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const workerPairs = chunkArray(workers, 2)

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {workerPairs.map((pair, index) => (
          <CarouselItem key={index}>
            {/* CONTENEDOR DE DOS TRABAJADORES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full p-2">
              {pair.map((worker) => (
                <div key={worker.id} className="flex flex-col h-full gap-2">

                  {/* CARD SOLO PARA INFO */}
                  <div className="p-6 w-[450px] mx-auto shadow-xl mb-4">
                    <div className="grid grid-cols-[160px_1fr] gap-4">
                      {/* Foto */}
                      <div className="relative w-[160px] h-[160px]">
                        <Image
                          src={worker.image}
                          fill
                          sizes="160px"
                          alt={worker.nombre}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      {/* Información */}
                      <div className="flex flex-col justify-center">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">
                            {worker.nombre}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {worker.rango}
                          </p>

                          <div className="flex items-center gap-2 text-sm bg-saceites-2">
                            <AudioLines size={16} />
                            <span>{worker.radio}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <Smartphone size={16} />
                            <span>{worker.telefono}</span>
                          </div>
                        </div>

                        {/* Progreso */}
                        <div className="pt-2 space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progreso</span>
                            <span>33%</span>
                          </div>

                          <Progress
                            value={33}
                            className="h-3 bg-muted rounded-full shadow-inner"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TABLA FUERA DEL CARD (FULL WIDTH, SIN ESTILOS) */}
                  <div className="w-full">
                    <DataTable data={tasks} columns={columns} />
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  )
}
