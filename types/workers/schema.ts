import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const workerSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  rango: z.string(),
  radio: z.string(),
  telefono: z.string(),
})

export type Worker = z.infer<typeof workerSchema>