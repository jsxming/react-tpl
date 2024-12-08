import {Link, Outlet} from 'react-router-dom';

function Demo() {
  return (
    <div>
      Demo
      <Link to={'child'}>demo child </Link>
      <Outlet />
    </div>
  );
}
export default Demo;
