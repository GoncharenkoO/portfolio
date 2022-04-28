import { useEffect } from 'react';
import { addBackToTop } from 'vanilla-back-to-top';
import Routes from './Routes';

function App() {
  useEffect(() => {
    addBackToTop({
      diameter: 40,
      backgroundColor: '#aa73d6',
      textColor: 'black',
    });
  }, []);

  return <Routes />;
}

export default App;
