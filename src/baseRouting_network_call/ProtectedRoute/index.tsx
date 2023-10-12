import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// import { getLoginStatus } from "../../Services/AuthService";

interface defaultProps {
    children: ReactNode
    isLoginPage?: boolean
    loginPage?: React.ComponentType<unknown>;
    adminRoute?: adminRouteProps;
}

interface appModals {
    api_link: string;
    verbose_name_plural: string;
    verbose_name: string;
    model_name: string;
}
interface adminRouteDetails {
    verbose_name: string;
    label: string;
    app_name: string;
    app_models: appModals[]
}
interface adminRouteProps {
    adminComponent: React.ComponentType<any>
    adminRoutes: adminRouteDetails[]
    adminLayout: React.ComponentType<any>

}



const ACCESS_TOKEN_NAME = import.meta.env.VITE_APP_ACCESS_TOKEN_NAME || process.env.REACT_APP_ACCESS_TOKEN_NAME;
const ProtectedRoute = (props: defaultProps) => {
    const {
        children,
        isLoginPage = false,
        loginPage,
        adminRoute
    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
    const checkForAuthentication = async () => {
        const data = await localStorage.getItem(ACCESS_TOKEN_NAME)
        data ? setIsLoggedIn(true) : setIsLoggedIn(false)
        return
    }
    useEffect(() => {
        checkForAuthentication()
    }, [children])







    // fetch(import.meta.env.VITE_APP_BACKEND_URL + "/auth/me", {
    //     credentials: 'include',

    // }).then(res => {
    //     if (res.status == 200) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // })

    console.log("This is isLoggedIn", isLoggedIn)
    console.log("This is admin route", adminRoute)


    if (isLoggedIn && isLoginPage && adminRoute) {
        const Login = loginPage
        console.log('Entered here')
        return (
            <Navigate to={`/admin/${adminRoute.adminRoutes[0].app_label}/${(adminRoute.adminRoutes[0].app_models[0].model_name).toLowerCase()}`} />
            // <Login />
        )
    }
    else if (isLoggedIn === true) {
        return (
            <>
                {children}
            </>
        )
    } else if (isLoggedIn === false && !isLoginPage) {
        return (
            <Navigate to='/admin' />
        )
    } else if (isLoggedIn === false && isLoginPage) {
        const Login = loginPage
        return (
            // <Navigate to="/login" />
            <Login />
        )
    }

    else {
        return (
            <>
            </>
        )
    }
}

export default ProtectedRoute;