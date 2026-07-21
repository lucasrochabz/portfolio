import { courses } from '@/data/courses';
import styles from './CourseList.module.css';

const CourseList = () => {
  return (
    <ul className={styles.list}>
      {courses.items.map((course) => (
        <li key={course.name} className={styles.item}>
          <h3>{course.name}</h3>
          <p>{course.institution}</p>
          <p>Data de conclusão: {course.completedAt}</p>
          <p>{course.workload} horas</p>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
