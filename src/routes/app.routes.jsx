import { PATHS } from '@/constants/paths';
import { LayoutRoot } from '@/layouts/LayoutRoot';
import { MainLayout } from '@/layouts/MainLayout';
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
      { path: PATHS.HOME, element: <HomePage /> },
      {
        element: <MainLayout />,
        children: [
          { path: PATHS.PROJECTS.INDEX, element: <ProjectsPage /> },
          { path: PATHS.PROJECTS.DETAILS, element: <ProjectPage /> },
          { path: PATHS.ABOUT, element: <AboutPage /> },
          { path: PATHS.COURSE, element: <CoursePage /> },
          { path: PATHS.CHANGELOG, element: <ChangelogPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
