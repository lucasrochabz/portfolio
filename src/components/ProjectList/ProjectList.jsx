import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

const projects = [
  {
    id: 2,
    name: 'Bodega',
    text: 'Este projeto é uma simulação de e-commerce, desenvolvido com JavaScript e React no front-end, proporcionando uma experiência de compra online completa e eficiente.',
    tools: ['JavaScript', 'React', 'React Router'],
    image: 'bodega.png',
    site: 'https://bodega-dev.vercel.app/',
    repository: 'https://github.com/lucasrochabz/bodega',
  },
  {
    id: 3,
    name: 'Bodega API',
    text: 'Este projeto é a API de um e-commerce, desenvolvida com Node.js e Express, fornecendo uma comunicação eficiente entre o front-end e o banco de dados. A API gerencia operações essenciais, como autenticação de usuários, gerenciamento de produtos, controle de estoque e processamento de pedidos, garantindo uma experiência de compra fluida e segura.',
    tools: ['Node.js', 'Express', 'MySQL', 'Json Web Token', 'Bcrypt'],
    image: 'bodega-api.png',
    site: 'https://bodega-api-production.up.railway.app/api/docs/',
    repository: 'https://github.com/lucasrochabz/bodega-api',
  },
  {
    id: 1,
    name: 'Portfólio',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa nihil non facilis, voluptatibus atque dolor adipisci est architecto animi!',
    tools: ['JavaScript', 'React', 'HTML', 'CSS'],
    image: 'projeto.png',
    site: '#',
    repository: 'https://github.com/lucasrochabz/portfolio',
  },
  {
    id: 4,
    name: 'Nome do Projeto',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa nihil non facilis, voluptatibus atque dolor adipisci est architecto animi!',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: 'projeto.png',
    site: '#',
    repository: '#',
  },
];

export const ProjectList = () => {
  return (
    <>
      <section id="projetos" className={styles['project-list']}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </section>
    </>
  );
};
