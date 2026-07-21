import { GraduationCap } from 'lucide-react';
import { ClockFading } from 'lucide-react';
import { courses } from '@/data/courses';
import { CourseList } from '@/components/CourseList';
import { Layout } from '@/components/Layout';
import styles from './CoursePage.module.css';

const CoursePage = () => {
  const totalCourses = courses.items.length;

  const totalHours = courses.items.reduce((total, course) => {
    return total + course.workload;
  }, 0);

  return (
    <Layout>
      <h1 className="title">{courses.title}</h1>
      <p className="subtitle">{courses.subtitle}</p>

      <ul className={styles.statistics}>
        <li className={styles.item}>
          <div>
            <GraduationCap />
            <h2>{totalCourses} cursos concluídos</h2>
          </div>

          <p>
            Aprendizado contínuo para evoluir como desenvolvedor e acompanhar a
            evolução das tecnologias.
          </p>
        </li>

        <li className={styles.item}>
          <div>
            <ClockFading />
            <h2>+{totalHours} horas de estudo.</h2>
          </div>

          <p>
            Tempo dedicado ao aprendizado teórico e prático, explorando
            fundamentos da engenharia de software, ferramentas e frameworks.
          </p>
        </li>
      </ul>

      <CourseList />
    </Layout>
  );
};

export default CoursePage;
