import SplashScreen from './components/splash_screen/SplashScreen';
import './global_styles/App.css';

import { useState, useEffect } from 'react';
import LandingPage from './pages/landing_page/LandingPage';

import { useGlobalContext } from './hooks/GlobalContext';
import { Themes } from './global_types/globalEnums';

const App: React.FC = () => {

  const { theme, isSplash } = useGlobalContext();
  const isDark: boolean = theme == Themes.dark;

  return (
    <div id='App' className={isDark ? 'dark' : 'light'}>
      {
        isSplash ? <SplashScreen /> : <LandingPage />
      }
    </div>
  )
};

export default App;
