import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/app',
    component: lazy(() => import('../../views/gp-app/dashboard')),
    exact: true
  },
  {
    path: '/branches',
    component: lazy(() => import ('../../views/gp-app/branches/index')),
    exact: true
  },
  {
    path: '/calendar',
    component: lazy(() => import('../../views/gp-app/calendar')),
    exact: true
  },
  {
    path: '/sales',
    component: lazy(() => import('../../views/gp-app/sales')),
    exact: true
  },
  {
    path: '/vouchers',
    component: lazy(() => import('../../views/gp-app/voucher')),
    exact: true
  },
  {
    path: '/clients',
    component: lazy(() => import('../../views/gp-app/clients')),
    exact: true
  },
  {
    path: '/staff',
    component: lazy(() => import('../../views/gp-app/staff')),
    exact: true
  },
  {
    path: '/services',
    component: lazy(() => import('../../views/gp-app/services')),
    exact: true
  },
  {
    path: '/inventory',
    component: lazy(() => import('../../views/gp-app/inventory')),
    exact: true
  },
  {
    path: '/analytics',
    component: lazy(() => import('../../views/gp-app/analytics')),
    exact: true
  },
  {
    path: '/setup',
    component: lazy(() => import('../../views/gp-app/setup/account-settings')),
    exact: true
  },
  {
    path: '/categories',
    component: lazy(() => import('../../views/gp-app/categories/index')),
    exact: true
  }

  
]

export default DashboardRoutes
