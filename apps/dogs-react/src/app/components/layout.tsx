import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Hello dogs</h1>
      <nav>
        <Link to={'/dogs'}>All dogs</Link>
      </nav>
      <Outlet />
    </>
  );
};
