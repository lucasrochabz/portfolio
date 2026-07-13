import { ROUTES } from '@/constants/routes';
import { HomePage } from '@/pages/HomePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ChangelogPage } from '@/pages/ChangelogPage';

export const routes = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.PROJECTS, element: <ProjectsPage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
  { path: ROUTES.CHANGELOG, element: <ChangelogPage /> },
];
