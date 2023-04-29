import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [accept, setAccept] = useState(false);
    const handleSignUP = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Ensure string has two digits.")
        }
        if (password.length < 6) {
            setError("Password Length Should be 6")
        }
        setError('')
        setSuccess('')
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("Successful Login User");
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }

    const handleCheckOut = (event) => {
          setAccept(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={handleSignUP} className='lg: w-25 md:w-25 w-50 mx-auto border p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckOut}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms And Conditions</Link></>} />
                </Form.Group>
                <Button disabled={!accept} className='w-100' variant="primary" type="submit">
                    Sign Up
                </Button>

                <br />
                <Form.Text className='text-secondary text-center'>
                    <small className='text-center'>Already Have An Account? <Link to='/login'>Login</Link></small>
                </Form.Text>
                <Form.Text className='text-success text-center'>
                    <p><small>{success}</small></p>
                </Form.Text>
                <Form.Text className='text-danger'>
                    <p><small>{error}</small></p>
                </Form.Text>
            </Form>

        </div>
    );
};

export default Register;