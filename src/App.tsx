import Routing from './utils/Routing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Layout from './pages/Layout';
import sidebar from './pages/sidebar.json'
import AdminDashboard from './pages/AdminDashboard';
import userPermission from './pages/permision.json';

interface routeDetails {
  path: string;
  component: React.ComponentType<any>; // The component can receive any props

  layout?: React.ComponentType<any>
}
interface Route {
  frontendRoutes: routeDetails[]
}


interface appModals {
  api_link: string;
  verbose_name: string;
  model_name: string;
}
interface adminRouteDetails {
  verbose_name: string;
  app_name: string;
  app_models: appModals[]
}
interface adminRouteProps {
  adminRoutes: adminRouteDetails[];
  adminComponent: React.ComponentType<any>;
  adminLayout: React.ComponentType<any>;
  userPermission: string[];
}



const data: Route = {
  frontendRoutes: [
    {
      path: '/',
      component: Dashboard,

      // layout: Layout
    },
    // {
    //   path: '/login',
    //   component: Login,
    // }

  ]
}


const adminRoute: adminRouteProps = {
  adminRoutes: sidebar,
  adminComponent: AdminDashboard,
  adminLayout: Layout,
  userPermission: userPermission
}


const App: React.FC = () => {


  return (
    <Routing
      routeProperties={data}
      loginPage={Login}
      adminRoute={adminRoute}
      userPermission={userPermission}
    />
  )
}

export default App
