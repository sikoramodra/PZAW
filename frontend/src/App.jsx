import './App.css';
import { useEffect } from 'react';
import Task03 from './components/Task03/Task03.jsx';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return <Task03 />;
}

export default App;
