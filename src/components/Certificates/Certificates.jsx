// import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Certificates.css';

const Certificates = () => {
  return (
    <div className='certificates overflow-hidden'>
      <Navbar />
      <section className='container certificates-sec'>
        <div className='card'>
          <div className='icon'>new</div>
          <strong> Instagram</strong>
          <div className='card__body'>
            Get UI elements that help you stand out.
          </div>
          <span>Follow us</span>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
