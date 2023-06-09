import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext, ModalContext } from '../../contexts/UserContext';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
 
const LogIn = () => {
    // using for modal
    const { show, setShow } = useContext(ModalContext)
    const handleClose = () => setShow(false);
    
    //sign in form handler
    const { signInAuth,setLoader } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/'
    
    const signInformHandler = (e) => {
        e.preventDefault()
      
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signInAuth(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                if(user.emailVerified){
                    navigate(from, { replace: true })
                    toast.success("Email is varified and successfully loged IN")
                }
                else{
                    toast.error("Email is not varified")
                    navigate('/')
                }

            })
            .catch(e => console.error(e))
            .finally(()=>setLoader(false))
    }
    return (
        <div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={signInformHandler}>
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
                                Sign In
                            </Button>
                            <div>
                                <div>Dont have an account? <Link to='/register'>Please Create An Account</Link> </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default LogIn;