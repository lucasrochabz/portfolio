export const contact = {
  email: 'lucasbezerrar@gmail.com',
  subject: 'Contato pelo portfólio',

  get mailto() {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}`;
  },

  socials: {
    linkedIn: 'https://www.linkedin.com/in/lucasrochabz',
    github: 'https://github.com/lucasrochabz',
    instagram: 'https://www.instagram.com/lucasrochabz',
  },
};
