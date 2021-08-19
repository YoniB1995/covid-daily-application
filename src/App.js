import React from 'react';
import DesktopApp from './components/pages/DesktopApp';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/features/Footer'

import './App.css';

function App() {
  const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
  return (
    <>
    <Desktop>
    <DesktopApp />
    </Desktop>
    <Footer/>
    </>

  );
}

export default App;
