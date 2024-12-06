import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast'

function EventForm() {
  const [eventName, setEventName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setEventName(localStorage.getItem('name'));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading('Requesting...');

    const formData = new FormData();
    formData.append('name', name.value);

    const result = await fetch('/submit', formData);
    if(result.status === 200) {
      toast.success(result.message, {id: toastId});
    } else {
      toast.error(result.message, {id: toastId});
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">{eventName}</h2>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Message...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EventForm;