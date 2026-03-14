"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShiftCell } from "@/components/horario/shift-cell"
import {
  Worker,
  ShiftAssignment,
  ShiftType,
  formatDate,
  getDayName,
  SHIFT_CONFIG,
} from "@/lib/horarios"
import { cn } from "@/lib/utils"

interface DayViewProps {
  workers: Worker[]
  assignments: ShiftAssignment[]
  currentDate: Date
  onAssignmentChange: (workerId: string, date: string, shift: ShiftType) => void
}

export function DayView({
  workers,
  assignments,
  currentDate,
  onAssignmentChange,
}: DayViewProps) {
  const dateStr = formatDate(currentDate)

  const getAssignment = (workerId: string): ShiftType | null => {
    const assignment = assignments.find(
      (a) => a.workerId === workerId && a.date === dateStr
    )
    return assignment?.shift || null
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  // Group workers by shift
  const groupedByShift = workers.reduce(
    (acc, worker) => {
      const shift = getAssignment(worker.id) || "unassigned"
      if (!acc[shift]) acc[shift] = []
      acc[shift].push(worker)
      return acc
    },
    {} as Record<string, Worker[]>
  )

  const formattedDate = currentDate.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="space-y-6">
      {/* Day Header */}
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium capitalize">
              {formattedDate}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {workers.length} trabajadores
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workers.map((worker) => {
              const shift = getAssignment(worker.id)
              const config = shift ? SHIFT_CONFIG[shift] : null

              return (
                <div
                  key={worker.id}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors",
                    shift
                      ? "border-border/50 bg-card"
                      : "border-dashed border-border bg-muted/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback
                        className={cn(
                          "text-sm font-medium",
                          shift
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {getInitials(worker.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{worker.name}</div>
                      {shift && config && (
                        <div className="text-xs text-muted-foreground">
                          {config.label} - {config.schedule.weekday.split("/")[0]}
                        </div>
                      )}
                      {!shift && (
                        <div className="text-xs text-muted-foreground">
                          Sin turno asignado
                        </div>
                      )}
                    </div>
                  </div>
                  <ShiftCell
                    shift={shift}
                    onShiftChange={(newShift) =>
                      onAssignmentChange(worker.id, dateStr, newShift)
                    }
                    showTooltip={false}
                  />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Summary by Shift */}
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">
            Resumen por Turno
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(SHIFT_CONFIG) as ShiftType[]).map((shiftType) => {
              const workersInShift = groupedByShift[shiftType] || []
              const config = SHIFT_CONFIG[shiftType]

              return (
                <div
                  key={shiftType}
                  className="rounded-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={cn(
                        "flex h-8 w-12 items-center justify-center rounded font-semibold text-sm",
                        config.bgClass,
                        shiftType !== "off" ? "text-background" : "text-foreground"
                      )}
                    >
                      {config.shortLabel}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{config.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {workersInShift.length} trabajador
                        {workersInShift.length !== 1 ? "es" : ""}
                      </div>
                    </div>
                  </div>
                  {workersInShift.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {workersInShift.map((worker) => (
                        <Badge
                          key={worker.id}
                          variant="secondary"
                          className="text-xs"
                        >
                          {worker.name.split(" ")[0]}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {workersInShift.length === 0 && (
                    <p className="text-xs text-muted-foreground">
                      Sin asignaciones
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
