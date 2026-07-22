import { GraduationCap } from 'lucide-react';
import { ClockFading } from 'lucide-react';
import { courses } from '@/data/courses';
import { CourseList } from '@/components/CourseList';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import styles from './CoursePage.module.css';

const CoursePage = () => {
  const totalCourses = courses.items.length;

  const totalHours = courses.items.reduce((total, course) => {
    return total + course.workload;
  }, 0);

  return (
    <Layout>
      <Heading variant="title">{courses.title}</Heading>
      <p className="subtitle">{courses.subtitle}</p>

      <ul className={styles.statistics}>
        <li className={styles.card}>
          <div>
            <GraduationCap />
            <Heading as="h2">{totalCourses} cursos concluídos.</Heading>
          </div>

          <p>
            Aprendizado contínuo para evoluir como desenvolvedor e acompanhar a
            evolução das tecnologias.
          </p>
        </li>

        <li className={styles.card}>
          <div>
            <ClockFading />
            <Heading as="h2">+{totalHours} horas de estudo.</Heading>
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
