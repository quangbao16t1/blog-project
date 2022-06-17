import { useAppSelector } from "app/hook";
import { authSelector } from "features/Auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export const AuthAdminRoute = ({children}: Props) => {
    const { currentUser } = useAppSelector(authSelector);
    const location = useLocation();

    if (currentUser?.roleId) {
        if (currentUser.roleId !== 3) return <>{children}</>
        else return <Navigate to="/" state={{ from: location }} replace />;
    }
    else return <Navigate to="/login" state={{ from: location }} replace />;
};