import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext, ModalContext } from '../../contexts/UserContext';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import TermsAndCondition from '../TermsAndCondition/TermsAndCondition';

const Register = () => {
    // using for modal
    const { show, setShow } = useContext(ModalContext)
    const handleClose = () => setShow(false);

    //using for form manage
    const [activate, setActivate] = useState(false)
    const navigate = useNavigate()
    const { createUserAuth, emailVarification, updateUserProfile } = useContext(AuthContext)
    const resigterformHandler = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const photo_url = form.photo_url.value
        const email = form.email.value;
        const password = form.password.value;
      
        //signUp with email and password
        createUserAuth(email, password)
            .then(result => {
                const user = result.user
                navigate('/')
                //email varification 
                varifyEmail()
                // profile update 
                userProfileHandler(name, photo_url)

            })
            .catch(e => console.error(e))
    }
    const userProfileHandler = (name, photo) => {
        const profile = { displayName: name, photoURL: photo }
        updateUserProfile(profile)
    }
    const varifyEmail = () => {
        emailVarification()
            .then(() => {
                alert('Please check you email and varify user email')
            })
            .catch(e => console.error(e))
    }
    const checkBoxHandler = (e) => {
        // setActivate(!activate) first way
        setActivate(e.target.checked)  //second way
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
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name='photo_url'
                                    placeholder="Your photo_url"
                                    required
                                />
                            </Form.Group>
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
                            <Form.Group onClick={checkBoxHandler} className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    name='checkbox'
                                    label={<>accept <Link to="/terms"> Tarms And Condition</Link></>} />
                            </Form.Group>
                            <Button type='submit' onClick={handleClose} variant="primary" disabled={!activate} >
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