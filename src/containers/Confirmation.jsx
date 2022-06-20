import React from 'react'
import { motion } from 'framer-motion'
import Footer from './layout/Footer'




function Confirmation() {
    return (
        <motion.div className="NotFound"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="lander">
                <h1>Check your email.</h1>
                <p className="text-muted">If you enter the right email address, we'll tell you the next step.</p>
                <a class="btn btn-info" href="/" role="button">RETURN TO HOMEPAGE</a>
            </div>
            <Footer />
        </motion.div>
    )
}

export default Confirmation