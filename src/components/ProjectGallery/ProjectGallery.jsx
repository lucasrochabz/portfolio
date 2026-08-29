import PropTypes from 'prop-types';
import { getImage } from '@/utils/getImage';
import styles from './ProjectGallery.module.css';

// fix: corrigir esse componente
const ProjectGallery = ({ images, onSelectedImage }) => {
  return (
    <>
      {images.map((img) => (
        <li key={img}>
          <button type="button" onClick={() => onSelectedImage(img)}>
            <img src={getImage(img)} alt="" className={styles.item} />
          </button>
        </li>
      ))}
    </>
  );
};

ProjectGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectedImage: PropTypes.func.isRequired,
};

export default ProjectGallery;
