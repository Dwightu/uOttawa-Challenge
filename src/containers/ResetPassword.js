import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './layout/Footer'
import { Form } from 'react-bootstrap';
import { Flasher } from "react-universal-flash";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Message = ({ info, content, deleteFlash }) =>
    <Alert variant={info} onClose={deleteFlash} dismissible>
        {content}
    </Alert>

function ResetPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    function validateForm() {
        return email.length > 0;
    }

    const handleSubmit = () => {
        navigate(`/confirmation`);
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
                        Enter your email to reset your password
                    </Form.Text>
                </Form.Group>

                <Container className="SubmitBtn">
                    <Row>
                        <Button className=" mr-3" type="submit" variant="primary" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Row>
                </Container>

            </Form>
            <Footer></Footer>
        </motion.div>
    )
}

export default ResetPassword