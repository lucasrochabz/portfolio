import { ProjectCard } from '../ProjectCard';
import styles from './ProjectList.module.css';

const projects = [
  {
    id: 1,
    name: 'Bodega',
    description:
      'Este projeto é uma simulação de e-commerce, desenvolvido com JavaScript e React no front-end, proporcionando uma experiência de compra online completa e eficiente.',
    tools: ['JavaScript', 'React', 'React Router'],
    image: 'projeto-bodega.png',
    site: 'https://bodega-dev.vercel.app/',
    repository: 'https://github.com/lucasrochabz/bodega',
  },
  {
    id: 2,
    name: 'Bodega API',
    description:
      'API de e-commerce em Node.js e Express que conecta o front-end ao banco de dados, com funcionalidades de autenticação, gerenciamento de produtos, estoque e pedidos.',
    tools: ['Node.js', 'Express', 'MySQL', 'Json Web Token', 'Bcrypt'],
    image: 'projeto-bodega-api.png',
    site: 'https://bodega-api-production.up.railway.app/api/docs/',
    repository: 'https://github.com/lucasrochabz/bodega-api',
  },
  {
    id: 3,
    name: 'News Scraper',
    description:
      'Aplicação que extrai e exibe manchetes de notícias usando Python com BeautifulSoup para web scraping e JavaScript para renderização dinâmica no navegador.',
    tools: ['JavaScript', 'Python', 'BeautifulSoup'],
    image: 'projeto-news-scraper.png',
    site: 'https://lucasrochabz.github.io/news-scraper/',
    repository: 'https://github.com/lucasrochabz/news-scraper',
  },
  {
    id: 4,
    name: 'Portfólio',
    description:
      'Este projeto é meu portfólio como desenvolvedor, reunindo minha trajetória, habilidades e principais projetos em um só lugar, representando minha evolução na programação.',
    tools: ['JavaScript', 'React', 'React Router'],
    image: 'projeto-portfolio.png',
    site: 'https://portfolio-lucasrochabz.vercel.app/',
    repository: 'https://github.com/lucasrochabz/portfolio',
  },
];

const ProjectList = () => {
  return (
    <>
      <section id="projetos" className={styles.projectList}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectList;
