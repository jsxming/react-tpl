import {useState} from 'react';
import {Link} from 'react-router-dom';
import ReactSvg from '@/assets/react.svg?react';
import {useMount} from 'ahooks';
import {add} from './utils';
function App() {
  const [count] = useState(1);
  useMount(() => {
    add(1, 2);
    console.log('mount');
  });
  return (
    <>
      <h1>Vite+React {count}</h1>
      <ReactSvg />
      <Link to='demo'>go to demo</Link>
    </>
  );
}

export default App;
