import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const greeting = {
  username: "Bandeja Padel",
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
      id: "0",
      level: "Level 4.5 - 5.0",
      club: "Es + Padel",
      clubLogo: require("./assets/images/esMasPadelLogo.png"),
      date: "13/03/2025 - 16/03/2025",
      desc: "Indoor padel club where talents like Pablito Cardona grew up. Es + Padel owns one of the best padel academies in Spain in which almost all under 18 competitors are #1 in their category.",
      milestones: [{title: "Arrival to", content: "Seville"}]
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

export {greeting, socialMediaLinks, splashScreen, trainings, contactInfo};
