import Routing from './utils/Routing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Layout from './pages/Layout';



interface Route {
  path: string;
  component: React.ComponentType<any>; // The component can receive any props
  isProtectedRoute: boolean;
  layout?: React.ComponentType<any>
}


const data: Route[] = [
  {
    path: '/',
    component: Dashboard,
    isProtectedRoute: true,
    layout: Layout
  },
  {
    path: '/users',
    component: User,
    isProtectedRoute: false,

  }
]
const App: React.FC = () => {


  return (
    <Routing routeProperties={data} loginPage={Login} />
  )
}

export default App
