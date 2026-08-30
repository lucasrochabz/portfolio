import { Link } from 'react-router-dom';
import { PATHS } from '@/constants/paths';
import { profile } from '@/data/profile';
import styles from './StatusButton.module.css';

const StatusButton = () => {
  return (
    <Link to={PATHS.CHANGELOG} className={styles.status}>
      {profile.version}
    </Link>
  );
};

export default StatusButton;
