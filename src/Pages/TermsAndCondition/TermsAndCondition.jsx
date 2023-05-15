import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>There are some Terms And Condition for users in this site..</h3>
            <ul>
                <li>Rules will be Added in later</li>
                <li>Rules will be Added in later</li>
                <li>Rules will be Added in later</li>
                <li>Rules will be Added in later</li>
            </ul>
            <p>Go to : <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;