export const projects = {
  title: 'Projetos',
  subtitle: 'Transformando ideias em projetos reais',
  items: [
    {
      id: 1,
      name: 'Bodega',
      featured: true,
      slug: 'bodega',
      image: 'bodega.png',
      tools: ['JavaScript', 'React', 'React Router'],
      summary:
        'Este projeto é uma simulação de e-commerce, desenvolvido com JavaScript e React no front-end, proporcionando uma experiência de compra online completa e eficiente.',
      links: {
        demo: 'https://bodegashop.vercel.app',
        repository: 'https://github.com/lucasrochabz/bodega',
      },
    },
    {
      id: 2,
      name: 'Bodega API',
      featured: true,
      slug: 'bodega-api',
      image: 'bodega-api.png',
      tools: ['Node.js', 'Express', 'MySQL', 'Json Web Token', 'Bcrypt'],
      summary:
        'API de e-commerce em Node.js e Express que conecta o front-end ao banco de dados, com funcionalidades de autenticação, gerenciamento de produtos, estoque e pedidos.',
      links: {
        demo: 'https://bodega-api-production.up.railway.app/api/docs',
        repository: 'https://github.com/lucasrochabz/bodega-api',
      },
    },
    {
      id: 3,
      name: 'To-do List',
      featured: true,
      slug: 'to-do-list',
      image: 'to-do-list.png',
      tools: ['TypeScript', 'React', 'React Router'],
      summary:
        'Aplicação de lista de tarefas desenvolvida com JavaScript e React em arquitetura SPA, permitindo criar, editar, concluir, restaurar e excluir tarefas, com filtros, busca e persistência de dados no localStorage.',
      links: {
        demo: 'https://todolistlucas.vercel.app',
        repository: 'https://github.com/lucasrochabz/to-do-list',
      },
    },
    {
      id: 4,
      name: 'News Scraper',
      featured: false,
      slug: 'news-scraper',
      image: 'news-scraper.png',
      tools: ['JavaScript', 'Python', 'BeautifulSoup'],
      summary:
        'Aplicação que extrai e exibe manchetes de notícias usando Python com BeautifulSoup para web scraping e JavaScript para renderização dinâmica no navegador.',
      links: {
        demo: 'https://lucasrochabz.github.io/news-scraper',
        repository: 'https://github.com/lucasrochabz/news-scraper',
      },
    },
    {
      id: 5,
      name: 'Portfólio',
      featured: false,
      slug: 'portfolio',
      image: 'portfolio.png',
      tools: ['JavaScript', 'React', 'React Router'],
      summary:
        'Este projeto é meu portfólio como desenvolvedor, reunindo minha trajetória, habilidades e principais projetos em um só lugar, representando minha evolução na programação.',
      links: {
        demo: 'https://lucasrochabz.vercel.app',
        repository: 'https://github.com/lucasrochabz/portfolio',
      },
    },
  ],
};
