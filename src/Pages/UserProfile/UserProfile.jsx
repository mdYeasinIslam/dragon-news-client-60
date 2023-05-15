import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/UserContext';
const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const nameRef = useRef(user.displayName)

    const profileHandler =(e) =>{
        e.prevenDefault()
        console.log(nameRef.current.value)
    }
    return (
        <div>
            <Form onSubmit={profileHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef}  defaultValue={user?.displayName} type="text" placeholder="Enter  name" />
                </Form.Group>
                 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Photo_Url</Form.Label>
                    <Form.Control defaultValue={user?.photoURL} type="text" placeholder="Photo_url" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserProfile;