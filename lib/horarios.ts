export type ShiftType = "T27" | "T28" | "T29" | "T31" | "T51" | "T52" | "T53" | "T54" | "off"

export interface Worker {
  id: string
  name: string
  role: string
  avatar?: string
}

export interface ShiftAssignment {
  workerId: string
  date: string // ISO date string
  shift: ShiftType
}

export interface WeeklyShiftAssignment {
  workerId: string
  weekStart: string // ISO date string of Monday
  shift: ShiftType
}

export interface ShiftInfo {
  label: string
  shortLabel: string
  color: string
  bgClass: string
  schedule: {
    weekday: string
    weekend: string
    holiday: string
  }
}

export const SHIFT_CONFIG: Record<ShiftType, ShiftInfo> = {
  T27: {
    label: "Turno 27",
    shortLabel: "27",
    color: "oklch(0.72 0.15 160)",
    bgClass: "bg-[oklch(0.72_0.15_160)]",
    schedule: {
      weekday: "06:00 - 14:00",
      weekend: "06:00 - 14:00",
      holiday: "06:00 - 14:00",
    },
  },
  T28: {
    label: "Turno 28",
    shortLabel: "28",
    color: "oklch(0.65 0.18 250)",
    bgClass: "bg-[oklch(0.65_0.18_250)]",
    schedule: {
      weekday: "14:00 - 22:00",
      weekend: "14:00 - 22:00",
      holiday: "14:00 - 22:00",
    },
  },
  T29: {
    label: "Turno 29",
    shortLabel: "29",
    color: "oklch(0.55 0.15 280)",
    bgClass: "bg-[oklch(0.55_0.15_280)]",
    schedule: {
      weekday: "22:00 - 06:00",
      weekend: "22:00 - 06:00",
      holiday: "22:00 - 06:00",
    },
  },
  T31: {
    label: "Turno 31",
    shortLabel: "31",
    color: "oklch(0.70 0.20 40)",
    bgClass: "bg-[oklch(0.70_0.20_40)]",
    schedule: {
      weekday: "07:30 - 16:00",
      weekend: "08:00 - 12:00",
      holiday: "07:30 - 16:00",
    },
  },
  T51: {
    label: "Turno 51",
    shortLabel: "51",
    color: "oklch(0.68 0.18 180)",
    bgClass: "bg-[oklch(0.68_0.18_180)]",
    schedule: {
      weekday: "L: 06:00-12:00 / Ma-V: 06:00-14:00",
      weekend: "S: 06:00-12:00 / D: Libre",
      holiday: "Libre",
    },
  },
  T52: {
    label: "Turno 52",
    shortLabel: "52",
    color: "oklch(0.65 0.20 320)",
    bgClass: "bg-[oklch(0.65_0.20_320)]",
    schedule: {
      weekday: "L: 12:00-18:00 / Ma-V: 14:00-22:00",
      weekend: "S: 12:00-18:00 / D: Libre",
      holiday: "Libre",
    },
  },
  T53: {
    label: "Turno 53",
    shortLabel: "53",
    color: "oklch(0.72 0.15 90)",
    bgClass: "bg-[oklch(0.72_0.15_90)]",
    schedule: {
      weekday: "L-J: 08:00-15:00 / V: 08:00-17:00",
      weekend: "S: 08:00-15:00 / D: Libre",
      holiday: "Libre",
    },
  },
  T54: {
    label: "Turno 54",
    shortLabel: "54",
    color: "oklch(0.60 0.15 220)",
    bgClass: "bg-[oklch(0.60_0.15_220)]",
    schedule: {
      weekday: "L-J: 15:00-22:00 / V: 08:00-17:00",
      weekend: "S: 08:00-15:00 / D: Libre",
      holiday: "Libre",
    },
  },
  off: {
    label: "Libre",
    shortLabel: "L",
    color: "oklch(0.40 0 0)",
    bgClass: "bg-muted-foreground/40",
    schedule: {
      weekday: "Sin turno",
      weekend: "Sin turno",
      holiday: "Sin turno",
    },
  },
}

export const WORKERS: Worker[] = [
  { id: "1", name: "Diego Meneses", role: "Operador" },
  { id: "2", name: "Camilo Rodriguez", role: "Operador" },
  { id: "3", name: "Sebastian Gonzales", role: "Operador" },
  { id: "4", name: "Sergio Jaimes", role: "Operador" },
  { id: "5", name: "Sebastian Garcia", role: "Operador" },
  { id: "6", name: "Jesus Daniel", role: "Operador" },
  { id: "7", name: "Jeison Cadena", role: "Operador" },
  { id: "8", name: "Juan Valencia", role: "Operador" },
  { id: "9", name: "Sneider Moreno", role: "Operador" },
  { id: "10", name: "Harold Castañeda", role: "Operador" },
  { id: "11", name: "Luis Hernandez", role: "Operador" },
  { id: "12", name: "Hader Cabrera", role: "Operador" },
  { id: "13", name: "Carmen Vargas", role: "Operador" },
]

// Helper functions
export function getWeekDates(date: Date): Date[] {
  const week: Date[] = []
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1) // Adjust for Monday start
  start.setDate(diff)
  
  for (let i = 0; i < 7; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    week.push(d)
  }
  return week
}

export function getWeekStart(date: Date): string {
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1)
  start.setDate(diff)
  return formatDate(start)
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]
}

export function getDayName(date: Date, short = false): string {
  const options: Intl.DateTimeFormatOptions = { weekday: short ? "short" : "long" }
  return date.toLocaleDateString("es-ES", options)
}

export function getMonthName(date: Date): string {
  return date.toLocaleDateString("es-ES", { month: "long", year: "numeric" })
}

export function getWeekRange(date: Date): string {
  const dates = getWeekDates(date)
  const start = dates[0]
  const end = dates[6]
  
  const formatShort = (d: Date) => {
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
  }
  
  return `${formatShort(start)} - ${formatShort(end)}`
}
