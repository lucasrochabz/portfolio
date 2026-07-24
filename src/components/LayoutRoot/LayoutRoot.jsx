import { Outlet, ScrollRestoration } from 'react-router-dom';

const LayoutRoot = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default LayoutRoot;
