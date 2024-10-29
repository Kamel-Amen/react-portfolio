// import React from 'react';
import './home.css';
import Navbar from '../Navbar/Navbar';
import myPhoto from '../../assets/pics/kamel.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='container'>
        <section className='home-sec row m-0 mt-5 justify-content-between'>
          {/* Image Section Code */}
          <div className='col-lg-4 col-md-5 col-sm-12 img-sec rounded-5'>
            <div className='w-100 h-100 overflow-hidden rounded-5'>
              {/* Image */}
              <img
                src={myPhoto}
                alt='myPhoto'
                className='w-100 h-100 rounded-5'
              />
            </div>
          </div>

          {/* Info Section Code */}
          <div className='col-lg-8 col-md-7 col-sm-12 info-sec text-white ps-5'>
            {/* Header */}
            <header>
              Welcome I&apos;m KAMEL
              <FontAwesomeIcon
                icon={faFaceLaughBeam}
                className='ms-2 icon-scale'
              />{' '}
            </header>
            {/* Animated positions text */}
            <h1 className='animated-info fw-lighter text-uppercase overflow-hidden position-relative'>
              <span>A</span>
              <div className='message fw-lighter d-inline-block overflow-hidden position-absolute'>
                <div className='word1'>Web Developer</div>
                <div className='word2'>UI Developer</div>
                <div className='word3'>Freelancer</div>
              </div>
            </h1>{' '}
            {/* Text Info */}
            <p className='text-secondary w-75 my-3'>
              Frontend & UI developer with professional skills used to deliver
              modern and responsive websites to clients. It is my passion to
              design and develop websites that suit clients&apos; ideas and
              requirements, I can work with a team or alone, and also can work
              under pressure.
            </p>
            {/* Button Download Resume */}
            <div className='box mt-4'>
              <div className='btn-two text-center position-relative'>
                <a
                  href='/src/assets/docs/Kamel Amen  Frontend & UI Developer.pdf'
                  className='text-white text-decoration-none fs-5 d-block position-absolute w-100 h-100'
                  download='Kamel Amen - Frontend & UI Developer'
                >
                  Download My Resume{' '}
                  <FontAwesomeIcon icon={faDownload} className='text-primary' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Wave */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-fixed bottom-0 w-100 wave'
      >
        <path
          fill='#0b64fd'
          fillOpacity='1'
          d='M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,138.7C672,181,768,235,864,266.7C960,299,1056,309,1152,288C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default Home;
