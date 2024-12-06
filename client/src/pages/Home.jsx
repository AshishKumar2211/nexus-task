import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Category from '../components/Category';

function Home() {
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

  const categories = ['Sports', 'Marathon', 'Startup', 'Football', 'Basketball', 'Tennis'];

  return (
    <div className='flex bg-primary'>
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                <h2 className="text-center mb-4">Home</h2>
                  {categories.map((i) => <Category name={i} key={i} />)}
                </Col>
            </Row>
          </Container>
    </div>
  );
}

export default Home;