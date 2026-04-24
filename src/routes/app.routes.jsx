import { ROUTES } from '../constants/routes';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ChangelogPage } from '../pages/ChangelogPage';

export const routes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: ROUTES.CHANGELOG,
    element: <ChangelogPage />,
  },
];
