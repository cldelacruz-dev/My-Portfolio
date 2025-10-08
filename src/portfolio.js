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
  username: "CLDC",
  title: "Hi all, I'm Carl",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VA_qHxW8JgntnTHEegJMWikBmsG0QYSw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cldelacruz-dev",
  linkedin: "https://www.linkedin.com/in/carl-lorenze-dela-cruz-a08b71187?",
  gmail: "carllorenze16delacruz@gmail.com",
  gitlab: "https://gitlab.com/carllorenze16delacruz",
  facebook: "https://www.facebook.com/IamCaarll",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/10422806/",
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
      "⚡ Develop highly interactive Front-end/User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Building Scalable & Secure Backend Systems"),
    emoji("⚡ Optimized database architecture for performance & scalability"),
    emoji("⚡ Automating deployments, scaling applications, and monitoring performance"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "codeigniter",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
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
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "android studio",
      fontAwesomeClassname: "fab fa-android"
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
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
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
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "STI Ortigas Cainta",
      logo: require("./assets/images/stiOrcaLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2015 - May 2019",
      desc: "Participated in some extracurricular activities and seminars.",
      descBullets: [
        "SAP - B1 Sales A/R & Inventory Module (March 2019)",
        "Union Bank: Hackademia Hackathon (November 2018)",
        "PPC2018 ”Philippine Programming Challenge” (October 2018)",
        "CSCON ”REALITECH : TECHNOLOGY FOR THE REAL WORLD”  (June 2018)",
        "FEU TECH SUMMIT 3.0 ”TECHNOLOGY maketh BUSINESS” (June 2018)",
        "THIS IS I.T (March 2018)",
        "ALL OUT CONNECT ”LEARNING BEYOND THE FUNDAMENTALS OF INFORMATION TECHNOLOGY” (February 2018)",
        "CODEFEST : MOBILE APP HACKATHON ”Tagisan ng Talino” (January 2018)",
        "GAME DEVELOMPENT SESSION (November 2017)",
        "BYTES ”Brilliant Youth for Technology Excellence Society ” (January 2017)",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Developer",
      company: "Rococo Global Technologies Corporation",
      companylogo: require("./assets/images/rgtcLogo.png"),
      date: "January 2023 – Present",
      desc: "After demonstrating strong problem-solving skills, technical expertise, and leadership capabilities as a Mid Developer, I was promoted to Senior Developer. In this role, I have taken on greater responsibilities in system architecture, software development lifecycle management, and team mentorship while ensuring the delivery of high-quality, scalable applications.",
      descBullets: [
        "Led the development of scalable web and mobile applications using Laravel, React.js, Node.js, and React Native.",
        "Designed and optimized backend services, improving performance, security, and scalability.",
        "Played a key role in project decision-making and architectural improvements.",
        "Collaborated with cross-functional teams to ensure seamless project execution.",
        "Took ownership of key projects, overseeing end-to-end development and deployment."
      ]
    },
    {
      role: "Developer",
      company: "Bounty Fresh Inc.",
      companylogo: require("./assets/images/bountyFreshLogo.png"),
      date: "October 2019 – December 2022",
      desc: "Developed and maintained an in-house project to streamline company operations, enhancing efficiency and automation. Managed System Support across multiple departments while independently handling new projects from planning to deployment.",
      descBullets: [
        "Designed and implemented internal tools to automate reports and improve workflow efficiency.",
        "Managed and executed new projects independently, overseeing development, and optimization.",
        "Enhanced and optimized existing processes across multiple departments, reducing manual effort and improving productivity.",
        "Provided System Support, resolving technical issues and ensuring system stability across teams.",
        "Collaborated with stakeholders to identify and develop tailored solutions for department-specific needs."
      ]
    },
    {
      role: "Web Application Developer Intern",
      company: "GICF Inc.",
      companylogo: require("./assets/images/gicfLogo.png"),
      date: "November 2018 – February 2019",
      desc: "Worked as an intern supporting the development and maintenance of internal systems for a BPO company. Provided system support for existing web applications and contributed to new tools aimed at improving operational efficiency.",
      descBullets: [
        "Handled system support for existing internal applications, assisting in troubleshooting and maintenance.",
        "Developed a Daily Time Record (DTR) system specifically for interns to streamline attendance tracking.",
        "Contributed to small-scale tools and web projects that supported the day-to-day operations of the BPO team.",
        "Gained hands-on experience in real-world development environments and collaborative workflows.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects and Companies Where I Contributed to Building and Elevating Their Tech Stack",
  projects: [
    {
      image: require("./assets/images/rgtcLogo.png"),
      projectName: "Mobile Route Delivery App",
      projectDesc: "A delivery app that enables real-time shipment tracking, location-based transaction validation, and SKU reporting, helping clients monitor delivery operations and improve team efficiency.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/rgtcLogo.png"),
      projectName: "Business Ordering App",
      projectDesc: "A mobile ordering platform that allows customers to browse products, add items to their cart, and complete purchases via DragonPay.",
    },
    {
      image: require("./assets/images/rgtcLogo.png"),
      projectName: "Overseas Support Chat App",
      projectDesc: " A real-time messaging platform built for agencies managing overseas workers, allowing direct and group communication between agents and workers.Key Features include personal chat, group chat, and push notifications for faster and more efficient communication.",
    },
    {
      image: require("./assets/images/rgtcLogo.png"),
      projectName: "Promo Approval System",
      projectDesc: "An internal approval workflow that lets users submit SKU promotions for multi-level manager review, tracking pending requests, approvers (up to 10), and timestamps of approvals.",
    },
    {
      image: require("./assets/images/bountyFreshLogo.png"),
      projectName: "Telegram Sending Report",
      projectDesc: "A Telegram-integrated reporting system that allows account managers to easily monitor monthly store sales, reducing the need for manual, paper-based reports and streamlining performance tracking.",
    },
    {
      image: require("./assets/images/bountyFreshLogo.png"),
      projectName: "Price Change Approval System",
      projectDesc: "An approval workflow system that notifies approvers via email about proposed SKU price changes, including both old and new prices. Approvals can be made directly through email or within the system for streamlined decision-making.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [ 
    {
      title: "Outstanding Member Award",
      subtitle:
        "In Recognition of his effort resulting in a high level of productivity and outstanding Performance for the year 2023.",
      image: require("./assets/images/rgtcLogo.png"),
      imageAlt: "RGTC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1dhZDwJcxWri_ucTUeh1fM-IwoCi7qh53/view?usp=sharing"
        },
      ]
    },
    {
      title: "U:Hackademia: Certificate of Participation",
      subtitle:
        "Powered by UnionBank of the Philippines, 3rd year and 4th year college students from various STI campuses gathered at STI College Ortigas-Cainta on November 15-16, 2018 to test their knowledge and abilities in this year’s U:Hackademia, a 24-hour coding marathon that encourages students to solve challenges in the field of Education and Social Innovation.",
      image: require("./assets/images/uhackLogo.png"),
      imageAlt: "U:Hackademia Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OnubThUHwAUFXWGSjfMUDbrXfMmC6hPO/view?usp=sharing"
        },
      ]
    }, {
      title: "FEU TECH SUMMIT 3.0: Certificate of Participation",
      subtitle:
        "Brilliant computer studies students from FEU Institute of Technology have conceptualized an event about the ever-evolving world of start-ups and businesses. Astounding professionals will educate the participants with strategies on how to fight dastardly old habits in business, employing innovative technologies.",
      image: require("./assets/images/feuTechLogo.png"),
      imageAlt: "feuTechLogo Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1foN3J5CyqcTWvdkYrww9I7ZthspeI1Ob/view?usp=sharing"
        },
      ]
    }, {
      title: "CODEFEST: Certificate of Participation",
      subtitle:
        "Powered by UnionBank of the Philippines, 3rd year and 4th year college students from various STI campuses gathered at STI College Ortigas-Cainta on November 15-16, 2018 to test their knowledge and abilities in this year’s U:Hackademia, a 24-hour coding marathon that encourages students to solve challenges in the field of Education and Social Innovation.",
      image: require("./assets/images/stiOrcaLogo.png"),
      imageAlt: "U:Hackademia Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MhilCDucKigSCxh9lxRhsIEw_HoCu9en/view?usp=sharing"
        },
      ]
    }, 
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
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
      url: "https://medium.com/@carl/why-react-is-the-best-5a97563f423e",
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
      slides_url: "https://bit.ly/carl-slides",
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory"
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
  number: "+63-9560157910",
  email_address: "carllorenze16delacruz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
