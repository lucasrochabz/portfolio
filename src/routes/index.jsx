import { HomePage } from '../pages/HomePage';
import { Changelog } from '../pages/Changelog';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/historico',
    element: <Changelog />,
  },
];

export default routes;
