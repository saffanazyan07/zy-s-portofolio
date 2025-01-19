import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const greeting = {
  username: "Bandeja Padel Training",
  title: "Welcome players",
  subTitle: emoji("Smash limits, serve success and aim for the win"),
  displayGreeting: true
};

const socialMediaLinks = {
  instagram: "https://www.instagram.com/bandejapadeltraining/?hl=en",
  // gmail: "bandejapadeltraining@gmail.com",
  display: true
};

const trainings = {
  display: true,
  trainings: [
    {
      role: "Level 4.5 - 5.5",
      company: "Es + Padel",
      companylogo: require("./assets/images/esMasPadelLogo.png"),
      date: "13/03/2025 - 16/03/2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "If you want to be part of a training or request a date for us to open a new one for you or your group",
  number: "",
  email_address: "bandejapadeltraining@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  trainings,
  contactInfo
};
