export interface Worker {
  id: string
  name: string
  role: string
  status: "active" | "inactive"
  createdAt: string
}