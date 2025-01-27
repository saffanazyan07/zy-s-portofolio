import "./App.scss";
import Main from "./containers/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./containers/topbutton/Top";
import TrainingEvent from "./components/trainings/TrainingEvent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SplashScreen from "../src/containers/splashScreen/SplashScreen";
import {splashScreen} from "../src/portfolio";
import {trainings} from "../src/portfolio";
import {StyleProvider} from "../src/contexts/StyleContext";
import {useLocalStorage} from "../src/hooks/useLocalStorage";
import {useEffect, useState} from "react";
import Contact from "./containers/contact/Contact";

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
                {trainings.trainings.map(training => {
                  return (
                    <Route
                      key={training.id}
                      element={<TrainingEvent training={training} />}
                      path={training.id}
                    />
                  );
                })}
                <Route path="*" element={<Main />} />
              </Routes>
            </BrowserRouter>
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
}

export default App;
