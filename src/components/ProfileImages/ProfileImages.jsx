import profile1 from '@/assets/images/profile-01.jpg';
import profile2 from '@/assets/images/profile-02.jpg';
import profile3 from '@/assets/images/profile-03.jpg';
import styles from './ProfileImages.module.css';

const ProfileImages = () => {
  return (
    <div className={styles.gallery}>
      <figure className={`${styles.figure} ${styles.featured}`}>
        <img src={profile1} alt="Lucas Rocha" />
      </figure>

      <figure className={styles.figure}>
        <img src={profile2} alt="Lucas Rocha" />
      </figure>

      <figure className={styles.figure}>
        <img src={profile3} alt="Lucas Rocha" />
      </figure>
    </div>
  );
};

export default ProfileImages;
