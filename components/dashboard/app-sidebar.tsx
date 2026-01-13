"use client"

import * as React from "react"
import {
  Frame,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import Image from 'next/image'

// This is sample data.
const data = {
  navMain: [
    {
      title: "Filtrar",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Actividades",
          url: "#",
        },
        {
          title: "Pendientes",
          url: "#",
        },
        {
          title: "Otros",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sistema automatico",
      url: "/dashboard/automatic",
      icon: Frame,
    },
    {
      name: "Analisis estadistico",
      url: "#",
      icon: PieChart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (


    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <Image
          src="/1.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <p>FOOTER</p>
      </SidebarFooter>
    </Sidebar>

  )
}
