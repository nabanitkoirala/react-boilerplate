import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// import { getLoginStatus } from "../../Services/AuthService";

interface defaultProps {
    children: ReactNode
    isLoginPage?: boolean
    loginPage?: React.ComponentType<unknown>;
}
const ACCESS_TOKEN_NAME = import.meta.env.VITE_APP_ACCESS_TOKEN_NAME || process.env.REACT_APP_ACCESS_TOKEN_NAME;
const ProtectedRoute = (props: defaultProps) => {
    const {
        children,
        isLoginPage = false,
        loginPage
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
    if (isLoggedIn === true) {
        return (
            <>
                {children}
            </>
        )
    } else if (isLoggedIn === false && !isLoginPage) {
        return (
            <Navigate to='/' />
        )
    } else if (isLoggedIn === false && isLoginPage) {
        const Login = loginPage
        return (
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