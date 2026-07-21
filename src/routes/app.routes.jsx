import { ROUTES } from '@/constants/routes';
import { LayoutRoot } from '@/components/LayoutRoot';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { CoursePage } from '@/pages/CoursePage';
import { ChangelogPage } from '@/pages/ChangelogPage';

// fix: add página de rota não encontrada
export const routes = [
  {
    element: <LayoutRoot />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.COURSE, element: <CoursePage /> },
      { path: ROUTES.CHANGELOG, element: <ChangelogPage /> },
    ],
  },
];
