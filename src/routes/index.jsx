import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ChangelogPage } from '../pages/ChangelogPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sobre',
    element: <AboutPage />,
  },
  {
    path: '/historico',
    element: <ChangelogPage />,
  },
];

export default routes;
