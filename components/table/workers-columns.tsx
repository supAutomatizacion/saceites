// components/workers-columns.tsx
import { ColumnDef } from "@tanstack/react-table"


export type Acticity = {
  name: string
  status: string
  date: string
}

export const columns: ColumnDef<Acticity>[] = [
  {
    accessorKey: "name",
    header: "Actividad",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "date",
    header: "Fecha de creacion",
  },
]
