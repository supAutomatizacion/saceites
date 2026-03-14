"use client"

import * as React from "react"
import {
  Frame,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/navigation/nav-main"
import { NavProjects } from "@/components/navigation/nav-projects"
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
          url: "/dashboard/search/id",
        },
        {
          title: "Pendientes",
          url: "/dashboard/search/title",
        },
        {
          title: "Otros",
          url: "/dashboard/search/status",
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
      url: "/dashboard/powerbi",
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
          loading="eager"
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
