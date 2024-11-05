import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faLaptopCode,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import data from './Projects.json';
import { toast } from 'react-toastify';
import Loader from '../Reusable/Loader';

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(data.projectsData);
  const [projects, setProjects] = useState([]);
  let filters = [
    {
      category: 'Vanilla JS',
      logo: 'https://img.icons8.com/color/100/javascript--v1.png',
    },
    {
      category: 'React JS',
      logo: 'https://img.icons8.com/officel/80/react.png',
    },
  ];

  // * Loader Code
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFilterEvent = (selectedGenre) => {
    if (selectedFilters.includes(selectedGenre)) {
      let filters = selectedFilters.filter((el) => el !== selectedGenre);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedGenre]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    setProjects(data.projectsData);
    filterItems();
    toast('Select one or more project type to display from filter menu !');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempProjects = selectedFilters.map((selectedGenre) => {
        let temp = projects.filter((proj) => proj.genre === selectedGenre);
        return temp;
      });
      setFilteredProjects(tempProjects.flat());
    } else {
      setFilteredProjects([...projects]);
    }
  };

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className='projects-sec'>
      <Navbar />
      <section className='projects container overflow-hidden'>
        {/* // ? Filter Section */}
        <div
          className='filter-sec mt-2 d-flex justify-content-center rounded-5 overflow-hidden position-fixed start-0 w-100'
          data-aos='fade-down'
          data-aos-duration='1500'
        >
          <div className='filter-holder d-flex justify-content-center bg-light rounded-5 px-3'>
            {filters.map((genre, idx) => (
              <button
                onClick={() => handleFilterEvent(genre.category)}
                className={`button btn ${
                  selectedFilters?.includes(genre.category)
                    ? 'active-filter-genre'
                    : ''
                }`}
                key={`filters-${idx}`}
              >
                <img src={genre.logo} alt={genre.category} className='logo' />
              </button>
            ))}
          </div>
        </div>

        {/* // ? Projects Area Section */}
        <div className='projects-area'>
          {filteredProjects.map((proj, idx) => (
            <div className='proj row m-0' key={`proj-${idx}`}>
              {/* Project Cover Image */}
              <section className='proj-img col-md-6 col-sm-12'>
                <div className='project-cover-holder w-100 h-100 rounded-2 overflow-hidden'>
                  <img
                    src={proj.coverSrc}
                    alt={proj.title}
                    className='w-100 h-100 rounded-2'
                    data-aos='flip-right'
                    data-aos-duration='2000'
                  />
                </div>
              </section>

              {/* Info section */}
              <section className='col-md-6 col-sm-12 proj-info'>
                <h1 className='text-danger' data-aos='fade-down'>
                  {proj.title}
                </h1>
                <h4
                  className='text-light'
                  data-aos='fade-down'
                  data-aos-duration='1750'
                >
                  {proj.privateType ? (
                    <p>
                      Closed Source Project{' '}
                      <FontAwesomeIcon
                        icon={faLock}
                        className='text-danger ms-2'
                      />
                    </p>
                  ) : (
                    <p>
                      Open Source Project
                      <FontAwesomeIcon
                        icon={faLockOpen}
                        className='text-success ms-2'
                      />
                    </p>
                  )}
                </h4>
                <h5
                  className='w-75 my-2 text-secondary'
                  data-aos='fade-left'
                  data-aos-duration='2500'
                >
                  {proj.desc}
                </h5>

                {/* // ? Start List of tools */}
                <ul
                  className='p-0 d-flex my-3'
                  data-aos='zoom-out'
                  data-aos-duration='1500'
                >
                  {proj.tools.map((tool, idx) => (
                    <li key={idx}>
                      <img src={tool} alt={tool} className='w-100 h-100' />
                    </li>
                  ))}
                </ul>

                {/* // ? Start Options Buttons */}
                <div
                  className='buttons d-flex mt-4'
                  data-aos='zoom-in'
                  data-aos-duration='2000'
                >
                  <a
                    id='btn'
                    className='position-relative border-0 p-0 me-2'
                    href={proj.youtube}
                    target='_blank'
                  >
                    <span className='shadow position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='edge position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='front text d-block position-relative text-white'>
                      {' '}
                      <FontAwesomeIcon icon={faYoutube} />
                    </span>
                  </a>
                  <a
                    id='btn'
                    className='position-relative border-0 p-0 mx-2'
                    href={proj.preview}
                    target='_blank'
                  >
                    <span className='shadow position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='edge position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='front text d-block position-relative text-white'>
                      {' '}
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </a>
                  {proj.privateType ? (
                    ''
                  ) : (
                    <a
                      id='btn'
                      className='position-relative border-0 p-0 mx-2'
                      href={proj.sourceCode}
                      target='_blank'
                    >
                      <span className='shadow position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                      <span className='edge position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                      <span className='front text d-block position-relative text-white'>
                        {' '}
                        <FontAwesomeIcon icon={faLaptopCode} />
                      </span>
                    </a>
                  )}
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
