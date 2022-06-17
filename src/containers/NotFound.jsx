import React from "react";
import "./NotFound.css";
import Footer from './Footer'
import './Footer.css'

export default function NotFound() {
    return (
        <div className="NotFound">
            <div className="lander">
                <h1>Oops! Not Found.</h1>
                <p className="text-muted">The sites you entered is wrong, try to return it!</p>
            </div>
            <Footer />
        </div>

    );
}