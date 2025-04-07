import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

export const ProjectList = () => {
  const projects = [
    {
      name: 'Portfólio',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa nihil non facilis, voluptatibus atque dolor adipisci est architecto animi!',
      tools: ['JavaScript', 'React', 'Tailwind'],
      image: 'projeto.png',
    },
    {
      name: 'Bodega',
      text: 'Este projeto é uma simulação de e-commerce, desenvolvido com JavaScript e React no front-end, proporcionando uma experiência de compra online completa e eficiente.',
      tools: ['JavaScript', 'React', 'React Router'],
      image: 'bodega.png',
    },
    {
      name: 'Bodega API',
      text: 'Este projeto é a API de um e-commerce, desenvolvida com Node.js e Express, fornecendo uma comunicação eficiente entre o front-end e o banco de dados. A API gerencia operações essenciais, como autenticação de usuários, gerenciamento de produtos, controle de estoque e processamento de pedidos, garantindo uma experiência de compra fluida e segura.',
      tools: ['Node.js', 'Express', 'Json Web Token', 'Bcrypt', 'MySQL'],
      image: 'bodega-api.png',
    },
    {
      name: 'Nome do Projeto',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa nihil non facilis, voluptatibus atque dolor adipisci est architecto animi!',
      tools: ['HTML', 'CSS', 'JavaScript'],
      image: 'projeto.png',
    },
  ];

  return (
    <>
      <section id="projetos" className={styles['project-list']}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
};
