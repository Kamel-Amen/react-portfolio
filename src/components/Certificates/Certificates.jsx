// import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Certificates.css';
import icon from '../../assets/gifs/certificate.gif';
import previewIcon from '../../assets/gifs/preview.gif';
import schema from './certificates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import Loader from '../Reusable/Loader';
import itSharksCertificate from '../../assets/docs/R-1560.png';
import neruroCertificate from '../../assets/docs/057000.jpg';

const useBuildCertificatesArr = () => {
  const certificatesArr = schema.certificates;
  const certificatesImages = [itSharksCertificate, neruroCertificate];
  let holderArr = [];
  for (let i = 0; i < certificatesArr.length; i++) {
    holderArr.push({
      ...certificatesArr[i],
      src: certificatesImages[i],
    });
  }
  return holderArr;
};

const Certificates = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [certificates, setCertificates] = useState(useBuildCertificatesArr());

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className='certificates overflow-hidden w-100 h-100'>
      <Navbar />
      <section className='container certificates-sec d-flex mt-5 justify-content-evenly'>
        {certificates.map((doc) => (
          <div
            className='card text-center pt-4 px-3 rounded-4 position-relative overflow-hidden d-flex justify-content-center align-items-center flex-column'
            key={doc.id}
          >
            <div className='icon'>
              <img src={icon} alt='certificate' />
            </div>
            <p className='d-block'>{doc.title}</p>
            <hr className='text-secondary w-100' />
            <div className='card__body d-flex flex-column'>
              <ul className='d-flex list-style-none justify-content-center p-1'>
                {doc.subjects.map((sub) => (
                  <li key={doc.code}>
                    <img src={sub} alt={sub} width={40} height={40} />
                  </li>
                ))}
              </ul>
              <h3>
                {doc.institute}
                <FontAwesomeIcon
                  icon={faBuilding}
                  className='text-primary ms-2'
                />{' '}
              </h3>
              <h5>{doc.code}</h5>
            </div>
            <span className='position-absolute w-100 h-100 d-flex justify-content-center align-items-center top-100 fw-bold'>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target={`#${doc.code}`}
              >
                <img
                  src={previewIcon}
                  alt='previewIcon'
                  width={35}
                  height={35}
                />
              </button>

              <div
                className='modal fade'
                id={doc.code}
                tabIndex='-1'
                aria-labelledby={`${doc.code}Label`}
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1
                        className='modal-title fs-3 text-primary'
                        id={`${doc.code}Label`}
                      >
                        {doc.title}
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      <img
                        src={doc.src}
                        alt={doc.title}
                        className='w-100 h-100'
                      />
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certificates;
