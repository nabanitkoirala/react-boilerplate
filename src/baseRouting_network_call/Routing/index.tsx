import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { TokenStore_Context } from "../../baseRouting_network_call/Store"


interface routeDetails {
    path: string;
    component: React.ComponentType<any>; // The component can receive any props

    layout?: React.ComponentType<any>
}
interface Route {
    frontendRoutes: routeDetails[]
}


// interface Route {
//     path: string;
//     component: React.ComponentType<any>;
//     isProtectedRoute: boolean;
//     layout?: React.ComponentType<any>
// }


interface appModals {
    api_link: string;
    verbose_name: string;
    model_name: string;
}
interface adminRouteDetails {
    verbose_name: string;
    app_name: string;
    app_models: appModals[];
    app_icon: string;
}
interface adminRouteProps {
    adminComponent: React.ComponentType<any>
    adminRoutes: adminRouteDetails[]
    adminLayout: React.ComponentType<any>

}

interface RoutingProps {
    routeProperties: Route;
    loginPage: React.ComponentType<any>;
    adminRoute: adminRouteProps;
    userPermission: string[];
    handleToken: () => void;

}




const Routing: React.FC<RoutingProps> = ({ routeProperties, loginPage, adminRoute, userPermission, handleToken }) => {
    const [tokenStore, setTokenStore] = useContext(TokenStore_Context)

    const AdminLayout = adminRoute.adminLayout;
    const AdminComponent = adminRoute.adminComponent;
    const Login = loginPage;
    useEffect(() => {
        if (tokenStore) {
            handleToken(tokenStore)
        }
    }, [tokenStore])
    console.log("This is adminRoute", adminRoute)
    return (
        <Router>
            <Routes>
                {
                    routeProperties && routeProperties.frontendRoutes.map((item) => {

                        const Component = item.component;
                        const Layout = item.layout ? item.layout : ''
                        return <Route
                            key={item.path}
                            path={item.path}
                            element={

                                Layout ? <Layout>
                                    < Component />
                                </Layout>
                                    :
                                    < Component />
                            }
                        />
                    })

                }

                {
                    adminRoute && adminRoute.adminRoutes.length && adminRoute.adminRoutes.map((item) => {
                        // const Component = adminRoute.adminComponent;
                        // const AdminLayout = adminRoute.adminLayout;
                        const routeMap = item.app_models.map((route) => {

                            return <Route
                                key={route.model_name}
                                path={`/admin/${item.app_label}/${(route.model_name).toLowerCase()}`}
                                element={
                                    <ProtectedRoute>
                                        {AdminLayout ? <AdminLayout routeDetails={adminRoute.adminRoutes} >
                                            < AdminComponent
                                                userPermission={userPermission}
                                                routeDetails={adminRoute.adminRoutes}

                                            />
                                        </AdminLayout>
                                            :
                                            < AdminComponent
                                                userPermission={userPermission}
                                                routeDetails={adminRoute.adminRoutes}
                                            />}
                                    </ProtectedRoute>
                                }
                            />
                        })
                        return routeMap

                    })
                }

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isLoginPage={true} loginPage={loginPage} adminRoute={adminRoute} >
                            {adminRoute && adminRoute.adminRoutes.length ?
                                <Navigate to={`/admin/${adminRoute.adminRoutes[0].app_label}/${(adminRoute.adminRoutes[0].app_models[0].model_name).toLowerCase()}`} />
                                : ''}
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute isLoginPage={true} loginPage={loginPage} adminRoute={adminRoute}>
                            {adminRoute && adminRoute.adminRoutes.length
                                ? <Navigate to={`/admin/${adminRoute.adminRoutes[0].app_label}/${(adminRoute.adminRoutes[0].app_models[0].model_name).toLowerCase()}`} />
                                : ''}
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}



export default Routing