import {useState} from 'react';
import {Link} from 'react-router-dom';
import ReactSvg from '@/assets/react.svg?react';
function App() {
  const [count] = useState(1);

  return (
    <>
      <h1>Vite+React {count}</h1>
      <ReactSvg />
      <Link to='demo'>go to demo</Link>
    </>
  );
}

export default App;
