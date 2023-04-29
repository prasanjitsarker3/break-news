import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center'>
            <h1 className='py-3 font-serif text-2xl'>Generate Terms & Conditions for websites</h1>
            <p className='text-lg'>Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully customized to your website.

                You can also generate your Terms & Conditions for website templates like:</p>
            <Link to='/register'>Back Register</Link>
        </div>
    );
};

export default Terms;