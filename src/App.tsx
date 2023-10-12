
import Routing from './baseRouting_network_call/Routing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Layout from './pages/Layout';
import sidebar from './pages/sidebar.json'
import AdminDashboard from './pages/AdminDashboard';
import userPermission from './pages/permision.json';
import { useEffect, useRef, useState } from 'react';
import HttpBrowsing from './baseRouting_network_call/HttpBrowsing';
import Store from './baseRouting_network_call/Store.jsx';
import UserData from './pages/user.json';
import sidebarData from './pages/sidebar.json';
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
  const shouldLog = useRef(true);
  const handleToken = (token) => {
    setToken(token)
  }

  useEffect(() => {

    if (shouldLog.current) {
      shouldLog.current = false;

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
    }

  }, [token])
  const user_permission = UserData.user_permissions;
  const modularFilter = (user_permission, sidebarData) => {
    const overallAppPermission = userPermission.map(i => i.split('.')[0]);
    const finalAppPermission = [...new Set(overallAppPermission)]
    const overallModalPermission = userPermission.map(i => i.split('_')[1])
    const finalModalPermission = [...new Set(overallModalPermission)]
    console.log("This is overallAppPermission", overallAppPermission, finalAppPermission, finalModalPermission)


    const sidebarFilter = sidebarData.filter(item => finalAppPermission.includes(item.app_label))
    // .map((data) => data.app_models.filter(d => finalModalPermission.includes(d.model_name.toLowerCase()))
    console.log("This is sidebar filter", sidebarFilter)
    const finalSidebarFilter = sidebarFilter.map(i => ({ ...i, app_models: i.app_models.filter(d => finalModalPermission.includes(d.model_name.toLowerCase())) }))
    console.log("final sidebar", sidebarFilter, finalSidebarFilter)

    return finalSidebarFilter
  }

  modularFilter(user_permission, sidebarData)
  const adminRoute: adminRouteProps = {
    adminRoutes: modularFilter(user_permission, sidebarData) || [],
    adminComponent: AdminDashboard,
    adminLayout: Layout,
    userPermission: permission || []
  }



  return (
    <Store>
      {


        <Routing
          routeProperties={data}
          loginPage={Login}
          adminRoute={adminRoute}
          userPermission={UserData.user_permissions}
          handleToken={handleToken}
        />}
    </Store>
  )
}

export default App
