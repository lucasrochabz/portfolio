export const PATHS = Object.freeze({
  HOME: '/',
  ABOUT: '/sobre',
  PROJECTS: {
    INDEX: '/projetos',
    DETAILS: '/projetos/:slug',

    detailsPath: (slug) => `/projetos/${slug}`,
  },
  COURSE: '/cursos',
  CONTACT: '/contato',
  CHANGELOG: '/historico',
});
