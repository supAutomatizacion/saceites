import { z } from "zod"
import {promises as fs } from "fs"
import path from "path"
import { workerSchema } from "@/types/workers/schema"

export async function getWorkwers() {
  const filePath = path.join(
    process.cwd(),
    "data/worker/workers.json"
  )

  const data = await fs.readFile(filePath, "utf-8")
  const workers = JSON.parse(data)

  return z.array(workerSchema).parse(workers)
}