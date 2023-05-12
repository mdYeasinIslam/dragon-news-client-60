import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import RightSlider from '../RightSlider/RightSlider';
import { AuthContext } from '../../../contexts/UserContext';

const RightSideNav = () => {
    const { user, signUpWithGoogle } = useContext(AuthContext)

    //sign up with google
    const googleSignInHandler = () => {
        signUpWithGoogle()
            .then(result => {
                const user = result.user;


            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            <ButtonGroup vertical className='my-3'>
                {
                    user?.email ? <>
                    </>
                        :
                        <>  <Button onClick={googleSignInHandler} variant="outline-primary">Log In with Google</Button>
                            <Button variant="outline-dark">Log In With Github</Button></>
                }

            </ButtonGroup>
            <h4>Find on us</h4>
            <div>
                <ButtonGroup vertical className='w-100 '>
                    <Button variant="outline-secondary">Facebook</Button>
                    <Button variant="outline-secondary">Whatsup</Button>
                    <Button variant="outline-secondary">Twitter</Button>
                    <Button variant="outline-secondary">LinkeIn</Button>
                </ButtonGroup>
            </div>
            <div>
                <RightSlider />
            </div>
        </div>
    );
};

export default RightSideNav;