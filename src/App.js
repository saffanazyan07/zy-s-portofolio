import "./App.scss";
import Main from "./containers/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./containers/topbutton/Top";
import TrainingOne from "./trainings/trainingOne/TrainingOne";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SplashScreen from "../src/containers/splashScreen/SplashScreen";
import {splashScreen} from "../src/portfolio";
import {trainingEvent} from "../src/eventList";
import {StyleProvider} from "../src/contexts/StyleContext";
import {useLocalStorage} from "../src/hooks/useLocalStorage";
import React, {useEffect, useState} from "react";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route element={<Main />} path="/" />
                {trainingEvent.map(training => {
                  return <Route element={<TrainingOne training={training} />} path={training.id} />;
                })}
              </Routes>
            </BrowserRouter>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
}

export default App;
