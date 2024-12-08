import {lazy} from 'react';
import {RouteObject} from 'react-router-dom';
import App from '@/App';
const DemoChild = lazy(() => import('@/page/demo/demoChild'));

type RouteItem = {
  name: string;
  children?: RouteItem[];
} & RouteObject;

const routes: RouteItem[] = [
  {
    path: '/',
    name: 'app',
    element: <App />,
  },
  {
    path: 'demo',
    name: 'demo',
    lazy: async () => ({
      Component: (await import('@/page/demo')).default,
    }),
    children: [
      {
        path: 'child',
        name: 'demo-child',
        element: <DemoChild />,
      },
    ],
  },
];

export default routes;
