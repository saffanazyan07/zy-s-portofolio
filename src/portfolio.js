/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jay Dholariya",
  title: "Hi all, I'm Jay",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dholariyajay",
  linkedin: "https://www.linkedin.com/in/jaydholariya/",
  gmail: "jaydholariya07@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/university-of-windsor.png"),
      subHeader: "Master's degree in Computer And Electrical Engineering",
      duration: "2020 - 2021",
      desc: "Maintained an 86/100 while pursuing research in AI and computer engineering.",
      descBullets: [
        "Conducted research in advanced computing technologies and AI applications",
        "Participated in various academic projects and research initiatives"
      ]
    },
    {
      schoolName: "CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      logo: require("./assets/images/charusat-university.jpeg"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2015 - 2019",
      desc: "Completed undergraduate studies with strong academic performance and practical project experience.",
      descBullets: [
        "Participated in various technical competitions and coding challenges",
        "Led student technology initiatives and projects"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Hearn Industrial Services",
      companylogo: require("./assets/images/hearn-industrial-services.webp"),
      date: "October 2023 - Present",
      desc: "Led architectural design and implementation of complex ERP web applications using React and modern technologies.",
      descBullets: [
        "Established component library reducing development time by 40%",
        "Implemented TypeScript and modern testing practices achieving 90% coverage",
        "Optimized core web vitals leading to 45% faster load times"
      ]
    },
    {
      role: "Software Developer",
      company: "Magna International",
      companylogo: require("./assets/images/magna.jpg"),
      date: "August 2021 - September 2023",
      desc: "Developed and maintained single-page applications using React.js and modern web technologies.",
      descBullets: [
        "Implemented RESTful APIs and managed databases including AWS, MySQL, MongoDB",
        "Led CI/CD implementation using Jenkins for automated deployments",
        "Integrated developer portals using Backstage.io and analytics tools"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "DI Solutions",
      companylogo: require("./assets/images/di-solutions.jpeg"),
      date: "December 2018 - November 2019",
      desc: "Built responsive web applications using React.js and Node.js stack.",
      descBullets: [
        "Optimized website performance through caching and lazy loading",
        "Developed RESTful APIs using Node.js and Express.js",
        "Implemented Gulp workflows for asset optimization"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "JayDholariya",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Professional Certifications and Technical Achievements",
  achievementsCards: [
    {
      title: "Microsoft Azure Fundamentals",
      subtitle: "- Scott Duffy",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-76e9c1c5-c98a-45ab-bcd3-b90e94b0e9a8/"
        }
      ]
    },
    {
      title: "Data Analyst",
      subtitle: "- Amanda Brophy",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/DP8U39TMB7T5"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "- Qwiklabs",
      image: require("./assets/images/amazon.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-f4e6d4f6-449b-46e1-b9de-393a560660d8/"
        }
      ]
    },
    {
      title: "DevOps",
      subtitle: "- James Wickett",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/8cc5f4038bac08ce655f3151a7d995bfb990ada3872c87eda9a0f6f50f6e8ab4"
        }
      ]
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/3e444c5b-ce2e-4806-a43a-ab695e29c49a?source=linked_in_profile"
        }
      ]
    },
    {
      title: "React.js",
      subtitle: "- Eve Porcello",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/96186083abf550640bfad38a161259f624fe5ec34dfffc28fb6bb1721b06881d"
        }
      ]
    },
    {
      title: "Hadoop",
      subtitle: "- Romeo Kienzler",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/d59d5b66-f335-47fa-b718-2380aa919a99?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Agile",
      subtitle: "- Doug Rose",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/358079d9a219390ea0983d76aeaebdc6a0fdfd64630571f5254865a10f73e21b"
        }
      ]
    },
    {
      title: "Scrum Master",
      subtitle: "- Kelley O'Connell",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/c83ec9f1479ef7550d0de1f4909596dd2d3306429802497951454eae66a5aa7c"
        }
      ]
    },
    {
      title: "Introduction to Algorithm and Analysis",
      subtitle: "- Saurabh Mukhopadhyay",
      image: require("./assets/images/algorithm.png"),
      imageAlt: "Algorithm Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_/view"
        }
      ]
    },
    {
      title: "Python",
      subtitle: "- Harishankaran K",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/5cb963112ea9"
        }
      ]
    },
    {
      title: "SQL Programming",
      subtitle: "- Scott Simpson",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/78611b075907e847c75006914cab650d9face8e89fdc53b28230edd1b1d84e41?trk=backfilled_certificate"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+15199956280",
  email_address: "jaydholariya07@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
