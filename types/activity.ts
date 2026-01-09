export interface Activity {
  id: string
  name: string
  responsable: string
  status: "active" | "inactive"
  createdAt: string
}