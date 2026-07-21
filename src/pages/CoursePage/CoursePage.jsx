import { courses } from '@/data/courses';
import { CourseList } from '@/components/CourseList';
import { Layout } from '@/components/Layout';

const CoursePage = () => {
  return (
    <Layout>
      <h1 className="title">{courses.title}</h1>
      <p className="subtitle">{courses.subtitle}</p>

      <CourseList />
    </Layout>
  );
};

export default CoursePage;
