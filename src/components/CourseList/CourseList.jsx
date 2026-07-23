import { courses } from '@/data/courses';
import { Heading } from '@/components/Heading';
import styles from './CourseList.module.css';

const CourseList = () => {
  return (
    <ul className={styles.list}>
      {courses.items.map((course) => (
        <li key={course.name} className={styles.item}>
          <Heading as="h3">{course.name}</Heading>
          <p>{course.institution}</p>
          <time>Data de conclusão: {course.completedAt}</time>
          <p>{course.workload} horas</p>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
