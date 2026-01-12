

import { z } from "zod"
import { promises as fs } from "fs"
import path from "path"
import { taskSchema } from "@/types/table/schema"

export async function getTasks() {
  const filePath = path.join(
    process.cwd(),
    "data/table/tasks.json"
  )

  const data = await fs.readFile(filePath, "utf-8")
  const tasks = JSON.parse(data)

  return z.array(taskSchema).parse(tasks)
}
