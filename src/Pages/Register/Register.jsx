import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext, ModalContext } from '../../contexts/UserContext';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    // using for modal
    const { show, setShow } = useContext(ModalContext)
    const handleClose = () => setShow(false);

    //using for form manage
    const { createUserAuth, emailVarification } = useContext(AuthContext)
    const resigterformHandler = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       

        //signUp with email and password
        createUserAuth(email, password)
            .then(result => {
                const user = result.user
          
                //email varification
                emailVarification()
                    .then(() => {
                        alert('Please check you email and varify user email')
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => console.error(e))
           
    }

    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Sign Up your Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={resigterformHandler}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name='email'
                                    placeholder="email@..."
                                    required

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">

                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    required
                                />
                            </Form.Group>

                            <Button type='submit' onClick={handleClose} variant="primary" >
                                Sign Up
                            </Button>
                            <p>Already have an account? <Link to='/login'>Please Log In</Link> </p>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
};

export default Register;