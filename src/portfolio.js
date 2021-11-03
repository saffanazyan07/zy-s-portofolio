/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zijun yi",
  title: "Hi all, I'm Zijun",
  subTitle: emoji(
    "I am a Syracuse University Applied Data Science Master's student. I enjoy deploying solutions that use machine learning and automation to discover knowledge in data. I'm currently working on a solution that uses machine learning to detect racial and gender bias in popular automatic speech recognition systems."
  ),
  resumeLink: "https://1drv.ms/b/s!AvPUHjsmnKcag8JXlSNqP10iH_UyTA?e=FmUtHm", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zyi103",
  linkedin: "https://www.linkedin.com/in/zijunyi/",
  // gmail: "zyi103@syr.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I SOLVE PROBLEMS, AUTOMATE PROCESSES, WEB DEVELOPER & DATA SCIENTIST ARE JUST THE TITLES",
  skills: [
    emoji("⚡ Design Machine Learning / Deep Learning model as a solution"),
    emoji("⚡ Integration of third party services such as AWS / Twilio")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "r-language",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Syracuse University",
      logo: require("./assets/images/syracuseLogo.png"),
      subHeader: "Master of Science in Applied Data Science",
      duration: "September 2020 - Dec 2021",
      desc: "Participated in the lab, Science of Science and Computational Discovery Lab, publishing 4 papers.",
      descBullets: [
        "Method for testing gender biases in commercial AI black boxes",
        "Predicting the usage of scientific datasets based on article, author, institution, and journal bibliometrics",
        "EILEEN: A recommendation system for scientific publications and grants",
        "Biases in datasets and models used in the study of science"
      ]
    },
    {
      schoolName: "Syracuse University",
      logo: require("./assets/images/syracuseLogo.png"),
      subHeader: "Bachelor of Science in Information Management & Technology",
      duration: "September 2016 - April 2020",
      desc: "Took courses about Software Engineering, Statistics, Data Analytics, ...",
      descBullets: [
        "Some Projects are SpeakEZ, Storage Web, Covid Vsualization Poster"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Science of Science & CD Lab",
      companylogo: require("./assets/images/sosLogo.png"),
      date: "Feb 2021 – Present",
      desc: "As a research assistant in SOS+CD Lab, I worked on multiple areas of interest.",
      descBullets: [
        "maintaining big data pipelines with Hadoop, Spark,and Apache Airflow",
        "working on bias detection and debias technology in ai models"
      ]
    },
    {
      role: "Software Developer",
      company: "Syracuse University",
      companylogo: require("./assets/images/syracuseSLogo.jpg"),
      date: "Mar 2019 – Mar 2020",
      desc: "Assisted project SpeakEZ with a web-side prototype application that delivers messages from medical professionals to refugees in their first language, using Twilio’s call API"
    },
    {
      role: "Web Developer Intern",
      company: "Meituan",
      companylogo: require("./assets/images/meituanLogo.png"),
      date: "June 2018 – Sept 2018",
      desc: "Created a web-application for the operation department to push out user notifications with better efficiency"
    },
    {
      role: "Global Technology Solution Intern",
      company: "PwC",
      companylogo: require("./assets/images/pwcLogo.png"),
      date: "May 2017 – Aug 2017",
      desc: "Designed and programmed scripts to automate workflows for the Personal Computer Replacement team"
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
  subtitle: "SOME APPLICATIONS AND EVENTS THAT I HELPED TO CREATE",
  projects: [
    {
      image: require("./assets/images/s4Logo.png"),
      projectName: "Science of Science Summer School",
      projectDesc:
        "A science of science conference. where I Hosted website, managed YouTube Account, Slack Community. Most importantly to ensured a collaborative conference environment. It was an amazing experience and a great success.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://s4.scienceofscience.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eileenLogo.png"),
      projectName: "EILEEN",
      projectDesc:
        "EILEEN: A search engine for scientific publications. Science depends on fundings to close knowledge gaps.  Pinpointing such gaps is time-consuming because there is no centralized dataset or system that links publications and grants...",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eileen.io/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Publication Section

const publicationSection = {
  title: emoji("Publications And Publications 📝 "),
  subtitle: "Publications, Publications, and more Publications !",

  publicationsCards: [
    {
      title:
        "“Alexa, is my favorite place the kitchen or garage?”: A method for testing gender biases in commercial AI black boxes",
      abstract:
        "Commercial applications powered by artificial intelligence have become the selling point of technology brands. While the ingredients of those applications are kept as trade secrets, it has been argued and proved that AI, the essential building block of those applications, has gender and race bias embedded.  In this work, we proposed a post-hoc black box bias detection method inspired by psychophysics. We were able to detect biases related to gender in Amazon Alexa’s “favorite place” built-in skill. More precisely, we found that Alexa tends to detect male voices when the user is mentioning “Garage”, and it tends to detect female voices when the voice is mentioning “Kitchen”. We generalize this use case to detect biases for words, voices, and voice-word pairs.  We apply it to analyze Amazon’s Lex service over a large collection of gendered occupations. However, our results suggest little to no biases in such services. Nevertheless, we proposed that our method can be useful to detect general biases in commercial AI black boxes.",
      authors: [
        {
          name: "Lizhen Liang",
          url: "https://www.linkedin.com/in/lizhenliang/"
        },
        {
          name: "Zijun Yi"
        },
        {
          name: "Daniel Acuña",
          url: "https://acuna.io/"
        }
      ]
    },
    {
      title: "This Peper Is under Double Blind Review",
      abstract:
        "©¶Ř§Ů舐½	—Ř§ŮŘ§Ů¶ ▀Â£—Â£©舐—© Â£舐 Ř§Ů½	¶舐Â£©Ř§Ů½	æØ¢ÃÞ¥¿óÞ¢áñ ¶ðsžšåÞя¶Ř§ŮÂ£Þ¥¿ ???? Š½	????ráÚÆ Þ¥¿舐▀æØ¢Ã舐 Â£¶¶ðsžšåÞя╟ðsžšåÞяÞ¥¿Â£—Ř§Ů????½	 Â£½	▀ 舐ñâmå•????▀ðsžšåÞя¶Ř§Ů»Ř§ŮÞ¥¿Ř§Ů—óÞ¢áñ� ╟Â£ŠŘ§Ů½	æØ¢Ã Ř§Ů— 舐©©舐½	—Ř§ŮÂ£Þ¥¿ —???? ðsžšåÞя½	▀舐©—Â£½	▀ â€š�????ráÚÆ  —â€š�舐óÞ¢áñ Â£舐 ðsžšåÞя©舐▀. Â£Þ¥¿—â€š�????ðsžšåÞяæØ¢Ãâ€š� ðsžšåÞя©Â£æØ¢Ã舐 Ř§Ů½	????╟Â£—Ř§Ů????½	 Ř§Ů© â€š�Â£▀ —???? ????»—Â£Ř§Ů½	� 舐Â£—ðsžšåÞя舐© ????╟ —â€š�舐 ñâmå•ðsžšåÞя»Þ¥¿Ř§Ů¶Â£—Ř§Ů????½	© —â€š�Â£— ▀舐©¶Ř§Ů»舐 Â£ ▀Â£—Â£©舐— ¶Â£½	",
      authors: [
        {name: "Anonymous author #1"},
        {name: "Anonymous author #2"},
        {name: "Anonymous author #3"},
        {name: "Anonymous author #4"}
      ]
    },
    {
      title:
        "EILEEN: A recommendation system for scientific publications and grants",
      abstract:
        "Finding relevant scientific articles is crucial for advancing knowledge. While there are many recommendation systems for commercial purposes, relatively few are available for scientific articles. In this work, we describe a EILEEN (Exploratory Innovator of LitEraturE Networks), a recommendation system of scientific publications and grants. As part of the system, we describe its architecture for ingesting documents, its publication and grant modeling, and its keyphrase extractor. Using its unique dataset of log-in user behavior, we validate our recommendation system based on Latent Semantic Analysis (LSA). We found that a simple Random Forest-based recommendation achieves a AUC of 0.9, significantly outperforming the standard More Like This (MLK) Elasticsearch algorithm. Our results suggest that recommendation systems for science can be significantly improved if we use data about scientists’ search behavior. We make the code and dataset available for other researchers to compare.",
      authors: [
        {
          name: "Daniel Acuña",
          url: "https://acuna.io/"
        },
        {
          name: "Zijun Yi"
        },
        {
          name: "Kartik Nagre",
          url: "https://www.linkedin.com/in/kartiknagre/"
        },
        {
          name: "Priya Matnani",
          url: "https://www.linkedin.com/in/priyamatnani/"
        },
        {
          name: "Ziyi Qiu"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certification 🏆 "),
  subtitle:
    "Achievements, Publications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM Call for Code Competition 3rd Place",
      subtitle:
        "Our team proposed to study road-line detection using machine learning captured data through a dash-camera. The machine learning technology will capture data on a sunny day, and store the location, direction and captured data to the database. This information will be used to predict road lines on snowy days and alert a driver if the car is off course.",
      image: require("./assets/images/call4code_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QuaFosT0iueAR7QAN6tfVP08izNzKWLn/view?usp=sharing"
        },
        {
          name: "Event Site",
          url: "https://launchpad.syr.edu/call-for-code-winners/"
        }
      ]
    },
    {
      title: "SpeakEZ Project",
      subtitle:
        "SpeakEZ is a system to help a refugee population use mobile phones to more easily communicate regarding their community needs. Users can record voice messages and the messages will be delivered via the Twilio API to the regugees in their languages.",
      image: require("./assets/images/speakez_logo.png"),
      footerLink: [
        {
          name: "Project Prototype",
          url: "https://github.com/zyi103/speakez"
        },
        {
          name: "News Reporting",
          url: "https://news.syr.edu/blog/2015/09/21/knight-foundation-recognizes-speakez-efforts-with-prototype-grant-84693/"
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

const contactInfo = {
  title: emoji("Contact Me 📧"),
  email_address: "zyi103@syr.edu",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all: "
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
