'use client'

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar, Activity, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/theme-toggle"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { GlowEffect } from "@/components/ui/glow-effect"

interface HeaderComponentProps {
    totalActividades?: number,
    ultimaActualizacion?: Date | null
}

export function SiteHeader({ totalActividades = 0, ultimaActualizacion = null }: HeaderComponentProps) {

    const [fechaActual, setFechaActual] = useState<string>("")

    useEffect(() => {
        const formatearFecha = () => {
            const fecha = new Date()
            return fecha.toLocaleDateString("es-MX", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
        }
        setFechaActual(formatearFecha())
    }, [])

    const formatearUltimaActualizacion = (fecha: Date | null) => {
        if (!fecha) return "Sin datos"
        return fecha.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />

                <Select defaultValue="uno" >
                    <SelectTrigger className="relative z-10 w-[180px] rounded-xm m-0 p-2 bg-white dark:bg-muted">
                        <SelectValue placeholder="Turno" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="uno">Turno mañana</SelectItem>
                            <SelectItem value="dos">Turno tarde</SelectItem>
                            <SelectItem value="tres">Turno noche</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <div className="flex flex-1 items-center justify-end gap-4">
                    {/* Información del Header */}
                    <div className="flex items-center gap-3 md:gap-5">
                        {/* Fecha Actual / MTTO */}
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground">MTTO</span>
                                <span className="text-xs font-medium">{fechaActual}</span>
                            </div>
                        </div>

                        {/* Total Actividades */}
                        <div className="flex items-center gap-1.5">
                            <Activity className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground">Actividades</span>
                                <Badge variant="secondary" className="h-5 w-fit text-xs">
                                    {totalActividades}
                                </Badge>
                            </div>
                        </div>
                        {/* Última Actualización */}
                        <div className="flex items-center gap-1.5">
                            <RefreshCw className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground">Últ. Actualización</span>
                                <span className="text-xs font-medium">{formatearUltimaActualizacion(ultimaActualizacion)}</span>
                            </div>
                        </div>
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
