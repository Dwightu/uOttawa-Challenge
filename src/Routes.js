import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from './containers/Signup'

import { AnimatePresence } from 'framer-motion'
import MFA from "./containers/MFA";
export default function Links() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/MFA/:email" element={<MFA />} />
                <Route path="*" element={<NotFound />} />;
            </Routes>
        </AnimatePresence>

    );
}