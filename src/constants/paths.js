export const PATHS = Object.freeze({
  HOME: '/',
  ABOUT: '/sobre',
  COURSE: '/cursos',
  CONTACT: '/contato',
  CHANGELOG: '/historico',
  PROJECTS: {
    INDEX: '/projetos',
    DETAILS: '/projetos/:slug',

    detailsPath: (slug) => `/projetos/${slug}`,
  },
});
