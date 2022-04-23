import { Home, User, Settings, PieChart, Archive, Calendar, BarChart2, Gift, Users, Grid } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
     navLink: '/app'
  },
  {
    id: 'calender',
    title: 'Calender',
    icon: <Calendar size={20} />,
     navLink: '/calendar'
  },
  {
    id: 'sales',
    title: 'Sales',
    icon: <BarChart2 size={20} />,
     navLink: '/sales'
  },
  // {
  //   id: 'vouchers',
  //   title: 'Vouchers',
  //   icon: <Gift size={20} />,
  //    navLink: '/vouchers'
  // },
  {
    id: 'branches',
    title: 'Branches',
    icon: <Users size={20} />,
     navLink: '/branches'
  },
  {
    id: 'categories',
    title: 'Categories',
    icon: <Archive size={20} />,
     navLink: '/categories'
  },
  {
    id: 'services',
    title: 'Services',
    icon: <Grid size={20} />,
     navLink: '/services'
  },
  {
    id: 'staff',
    title: 'Staff',
    icon: <Users size={20} />,
     navLink: '/staff'
  },
  {
    id: 'clients',
    title: 'Clients',
    icon: <User size={20} />,
     navLink: '/clients'
  },
  // {
  //   id: 'inventory',
  //   title: 'Inventory',
  //   icon: <Archive size={20} />,
  //    navLink: '/inventory'
  // },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: <PieChart size={20} />,
     navLink: '/analytics'
  },
  {
    id: 'setup',
    title: 'Setup',
    icon: <Settings size={20} />,
     navLink: '/setup'
  }
]
