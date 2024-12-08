import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {Routes, Route, HashRouter} from 'react-router';
import Demo from '@/page/demo';
import './style/reset.less';
import './style/themes/index.less';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='demo' element={<Demo />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
