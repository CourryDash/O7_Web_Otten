import React from "react";
import { Navigate, Outlet } from "react-router-dom";

class AdminRoute extends React.Component {
    render() {
        const userRole = localStorage.getItem('userRole');

        if(userRole === 'admin') {
            return <Outlet />;
        } else {
            return <Navigate to="/forbidden" replace />;
        }
    }
}

export default AdminRoute;