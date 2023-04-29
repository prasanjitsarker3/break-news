import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { loginUser, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/category/0'
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Ensure string has two digits.")
        }
        if (password.length < 6) {
            setError("Password Length Should be 6")
        }
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
                setSuccess('Successfully Login ');
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message);
            })


    }
    return (
        <>
            <Form onSubmit={handleLogin} className='w-50 mx-auto border p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className='text-secondary text-center'>
                    <small className='text-center'>New User? <Link to='/register'>Register</Link></small>
                </Form.Text>
                <Form.Text className='text-success text-center'>
                    <p><small>{success}</small></p>
                </Form.Text>
                <Form.Text className='text-danger text-center'>
                    <p><small>{error}</small></p>
                </Form.Text>
            </Form>

        </>
    );
};

export default Login;