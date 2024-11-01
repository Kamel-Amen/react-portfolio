// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar';
import './Skills.css';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import developer from '../../assets/gifs/developer.gif';
// import { useEffect } from 'react';
import data from './skills.json';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // console.log(data.tools[0].icon);
    setTools(data.tools);
  }, []);

  return (
    <div className='skills w-100'>
      <Navbar />
      <div className='sections'>
        {/* // ? Introduction section */}
        <section className='intro container mx-auto row m-0 mt-5'>
          {/* // * Words */}
          <div className='col-lg-6 col-md-6 col-sm-12 words text-warning d-flex justify-content-center align-items-center'>
            <p>
              {' '}
              Wanna convert your idea into special, modern, responsive, and
              professional website or web app. Let&apos;s meet and I will pay
              for the coffee{' '}
              <FontAwesomeIcon
                icon={faMugHot}
                className='mug-icon text-light fs-1 ms-2'
              />
            </p>
          </div>

          {/* // * Img Cover */}
          <div className='col-lg-6 col-md-6 col-sm-12 img d-flex justify-content-center align-items-center'>
            <div className='holder w-100 h-100'>
              <img src={developer} alt='developer' className='w-100 h-100' />
            </div>
          </div>
        </section>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='mt-5 mb-2 pt-4'
        >
          <path
            fill='#ffc107'
            fillOpacity='1'
            d='M0,224L1440,64L1440,0L0,0Z'
          ></path>
        </svg>

        {/* // ? Techs Section */}
        <section className='techs container mx-auto text-center'>
          <div className='waviy position-relative mb-5'>
            <span style={{ '--i': 1 }}>T</span>
            <span style={{ '--i': 2 }}>E</span>
            <span style={{ '--i': 3 }}>C</span>
            <span style={{ '--i': 4 }}>H</span>
            <span style={{ '--i': 5 }}>N</span>
            <span style={{ '--i': 6 }}>O</span>
            <span style={{ '--i': 7 }}>L</span>
            <span style={{ '--i': 8 }}>O</span>
            <span style={{ '--i': 9 }}>G</span>
            <span style={{ '--i': 10 }}>I</span>
            <span style={{ '--i': 11 }}>E</span>
            <span style={{ '--i': 12 }}>S</span>
          </div>

          {/* // ? Tools Section */}
          <div className='tools w-100 bg-danger pb-5'>
            <section className='col-1'>
              <img src={data.tools[0].src} alt='icon' className='tool' />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
