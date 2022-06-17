import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from './containers/Signup'
import MFA from "./containers/MFA";
export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/MFA" element={<MFA />} />
            <Route path="*" element={<NotFound />} />;
        </Routes>
    );
}