import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const toastId = toast.loading('Logging in...')
    event.preventDefault();
    console.log('Login attempted with:', { email, password });
    setTimeout(() => {
        navigate('/home');
        toast.success('Login Successful', {id: toastId});
    }, 2000);
  };

  return (
    <div className='flex bg-primary'>
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 p-4" controlId="formBasicEmail">
                    <Form.Label style={{paddingRight: '.2rem'}}>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{paddingRight: '2rem'}}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                    Login
                    </Button>
                </Form>
                </Col>
            </Row>
            </Container>
    </div>
  );
}

export default Login;