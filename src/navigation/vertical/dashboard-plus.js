import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, MessageCircle, Clipboard, Maximize } from 'react-feather'

export default [
  {
    header: 'Fresha Plus'
  },
  {
    id: 'overview',
    title: 'Overview',
    icon: <Maximize size={20} />,
    navLink: '/overview'
  },
  {
    id: 'online-booking',
    title: 'Online Booking',
      icon: <CheckSquare size={20} />,
    navLink: '/online-booking'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: <MessageSquare size={20} />,  
    navLink: '/marketing'
  },
  {
    id: 'consultant-forms',
    title: 'Consultant Forms',
    icon: <Clipboard size={20} />,
    navLink: '/consultant-form'
  },
  {
    id: 'client-message',
    title: 'Client Message',
    icon: <MessageCircle size={20} />,
    navLink: '/client-message'
  }
]
