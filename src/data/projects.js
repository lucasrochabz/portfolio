export const projects = {
  title: 'Projetos',
  subtitle: 'Transformando ideias em projetos reais',
  items: [
    {
      id: 1,
      name: 'Bodega',
      slug: 'bodega',
      image: 'bodega.png',
      tools: ['JavaScript', 'React', 'React Router'],
      summary:
        'Este projeto é uma simulação de e-commerce, desenvolvido com JavaScript e React no front-end, proporcionando uma experiência de compra online completa e eficiente.',
      links: [
        {
          name: 'Site',
          url: 'https://bodega-dev.vercel.app',
          type: 'demo',
        },
        {
          name: 'Repositório',
          url: 'https://github.com/lucasrochabz/bodega',
          type: 'repo',
        },
      ],
    },
    {
      id: 2,
      name: 'Bodega API',
      slug: 'bodega-api',
      image: 'bodega-api.png',
      tools: ['Node.js', 'Express', 'MySQL', 'Json Web Token', 'Bcrypt'],
      summary:
        'API de e-commerce em Node.js e Express que conecta o front-end ao banco de dados, com funcionalidades de autenticação, gerenciamento de produtos, estoque e pedidos.',
      links: [
        {
          name: 'Site',
          url: 'https://bodega-api-production.up.railway.app/api/docs',
          type: 'demo',
        },
        {
          name: 'Repositório',
          url: 'https://github.com/lucasrochabz/bodega-api',
          type: 'repo',
        },
      ],
    },
    {
      id: 3,
      name: 'To-do List',
      slug: 'to-do-list',
      image: 'to-do-list.png',
      tools: ['TypeScript', 'React', 'React Router'],
      summary:
        'Aplicação de lista de tarefas desenvolvida com JavaScript e React em arquitetura SPA, permitindo criar, editar, concluir, restaurar e excluir tarefas, com filtros, busca e persistência de dados no localStorage.',
      links: [
        {
          name: 'Site',
          url: 'https://todolistlucas.vercel.app',
          type: 'demo',
        },
        {
          name: 'Repositório',
          url: 'https://github.com/lucasrochabz/to-do-list',
          type: 'repo',
        },
      ],
    },
    {
      id: 4,
      name: 'News Scraper',
      slug: 'news-scraper',
      image: 'news-scraper.png',
      tools: ['JavaScript', 'Python', 'BeautifulSoup'],
      summary:
        'Aplicação que extrai e exibe manchetes de notícias usando Python com BeautifulSoup para web scraping e JavaScript para renderização dinâmica no navegador.',
      links: [
        {
          name: 'Site',
          url: 'https://lucasrochabz.github.io/news-scraper',
          type: 'demo',
        },
        {
          name: 'Repositório',
          url: 'https://github.com/lucasrochabz/news-scraper',
          type: 'repo',
        },
      ],
    },
    {
      id: 5,
      name: 'Portfólio',
      slug: 'portfolio',
      image: 'portfolio.png',
      tools: ['JavaScript', 'React', 'React Router'],
      summary:
        'Este projeto é meu portfólio como desenvolvedor, reunindo minha trajetória, habilidades e principais projetos em um só lugar, representando minha evolução na programação.',
      links: [
        {
          name: 'Site',
          url: 'https://lucasrochabz.vercel.app',
          type: 'demo',
        },
        {
          name: 'Repositório',
          url: 'https://github.com/lucasrochabz/portfolio',
          type: 'repo',
        },
      ],
    },
  ],
};
