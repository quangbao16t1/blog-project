import { useAppSelector } from "app/hook";
import { authSelector } from "features/Auth/authSlice";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


interface Props {
    children?: ReactNode
}

export const AuthUserRoute = ({ children}: Props) => {
    const { currentUser } = useAppSelector(authSelector);
    const location = useLocation();

    if (currentUser?.roleId) {
        if (currentUser.roleId === 3) return <>{children}</>
        else return <Navigate to="/" state={{ from: location }} replace />;
    }
    else return <Navigate to="/login-and-register" state={{ from: location }} replace />;
};