import React from "react";
import "./Home.css";
import Footer from './Footer'

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Sign in options page</h1>
                <p className="text-muted">The sign in flow you will implement has 3 pages:</p>
            </div>

            <Footer />
        </div>
    );
}