import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from './containers/Signup'
import ResetPassword from "./containers/ResetPassword";
import { AnimatePresence } from 'framer-motion'
import MFA from "./containers/MFA";
import Confirmation from "./containers/Confirmation";

export default function Links() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/MFA/:email" element={<MFA />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="*" element={<NotFound />} />;
            </Routes>
        </AnimatePresence>

    );
}