import { ROUTES } from '../paths';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ChangelogPage } from '../pages/ChangelogPage';

export const routes = [
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.about,
    element: <AboutPage />,
  },
  {
    path: ROUTES.changelog,
    element: <ChangelogPage />,
  },
];
