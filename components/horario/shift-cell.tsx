"use client"

import { cn } from "@/lib/utils"
import { ShiftType, SHIFT_CONFIG } from "@/lib/horarios"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ShiftCellProps {
  shift: ShiftType | null
  onShiftChange: (shift: ShiftType) => void
  compact?: boolean
  showTooltip?: boolean
}

export function ShiftCell({ shift, onShiftChange, compact = false, showTooltip = true }: ShiftCellProps) {
  const config = shift ? SHIFT_CONFIG[shift] : null

  const cellContent = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-center rounded-md transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background font-semibold",
            compact ? "h-8 w-10" : "h-9 w-12",
            shift ? config?.bgClass : "bg-secondary border border-dashed border-border",
            shift && shift !== "off" ? "text-background" : "text-foreground"
          )}
        >
          {shift ? (
            <span className="text-xs">{config?.shortLabel}</span>
          ) : (
            <span className="text-muted-foreground text-xs">+</span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="min-w-[180px]">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Seleccionar turno
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(Object.keys(SHIFT_CONFIG) as ShiftType[]).map((shiftType) => (
          <DropdownMenuItem
            key={shiftType}
            onClick={() => onShiftChange(shiftType)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span
              className={cn(
                "flex h-6 w-8 items-center justify-center rounded text-xs font-semibold",
                SHIFT_CONFIG[shiftType].bgClass,
                shiftType !== "off" ? "text-background" : "text-foreground"
              )}
            >
              {SHIFT_CONFIG[shiftType].shortLabel}
            </span>
            <span className="text-sm">{SHIFT_CONFIG[shiftType].label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  if (showTooltip && shift && config) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            {cellContent}
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[200px]">
            <div className="space-y-1">
              <p className="font-semibold">{config.label}</p>
              <p className="text-xs text-muted-foreground">{config.schedule.weekday}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return cellContent
}
