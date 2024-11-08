import data from '../components/Projects/Projects.json';

const projectsCovers = [
  '/src/assets/projects/p1.png',
  '/src/assets/projects/p2.png',
  '/src/assets/projects/p3.png',
  '/src/assets/projects/p4.png',
  '/src/assets/projects/p5.png',
  '/src/assets/projects/p6.png',
];

export const useBuildProjectsArray = () => {
  const projects = data.projectsData;
  let holderArr = [];
  for (let i = 0; i < projects.length; i++) {
    holderArr.push({ ...projects[i], coverSrc: projectsCovers[i] });
  }
  return holderArr;
};

export const certificatesCovers = [
  '/public/docs/057000.jpg',
  '/public/docs/R-1560.png',
];
