import React from 'react'
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import Footer from './Footer'
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { flash } from "react-universal-flash";
import { Flasher } from "react-universal-flash";
// import Message from "./Message"
import Alert from 'react-bootstrap/Alert';


export const Message = ({ info, content, deleteFlash }) =>
    <Alert variant={info} onClose={deleteFlash} dismissible>
        {content}
    </Alert>



function MFA() {
    const navigate = useNavigate();
    const [MFA, setMFA] = useState("");
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let { email } = useParams();
    useEffect(() => {
        if (!pattern.test(email)) {
            navigate(`/login`);
        }
    })

    console.log(email)
    function validateForm() {
        return MFA.length > 0;
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('I am doing')
        const res = await axios.post(`https://interview.outstem.io/auth/mfa`,
            {
                email: email,
                code: MFA,
            }).catch((err) => {
                flash("You entered a wrong MFA code, try again!", 2000, "green")
            })
        if (res.status === 200) {
            window.location.replace(`https://interview.outstem.io/oauth?identity=${res.data.identity}`);
        } else {
        }
    }

    return (
        <div className="Login bg-light">

            <Form className="mx-auto" onSubmit={handleSubmit}>
                <Flasher position="custom" customStyles={{ top: 80, right: 30 }}>
                    <Message />

                </Flasher>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your MFA code:</Form.Label>
                    <Form.Control type="MFA code" placeholder="MFA code" onChange={e => setMFA(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Trust the device?" />
                </Form.Group>
                <Container className="">
                    <Row>
                        <Button className="mr-3" type="submit" variant="primary" disabled={!validateForm()}>
                            Submit
                        </Button>
                    </Row>
                </Container>

                <p className="forgot-password mt-2 text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
            <Footer></Footer>
        </div>)
}

export default MFA