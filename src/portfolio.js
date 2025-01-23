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
      milestones: [
        {
          title: "Thursday 13th",
          contents: [
            {time:"5 PM", content:"All students must be in Seville Airport to be transported to Merida"},
            {time:"8 PM", content:"Group class (2p), Group class (2p), match (4p)"},
            {time:"9.30 PM", content:"Group class (2p), Group class (2p), match (4p)"},
            {time:"11 PM", content:"Finish first day"},
          ]
        },
        {
          title: "Friday 14th",
          contents: [
            {time:"8.30 AM", content:"Breakfast time"},
            {time:"10 AM", content:"4x Private class (1p), match (4p)"},
            {time:"11.30 AM", content:"4x Private class (1p), match (4p)"},
            {time:"1 PM", content:"Lunch + FREE TIME"},
            {time:"6 PM", content:"MIX STATIONS: Group class (2p), Group class (3p), Group class (3p)"},
            {time:"7.30 PM", content:"2 x Match (4p)"},
            {time:"9 PM", content:"Finish second day"},
          ]
        },
        {
          title: "Saturday 15th",
          contents: [
            {time:"8.30 AM", content:"Breakfast time"},
            {time:"10 AM", content:"4x Private class (1p), match (4p)"},
            {time:"11.30 AM", content:"4x Private class (1p), match (4p)"},
            {time:"1 PM", content:"Lunch + FREE TIME"},
            {time:"6 PM", content:"MIX STATIONS: Group class (2p), Group class (3p), Group class (3p)"},
            {time:"7.30 PM", content:"2 x Match (4p)"},
            {time:"9 PM", content:"Finish second day"},
          ]
        },
        {
          title: "Sunday 16th",
          contents: [
            {time:"~8 AM", content:"Breakfast time"},
            {time:"9 AM", content:"Group class (2p), Group class (2p), match (4p)"},
            {time:"10.30 AM", content:"Group class (2p), Group class (2p), match (4p)"},
            {time:"12 PM", content:"Lunch"},
            {time:"2 PM", content:"All students to be transported to Seville to fly back"},
            {time:"5 PM", content:"Arrival to Seville's airport"},
          ]
        }
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

export {greeting, socialMediaLinks, splashScreen, trainings, contactInfo};
