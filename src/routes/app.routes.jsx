import { ROUTES } from '@/constants/routes';
import { LayoutRoot } from '@/components/LayoutRoot';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { AboutPage } from '@/pages/AboutPage';
import { CoursePage } from '@/pages/CoursePage';
import { ChangelogPage } from '@/pages/ChangelogPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routes = [
  {
    element: <LayoutRoot />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.PROJECTS.INDEX, element: <ProjectsPage /> },
      { path: ROUTES.PROJECTS.DETAILS, element: <ProjectPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.COURSE, element: <CoursePage /> },
      { path: ROUTES.CHANGELOG, element: <ChangelogPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
