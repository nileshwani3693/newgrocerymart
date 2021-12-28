import React, { useRef, useState } from "react";
import { login, useAuth } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import '../inc/login.css'



export function Login() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        setLoading(true);
        if (emailRef.current.value === "admin@gmail.com") {
            try {
                await login(emailRef.current.value, passwordRef.current.value);
                window.location.href = "/admin/dashboard";
            } catch {
                alert("Password or email is incorrect");
            }
        } else {
            try {
                await login(emailRef.current.value, passwordRef.current.value);

                window.location.href = "/";
            } catch {
                alert("Password or email is incorrect");
            }
        }
        setLoading(false);
    }




    return (

        <Container id="col" >

            <Row>
                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded lg">

                    <Form id="Forml" className="rounded p-4 p-sm-3 " >
                        <h1 id="headerL" >Login</h1>
                        <Form.Group className="mb3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email"
                                ref={emailRef} />
                        </Form.Group >
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password"
                                ref={passwordRef} />
                        </Form.Group>
                        <br />
                        <Button disabled={loading || currentUser} onClick={handleLogin} type="submit" className="btn btn-block btn-lg btn-primary" >Login</Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

