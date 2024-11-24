import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './style/reset.less';
import './index.css';
import App from './App.tsx';
import {Routes, Route} from 'react-router';
import {BrowserRouter} from 'react-router';
import Demo from '@/page/demo';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path='demo' element={<Demo />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
