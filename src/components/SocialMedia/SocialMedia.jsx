import { Camera, Cat, SquareSigma } from 'lucide-react';
import { contact } from '@/data/contact';
import { Heading } from '@/components/Heading';
import styles from './SocialMedia.module.css';

// fix: add nova lib de icon
const SocialMedia = () => {
  const socials = [
    { name: 'LinkedIn', url: contact.socials.linkedIn, icon: SquareSigma },
    { name: 'GitHub', url: contact.socials.github, icon: Cat },
    { name: 'Instagram', url: contact.socials.instagram, icon: Camera },
  ];

  return (
    <section className="container">
      <Heading as="h2" className={styles.title}>
        Redes sociais
      </Heading>
      <p className={styles.description}>
        Acompanhe meu trabalho, meus projetos e um pouco do que venho fazendo.
      </p>

      <ul className={styles.list}>
        {socials.map(({ name, url, icon: Icon }) => (
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
