"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShiftCell } from "./shift-cell"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Worker,
  ShiftAssignment,
  ShiftType,
  getWeekDates,
  formatDate,
  getDayName,
  getWeekStart,
  SHIFT_CONFIG,
} from "@/lib/horarios"
import { cn } from "@/lib/utils"
import { CalendarRange } from "lucide-react"

interface WeekViewProps {
  workers: Worker[]
  assignments: ShiftAssignment[]
  currentDate: Date
  onAssignmentChange: (workerId: string, date: string, shift: ShiftType) => void
  onWeeklyAssign: (workerId: string, weekStart: string, shift: ShiftType) => void
}

export function WeekView({
  workers,
  assignments,
  currentDate,
  onAssignmentChange,
  onWeeklyAssign,
}: WeekViewProps) {
  const weekDates = getWeekDates(currentDate)
  const weekStart = getWeekStart(currentDate)

  const getAssignment = (workerId: string, date: Date): ShiftType | null => {
    const dateStr = formatDate(date)
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

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Vista Semanal</CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-6 sm:pt-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pl-4 text-left text-sm font-medium text-muted-foreground w-[200px]">
                  Trabajador
                </th>
                <th className="pb-3 px-2 text-center text-sm font-medium text-muted-foreground w-[80px]">
                  Semana
                </th>
                {weekDates.map((date) => (
                  <th
                    key={date.toISOString()}
                    className={cn(
                      "pb-3 px-1 text-center",
                      isWeekend(date) && "bg-muted/30"
                    )}
                  >
                    <div
                      className={cn(
                        "text-xs font-medium capitalize",
                        isToday(date) ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {getDayName(date, true)}
                    </div>
                    <div
                      className={cn(
                        "text-sm font-semibold",
                        isToday(date)
                          ? "text-primary bg-primary/10 rounded-full w-7 h-7 flex items-center justify-center mx-auto"
                          : "text-foreground"
                      )}
                    >
                      {date.getDate()}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {workers.map((worker, idx) => (
                <tr
                  key={worker.id}
                  className={cn(
                    "hover:bg-muted/20 transition-colors",
                    idx !== workers.length - 1 && "border-b border-border/50"
                  )}
                >
                  <td className="py-3 pl-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                          {getInitials(worker.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">
                          {worker.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {worker.role}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 gap-1.5 text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                        >
                          <CalendarRange className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Asignar</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="min-w-[200px]">
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                          Asignar turno semanal
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {(Object.keys(SHIFT_CONFIG) as ShiftType[]).map(
                          (shiftType) => (
                            <DropdownMenuItem
                              key={shiftType}
                              onClick={() =>
                                onWeeklyAssign(worker.id, weekStart, shiftType)
                              }
                              className="flex items-center gap-3 cursor-pointer"
                            >
                              <span
                                className={cn(
                                  "flex h-6 w-10 items-center justify-center rounded text-xs font-semibold",
                                  SHIFT_CONFIG[shiftType].bgClass,
                                  shiftType !== "off"
                                    ? "text-background"
                                    : "text-foreground"
                                )}
                              >
                                {SHIFT_CONFIG[shiftType].shortLabel}
                              </span>
                              <span className="text-sm">
                                {SHIFT_CONFIG[shiftType].label}
                              </span>
                            </DropdownMenuItem>
                          )
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  {weekDates.map((date) => (
                    <td
                      key={date.toISOString()}
                      className={cn(
                        "py-3 px-1 text-center",
                        isWeekend(date) && "bg-muted/30"
                      )}
                    >
                      <div className="flex justify-center">
                        <ShiftCell
                          shift={getAssignment(worker.id, date)}
                          onShiftChange={(shift) =>
                            onAssignmentChange(worker.id, formatDate(date), shift)
                          }
                          compact
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
