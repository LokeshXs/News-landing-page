import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {

    const calcInnerWidth = () => {
      setPageWidth(window.innerWidth);
    };

    const resizeEventListener = window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', resizeEventListener);
  }, []);

  return (
    <>
      <Header pageWidth={pageWidth} />
      <Main></Main>
    </>
  )
}

export default App;
