
import Routing from './baseRouting_network_call/Routing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Layout from './pages/Layout';
import sidebar from './pages/sidebar.json'
import AdminDashboard from './pages/AdminDashboard';
import userPermission from './pages/permision.json';
import { useEffect, useState } from 'react';
import HttpBrowsing from './baseRouting_network_call/HttpBrowsing';
import Store from './baseRouting_network_call/Store.jsx';

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





const App: React.FC = () => {
  const [token, setToken] = useState('')
  const [adminRouteData, setAdminRouteData] = useState([])
  const [permission, setPermission] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const handleToken = (token) => {
    setToken(token)
  }

  useEffect(() => {
    HttpBrowsing.get('/side-bar-menus/')
      .then((res) => {

        setAdminRouteData(res.data)
      })
      .catch(err => setIsloading(false))

    HttpBrowsing.get('/me/')
      .then((res) => {
        setPermission(res.data.results.user_permissions)
        setIsloading(false)

      })
      .catch(err => setIsloading(false))


  }, [token])


  const adminRoute: adminRouteProps = {
    adminRoutes: adminRouteData || [],
    adminComponent: AdminDashboard,
    adminLayout: Layout,
    userPermission: permission || []
  }



  return (
    <Store>
      {
        isLoading ? <p>Loading</p>
          :

          <Routing
            routeProperties={data}
            loginPage={Login}
            adminRoute={adminRoute}
            userPermission={permission}
            handleToken={handleToken}
          />}
    </Store>
  )
}

export default App
