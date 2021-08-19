import React from 'react';
import DesktopApp from './components/pages/DesktopApp';
import MobileApp from './components/mobile/MobileApp';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/features/Footer'

import './App.css';

function App() {
  const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
  return (
    <>
    <Desktop>
    <DesktopApp />
    <Footer/>
    </Desktop>
    <Mobile>
        <MobileApp />
    </Mobile>

    </>

  );
}

export default App;
