import React from "react";
import { Navigate, Outlet } from "react-router-dom";

class AdminRoute extends React.Component {
    render() {
        const isLoggedIn = localStorage.getItem('userId') !== null;
        const userRole = localStorage.getItem('userRole');

        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }

        if(userRole === 'admin') {
            return <Outlet />;
        } else {
            return <Navigate to="/forbidden" replace />;
        }
    }
}

export default AdminRoute;