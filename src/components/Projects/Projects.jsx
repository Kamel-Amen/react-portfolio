import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css';
import data from './Projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(data.projectsData);
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
  const [projects, setProjects] = useState([]);

  const handleFilterEvent = (selectedGenre) => {
    if (selectedFilters.includes(selectedGenre)) {
      let filters = selectedFilters.filter((el) => el !== selectedGenre);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedGenre]);
    }
  };

  useEffect(() => {
    setProjects(data.projectsData);
    filterItems();
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

  return (
    <div className='projects-sec'>
      <Navbar />
      <section className='projects container'>
        {/* // ? Filter Section */}
        <div className='filter-sec mt-2 d-flex justify-content-center rounded-5 overflow-hidden position-fixed start-0 w-100'>
          <div className='filter-holder d-flex justify-content-center bg-light rounded-5 px-3'>
            {filters.map((genre, idx) => (
              <button
                onClick={() => handleFilterEvent(genre.category)}
                className={`button btn ${
                  selectedFilters?.includes(genre.category) ? 'active' : ''
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
                  />
                </div>
              </section>

              {/* Info section */}
              <section className='col-md-6 col-sm-12 proj-info'>
                <h1 className='text-danger'>{proj.title}</h1>
                <h4 className='text-light'>
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
                <h5 className='w-75 my-2 text-secondary'>{proj.desc}</h5>
                <ul className='p-0 d-flex my-3'>
                  {proj.tools.map((tool, idx) => (
                    <li key={idx}>
                      <img src={tool} alt={tool} className='w-100 h-100' />
                    </li>
                  ))}
                </ul>
                <div className='buttons d-flex mt-4'>
                  <a
                    id='btn'
                    className='position-relative border-0 p-0 mx-2'
                    href={proj.youtube}
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
                  >
                    <span className='shadow position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='edge position-absolute top-0 start-0 w-100 h-100 rounded-3'></span>
                    <span className='front text d-block position-relative text-white'>
                      {' '}
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </a>
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
