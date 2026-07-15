import React from 'react'
import { Home, Inbox, Calendar, Search, Settings, User2, ChevronUp, Plus, Projector, ChevronDown } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from 'next/link'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
export default function AppSidebar() {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='py-4'>
        <SidebarMenu>

          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="/" />}>
              <Image src="/profile.jpg" alt="logo" width={20} height={20} className='rounded-full' />
              <span>Ridaya Dev</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<Link href={item.url} />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.title=="Inbox" && (
                    <SidebarMenuBadge>14</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction>
    <Plus /> <span className="sr-only">Add Project</span>
  </SidebarGroupAction>

  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton render={<Link href="/#"><Projector/>See All Projects</Link>}>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton render={<Link href="/#"><Plus/>Add Project</Link>}>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>

        </SidebarGroup>
{/* Collapsable */}
<Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel render={
        <CollapsibleTrigger>
          Collapsable Group
          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </CollapsibleTrigger>
      } />  

         <CollapsibleContent>
  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton render={<Link href="/#"><Projector/>See All Projects</Link>}>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton render={<Link href="/#"><Plus/>Add Project</Link>}>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>
  </CollapsibleContent> 

        </SidebarGroup>
</Collapsible>
{/* Nested */}

<SidebarGroup>
          <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
              

  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton render={<Link href="/#"><Projector/>See All Projects</Link>}>
        </SidebarMenuButton>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton render={<Link href="/#"><Plus/>Add Project</Link>}></SidebarMenuSubButton>
        </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <SidebarMenuSubButton render={<Link href="/#"><Plus/>Add Category</Link>}></SidebarMenuSubButton>
        </SidebarMenuSubItem>
        </SidebarMenuSub>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>

        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        {/* Pass your SidebarMenuButton element inside the render prop */}
        <DropdownMenuTrigger 
          render={
            <SidebarMenuButton>
              <User2 /> Hridaya Shrestha <ChevronUp className='ml-auto'/>
            </SidebarMenuButton>
          } 
        />
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>Sign out</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>
    </Sidebar>
  )
}
