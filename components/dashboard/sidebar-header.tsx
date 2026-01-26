'use client'

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Calendar, Activity, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {useEffect, useState} from "react"
import { ModeToggle } from "@/components/theme-toggle"

interface HeaderComponentProps {
    totalActividades? : number,
    ultimaActualizacion? : Date | null
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
                <div className="flex flex-1 items-center justify-between gap-4">
                    {/* Logo SACEITES */}
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                            <span className="text-xs font-bold text-primary-foreground">SA</span>
                        </div>
                        <span className="text-base font-semibold tracking-tight">SACEITES</span>
                    </div>

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
                        <div>
                            <ModeToggle />
                        </div>

                        {/* Última Actualización */}
                        <div className="flex items-center gap-1.5">
                            <RefreshCw className="h-4 w-4 text-muted-foreground" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground">Últ. Actualización</span>
                                <span className="text-xs font-medium">{formatearUltimaActualizacion(ultimaActualizacion)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
