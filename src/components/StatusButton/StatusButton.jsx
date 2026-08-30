import { PATHS } from '@/constants/paths';
import { profile } from '@/data/profile';
import { Link } from 'react-router-dom';
import styles from './StatusButton.module.css';

const StatusButton = () => {
  return (
    <Link to={PATHS.CHANGELOG} className={styles.status}>
      {profile.version}
    </Link>
  );
};

export default StatusButton;
