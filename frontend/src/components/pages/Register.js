import React, { useRef, useState } from "react";
import { register, useAuth } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import '../inc/register.css'



export function Register() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleRegister() {
        setLoading(true);
        try {
            await register(emailRef.current.value, passwordRef.current.value);
            window.location.href = "/"
        } catch {
            alert("Error! User already exists");
        }
        setLoading(false);
    }

    return (

        <Container id="col">

            <Row>

                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded lg">
                    <Form id="Forml" className="rounded p-4 p-sm-3" >
                        <h1 id="headerR" >Register User</h1>
                        <Form.Group className="mb3">
                            <Form.Label><b>Email Address : </b></Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"
                                ref={emailRef} required />
                        </Form.Group >
                        <Form.Group>
                            <Form.Label><b>Password :</b> <i>( Password should not contain any special characters
                                and length must be greater than 6 )</i></Form.Label>
                            <Form.Control type="password" placeholder="Enter your password"
                                ref={passwordRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading || currentUser} onClick={handleRegister} type="submit" className="btn btn-block btn-lg btn-primary" >Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

