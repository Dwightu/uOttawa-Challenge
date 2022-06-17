import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        axios.post(`https://interview.outstem.io/auth`,
            {

                email: email,
                password: password,

            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div className="Login bg-light d-flex justify-content-center">
            <Form className="mx-auto" onSubmit={handleSubmit}>
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
                <Button type="submit" variant="primary" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}