"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WeekView } from "@/components/horario/week-view"
import { DayView } from "./day-view"
import {
  WORKERS,
  ShiftAssignment,
  ShiftType,
  getWeekRange,
  getWeekDates,
  formatDate,
  SHIFT_CONFIG,
} from "@/lib/horarios"
import { ChevronLeft, ChevronRight, CalendarDays, Users } from "lucide-react"
import { cn } from "@/lib/utils"

export function ShiftManager() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"day" | "week">("week")
  const [assignments, setAssignments] = useState<ShiftAssignment[]>([])

  const handleAssignmentChange = useCallback(
    (workerId: string, date: string, shift: ShiftType) => {
      setAssignments((prev) => {
        const existing = prev.findIndex(
          (a) => a.workerId === workerId && a.date === date
        )
        if (existing !== -1) {
          const updated = [...prev]
          updated[existing] = { workerId, date, shift }
          return updated
        }
        return [...prev, { workerId, date, shift }]
      })
    },
    []
  )

  const handleWeeklyAssign = useCallback(
    (workerId: string, weekStart: string, shift: ShiftType) => {
      // Parse the date string correctly to avoid timezone issues
      const [year, month, day] = weekStart.split("-").map(Number)
      const weekStartDate = new Date(year, month - 1, day)
      
      // Generate all 7 days of the week
      const weekDates: Date[] = []
      for (let i = 0; i < 7; i++) {
        const d = new Date(weekStartDate)
        d.setDate(weekStartDate.getDate() + i)
        weekDates.push(d)
      }

      setAssignments((prev) => {
        const newAssignments = [...prev]

        weekDates.forEach((date) => {
          const dateStr = formatDate(date)
          const existing = newAssignments.findIndex(
            (a) => a.workerId === workerId && a.date === dateStr
          )

          if (existing !== -1) {
            newAssignments[existing] = { workerId, date: dateStr, shift }
          } else {
            newAssignments.push({ workerId, date: dateStr, shift })
          }
        })

        return newAssignments
      })
    },
    []
  )

  const navigatePrev = () => {
    const newDate = new Date(currentDate)
    if (viewMode === "week") {
      newDate.setDate(newDate.getDate() - 7)
    } else {
      newDate.setDate(newDate.getDate() - 1)
    }
    setCurrentDate(newDate)
  }

  const navigateNext = () => {
    const newDate = new Date(currentDate)
    if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + 7)
    } else {
      newDate.setDate(newDate.getDate() + 1)
    }
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Count shifts for today
  const todayStr = formatDate(new Date())
  const todayAssignments = assignments.filter((a) => a.date === todayStr)

  const getDateDisplay = () => {
    if (viewMode === "week") {
      return getWeekRange(currentDate)
    }
    return currentDate.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Gestión de Turnos
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Administra los turnos del departamento
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
                <Users className="h-3.5 w-3.5" />
                <span>{WORKERS.length} trabajadores</span>
              </Badge>
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
                <span>{todayAssignments.length} asignados hoy</span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Shift Legend */}
        <div className="mb-6 rounded-lg border border-border/50 bg-card p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Turnos Disponibles
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
            {(Object.keys(SHIFT_CONFIG) as ShiftType[]).map((shift) => (
              <div
                key={shift}
                className="flex flex-col items-center gap-1 rounded-md p-2 hover:bg-muted/50 transition-colors"
              >
                <div
                  className={cn(
                    "flex h-8 w-12 items-center justify-center rounded font-semibold text-sm",
                    SHIFT_CONFIG[shift].bgClass,
                    shift !== "off" ? "text-background" : "text-foreground"
                  )}
                >
                  {SHIFT_CONFIG[shift].shortLabel}
                </div>
                <span className="text-xs text-muted-foreground text-center">
                  {SHIFT_CONFIG[shift].label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={navigatePrev}
              className="h-9 w-9"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={navigateNext}
              className="h-9 w-9"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="gap-1.5"
            >
              <CalendarDays className="h-4 w-4" />
              Hoy
            </Button>
            <span className="ml-2 text-lg font-semibold capitalize text-foreground">
              {getDateDisplay()}
            </span>
          </div>

          <Tabs
            value={viewMode}
            onValueChange={(v) => setViewMode(v as "day" | "week")}
          >
            <TabsList className="grid w-[160px] grid-cols-2">
              <TabsTrigger value="day">Día</TabsTrigger>
              <TabsTrigger value="week">Semana</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Views */}
        {viewMode === "week" ? (
          <WeekView
            workers={WORKERS}
            assignments={assignments}
            currentDate={currentDate}
            onAssignmentChange={handleAssignmentChange}
            onWeeklyAssign={handleWeeklyAssign}
          />
        ) : (
          <DayView
            workers={WORKERS}
            assignments={assignments}
            currentDate={currentDate}
            onAssignmentChange={handleAssignmentChange}
          />
        )}

        {/* Footer hint */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Haz clic en una celda para modificar el turno individualmente, o usa
          el botón "Asignar" para aplicar un turno a toda la semana
        </p>
      </div>
    </div>
  )
}
