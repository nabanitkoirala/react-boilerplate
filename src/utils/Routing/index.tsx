import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

interface Route {
    path: string;
    component: React.ComponentType<any>;
    isProtectedRoute: boolean;
    layout?: React.ComponentType<any>
}

interface RoutingProps {
    routeProperties: Route[];
    loginPage: React.ComponentType<any>;
}

const Routing: React.FC<RoutingProps> = ({ routeProperties, loginPage }) => {
    return (
        <Router>
            <Routes>
                {
                    routeProperties.length && routeProperties.map((item) => {

                        const Component = item.component;
                        const Layout = item.layout ? item.layout : ''
                        return <Route
                            key={item.path}
                            path={item.path === '/' ? '/dashboard' : item.path}
                            element={
                                item.isProtectedRoute ?
                                    <ProtectedRoute>

                                        {

                                            Layout ? <Layout>
                                                < Component />
                                            </Layout>
                                                :
                                                < Component />
                                        }
                                    </ProtectedRoute> :
                                    < Component />
                            }
                        />
                    })

                }
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isLoginPage={true} loginPage={loginPage} >
                            <Navigate to="/dashboard" />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}



export default Routing