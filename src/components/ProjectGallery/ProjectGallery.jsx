import PropTypes from 'prop-types';
import styles from './ProjectGallery.module.css';

const ProjectGallery = ({ images, setSelectedImage }) => {
  return (
    <>
      {images.map((img, index) => (
        <li key={index}>
          <button type="button" onClick={() => setSelectedImage(img)}>
            <img
              src={`/src/assets/projects/${img}`}
              alt=""
              className={styles.item}
            />
          </button>
        </li>
      ))}
    </>
  );
};

ProjectGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedImage: PropTypes.func.isRequired,
};

export default ProjectGallery;
