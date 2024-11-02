// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Skills.css';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import developer from '../../assets/gifs/developer.gif';
import data from './skills.json';
import programmingIcon from '../../assets/svg/programming.svg';
import Loader from '../Reusable/Loader';

const Skills = () => {
  const [tools, setTools] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // console.log(data.tools[0].icon);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    setTools(data.tools);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className='skills w-100'>
      <Navbar />
      <div className='sections'>
        {/* // ? Introduction section */}
        <section className='intro container mx-auto row m-0 mt-5'>
          {/* // * Words */}
          <div className='col-lg-6 col-md-6 col-sm-12 words text-warning d-flex justify-content-center align-items-center'>
            <p data-aos='fade-right'>
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
          <div
            className='col-lg-6 col-md-6 col-sm-12 img d-flex justify-content-center align-items-center'
            data-aos='zoom-in'
          >
            <div className='holder w-100 h-100'>
              <img src={developer} alt='developer' className='w-100 h-100' />
            </div>
          </div>
        </section>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='mt-5 mb-2 pt-4'
          data-aos='fade-down'
          data-aos-duration='1500'
        >
          <path
            fill='#ffc107'
            fillOpacity='1'
            d='M0,224L1440,64L1440,0L0,0Z'
          ></path>
        </svg>

        {/* // ? Techs Section */}
        <section className='techs container mx-auto text-center'>
          <div
            className='waviy position-relative mb-5'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            <span style={{ '--i': 1 }}>W</span>
            <span style={{ '--i': 2 }}>H</span>
            <span style={{ '--i': 3 }}>A</span>
            <span style={{ '--i': 4 }}>T</span>
            <span className='mx-3' style={{ '--i': 5 }}>
              I
            </span>
            <span style={{ '--i': 6 }}>U</span>
            <span style={{ '--i': 7 }}>S</span>
            <span style={{ '--i': 8 }}>E</span>
            <span style={{ '--i': 9 }}>?</span>
          </div>

          {/* // ? Tools Section */}
          <div
            className='tools py-3 d-flex justify-content-evenly flex-wrap'
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            {tools.map((tool) => {
              return (
                <section className='d-flex flex-column tool' key={tool.title}>
                  <img src={tool.icon} alt='icon' className='icon-src mb-1' />
                  <h4 className='icon-title' style={{ color: tool.color }}>
                    {tool.title}
                  </h4>
                </section>
              );
            })}
          </div>
        </section>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='mt-4'
          data-aos='fade-down'
        >
          <path
            fill='#FFC107'
            fillOpacity='1'
            d='M0,224L1440,32L1440,0L0,0Z'
          ></path>
        </svg>

        {/* // ** Services Section */}
        <section className='services-sec container text-center w-100 pb-5'>
          <header
            className='bg-warning fs-1 w-50 mx-auto py-2 rounded-5 text-uppercase'
            data-aos='fade-down'
          >
            How Can i serve You !
          </header>
          <div className='services my-5 py-5 row mx-0'>
            <section
              className='info col-lg-6 col-md-6 col-sm-12 text-start'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <h3 className='text-secondary text-decoration-underline'>
                Services
              </h3>
              <ul className='text-warning my-4 p-0'>
                <li>Building Websites</li>
                <li>Building Web Applications</li>
                <li>Converting a Design to a Website</li>
                <li>and more ...</li>
              </ul>
            </section>
            <section className='img col-lg-6 col-md-6 col-sm-12'>
              <div
                className='holder'
                data-aos='flip-right'
                data-aos-duration='1500'
              >
                <img className='w-100 h-100' src={programmingIcon} alt='icon' />
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
