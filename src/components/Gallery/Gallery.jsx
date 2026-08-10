import lucas1 from '../../assets/images/lucas1.jpg';
import lucas2 from '../../assets/images/lucas2.jpg';
import lucas3 from '../../assets/images/lucas3.jpg';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <figure className={`${styles.figure} ${styles.featured}`}>
        <img src={lucas1} alt="Lucas Rocha" />
      </figure>

      <figure className={styles.figure}>
        <img src={lucas2} alt="Lucas Rocha" />
      </figure>

      <figure className={styles.figure}>
        <img src={lucas3} alt="Lucas Rocha" />
      </figure>
    </div>
  );
};

export default Gallery;
