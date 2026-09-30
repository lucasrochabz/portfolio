import { Camera, Cat, SquareSigma } from 'lucide-react';
import { contact } from '@/data/contact';
import { Heading } from '../Heading';
import styles from './SocialMedia.module.css';

// fix: add nova lib de icon
const SocialMedia = () => {
  const socials = [
    { name: 'LinkedIn', icon: SquareSigma, url: contact.socials.linkedIn },
    { name: 'GitHub', icon: Cat, url: contact.socials.github },
    { name: 'Instagram', icon: Camera, url: contact.socials.instagram },
  ];

  return (
    <section className={`container ${styles.section}`}>
      <Heading as="h2" className={styles.title}>
        Redes sociais
      </Heading>
      <p className={styles.description}>
        Acompanhe meu trabalho, meus projetos e um pouco do que venho fazendo.
      </p>

      <ul className={styles.list}>
        {socials.map(({ name, icon: Icon, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Icon size={32} />

              <div>
                <h3 className={styles.name}>{name}</h3>
                <p>@lucasrochabz</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialMedia;
