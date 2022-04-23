import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  // Invoices
  // {
  //   path: '/gp-app/invoice/list',
  //   component: lazy(() => import('../../views/gp-app/invoice/list'))
  // },
  // {
  //   path: '/gp-app/invoice/preview/:id',
  //   component: lazy(() => import('../../views/gp-app/invoice/preview')),
  //   meta: {
  //     navLink: '/gp-app/invoice/preview'
  //   }
  // },
  // {
  //   path: '/gp-app/invoice/preview',
  //   exact: true,
  //   component: () => <Redirect to='/gp-app/invoice/preview/4987' />
  // },
  // {
  //   path: '/gp-app/invoice/edit/:id',
  //   component: lazy(() => import('../../views/gp-app/invoice/edit')),
  //   meta: {
  //     navLink: '/gp-app/invoice/edit'
  //   }
  // },
  // {
  //   path: '/gp-app/invoice/edit',
  //   exact: true,
  //   component: () => <Redirect to='/gp-app/invoice/edit/4987' />
  // },
  // {
  //   path: '/gp-app/invoice/add',
  //   component: lazy(() => import('../../views/gp-app/invoice/add'))
  // },
  // {
  //   path: '/gp-app/invoice/print',
  //   layout: 'BlankLayout',
  //   component: lazy(() => import('../../views/gp-app/invoice/print'))
  // },

  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/gp-app/clients/list',
    component: lazy(() => import('../../views/gp-app/clients/list'))
  },
  {
    path: '/gp-app/clients/edit',
    exact: true,
    component: () => <Redirect to='/gp-app/clients/edit/1' />
  },
  {
    path: '/gp-app/clients/edit/:id',
    component: lazy(() => import('../../views/gp-app/clients/edit')),
    meta: {
      navLink: '/gp-app/clients/edit'
    }
  },
  {
    path: '/gp-app/clients/view',
    exact: true,
    component: () => <Redirect to='/gp-app/clients/view/1' />
  },
  {
    path: '/gp-app/clients/view/:id',
    component: lazy(() => import('../../views/gp-app/clients/view')),
    meta: {
      navLink: '/gp-app/clients/view'
    }
  },
  // Staff
  {
    path: '/gp-app/staff/list',
    component: lazy(() => import('../../views/gp-app/staff/list'))
  },
  {
    path: '/gp-app/staff/edit',
    exact: true,
    component: () => <Redirect to='/gp-app/staff/edit/1' />
  },
  {
    path: '/gp-app/staff/edit/:id',
    component: lazy(() => import('../../views/gp-app/staff/edit')),
    meta: {
      navLink: '/gp-app/staff/edit'
    }
  },
  {
    path: '/gp-app/staff/view',
    exact: true,
    component: () => <Redirect to='/gp-app/staff/view/1' />
  },
  {
    path: '/gp-app/staff/view/:id',
    component: lazy(() => import('../../views/gp-app/staff/view')),
    meta: {
      navLink: '/gp-app/staff/view'
    }
  },
  // Inventory
    {
    path: '/gp-app/inventory/list',
    component: lazy(() => import('../../views/gp-app/inventory/list'))
  },
  {
    path: '/gp-app/inventory/edit',
    exact: true,
    component: () => <Redirect to='/gp-app/inventory/edit/1' />
  },
  {
    path: '/gp-app/inventory/edit/:id',
    component: lazy(() => import('../../views/gp-app/inventory/edit')),
    meta: {
      navLink: '/gp-app/inventory/edit'
    }
  },
  {
    path: '/gp-app/inventory/view',
    exact: true,
    component: () => <Redirect to='/gp-app/inventory/view/1' />
  },
  {
    path: '/gp-app/inventory/view/:id',
    component: lazy(() => import('../../views/gp-app/inventory/view')),
    meta: {
      navLink: '/gp-app/inventory/view'
    }
  }
]

export default AppRoutes
