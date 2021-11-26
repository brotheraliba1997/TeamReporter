
import { Routes as AppRoutes, Route } from "react-router-dom";

import Home from "../components/Home";

import Login from "../components/Login";

const Routes = () => {
    return (
        <AppRoutes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<Login />} />
        </AppRoutes>
    );
};

export default Routes;