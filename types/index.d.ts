import type { Icon } from 'lucide-react'

import { Icons } from '@/components/icons'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export type PaymentItem = {
  id: number
  name: string
  status: 'active' | 'inactive' | 'accepted' | 'declined' | 'pending'
  phoneNumber: string
  email: string
  rating: number
  lastlogin: string
}
