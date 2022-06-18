import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import { flash } from "react-universal-flash";
import { Flasher } from "react-universal-flash";
// import Message from "./Message"
import Alert from 'react-bootstrap/Alert';
import { motion } from 'framer-motion'


export const Message = ({ info, content, deleteFlash }) =>
    <Alert variant={info} onClose={deleteFlash} dismissible>
        {content}
    </Alert>

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();



        // const response = await fetch(`https://interview.outstem.io/auth`, {
        // method: 'POST',
        // body: `{
        //     "email": "${email}",
        //     "password": "${password}"
        // }`
        // })
        // console.log(response)
        await axios.post(`https://interview.outstem.io/auth`,
            {
                email: email,
                password: password,

            })
            .then((res) => {
                if (res.data.challenge == null) {
                    window.location.replace(`https://interview.outstem.io/oauth?identity=${res.data.identity}`);
                }

                console.log(res.data.challenge === "MFA")
                if (res.data.challenge == "MFA") {
                    navigate(`/MFA/${email}`);
                }
            })
            .catch((err) => {
                flash("You entered a wrong Password or information, try again!", 2000, "green")
            })
        // console.log(res.status === 200);

    }

    return (
        <motion.div className="Login bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Form className="mx-auto" onSubmit={handleSubmit}>
                <Flasher position="custom" customStyles={{ top: 79, right: 30 }}>
                    <Message />

                </Flasher>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember your password" />
                </Form.Group>
                <Container className="SubmitBtn">
                    <Row>
                        <Button className=" mr-3" type="submit" variant="primary" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Row>
                </Container>

                <p className="forgot-password mt-2 text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
            <Footer />
        </motion.div >
    );
}