// import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import contactIcon from '../../assets/svg/contact.svg';
import linkedIn from '../../assets/gifs/linkedin.gif';
import github from '../../assets/gifs/github.gif';
import youtube from '../../assets/gifs/youtube.gif';
import { useEffect, useState } from 'react';
import Loader from '../Reusable/Loader';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className='contact w-100 h-100'>
      <Navbar />
      <section className='contact-sec container pt-5 row mx-auto mt-5'>
        {/* //* Contact Info Holder */}
        <div
          className='col-md-6 col-sm-12 contact-info-sec d-flex justify-content-center align-items-center position-sticky'
          data-aos='zoom-in'
        >
          <div className='card position-relative d-flex flex-column justify-content-start text-center pt-5 text-white'>
            <h1
              className='text-capitalize'
              data-aos='fade-down'
              data-aos-duration='1500'
            >
              Want to reach out to me ?!
            </h1>
            <h5
              className='text-secondary'
              data-aos='fade-down'
              data-aos-duration='2000'
            >
              use the bellow links to get in touch !
            </h5>
            <ul
              className='d-flex w-100 justify-content-center align-items-center p-0 mt-3'
              data-aos='fade-down'
              data-aos-duration='2500'
            >
              <li className='d-flex justify-content-center align-items-center'>
                <a target='_blank' href='https://github.com/Kamel-Amen'>
                  <img
                    src={github}
                    alt='github'
                    className='rounded-3'
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className='d-flex justify-content-center align-items-center'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/kamel-amen/'
                >
                  <img
                    src={linkedIn}
                    alt='linkedin'
                    className='rounded-3'
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className='d-flex justify-content-center align-items-center'>
                <a target='_blank' href='https://www.youtube.com/@kamel_amen'>
                  <img
                    src={youtube}
                    alt='youtube'
                    className='rounded-3'
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* //* Contact Image Holder */}
        <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center contact-image-sec'>
          <div
            className='contact-img-holder w-100 h-100'
            data-aos='flip-left'
            data-aos-duration='2000'
          >
            <img src={contactIcon} alt='icon' className='w-100 h-100' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
