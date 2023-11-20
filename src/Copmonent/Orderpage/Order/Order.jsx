import React from 'react';
import Form from '../From/Form';
import Question from '../Question/Question';
import Footer from '../../Footer/Footer';

const Order = () => {
    return (
        <div>
          <div className='bg-cover bg-fixed hero-overlay opacity-60' style={{backgroundImage:'url(https://i.ibb.co/kMLKjRN/sunset-4924334-1920.jpg)'}}>
            <Form/>
          </div>
          <div>
            <Question/>
          </div>
          <div className='w-[97%] mt-3 mx-auto'>
            <Footer/>
          </div>
        </div>
    );
};

export default Order;