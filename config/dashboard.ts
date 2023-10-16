import { DashboardConfig } from 'types'

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Requests',
      href: '/dashboard/requests',
      icon: 'requests',
    },
    {
      title: 'Actors',
      href: '/dashboard/actors',
      icon: 'actors',
    },
    {
      title: 'Community',
      href: '/dashboard/community',
      icon: 'community',
    },
    {
      title: 'Payments',
      href: '/dashboard/payments',
      icon: 'payments',
    },
    {
      title: 'Settings',
      href: '/dashboard/settings/profile',
      icon: 'settings',
    },
  ],
}

export const settingsDashboard: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Profile',
      href: '/dashboard/settings/profile',
    },
    {
      title: 'Pricing',
      href: '/dashboard/settings/pricing',
    },
    {
      title: 'Team Managment',
      href: '/dashboard/settings/team-management',
    },
    {
      title: 'API Management',
      href: '/dashboard/settings/api-management',
    },
    {
      title: 'Push Notifications',
      href: '/dashboard/settings/push-notifications',
    },
  ],
}
