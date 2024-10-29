// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar';
import './Skills.css';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import developer from '../../assets/gifs/developer.gif';

const Skills = () => {
  return (
    <div className='skills w-100 h-100'>
      <Navbar />
      <div className='container'>
        {/* // ? Introduction section */}
        <section className='intro row m-0'>
          {/* // * Words */}
          <div className='col-lg-6 col-md-6 col-sm-12 words'>
            Wanna convert your idea into special, modern, responsive, and
            professional website or web app. Let&apos;s meet and I will pay for
            the coffee !{' '}
            <FontAwesomeIcon
              icon={faMugHot}
              className='mug-icon text-warning'
            />
          </div>

          {/* // * Img Cover */}
          <div className='col-lg-6 col-md-6 col-sm-12 img d-flex justify-content-center align-items-center'>
            <div className='holder'>
              <img src={developer} alt='developer' className='w-100 h-100' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
