/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Aditya Yadav',
  title: "Hi all, I'm Aadi",
  subTitle: emoji(
    'A passionate Full Stack Software Developer & Data Scientist 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1HOtvBFZwJNj6ao_p1eFVIkqAgiFHaLKj/view?usp=drivesdk',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Aadi2001',
  linkedin: 'https://www.linkedin.com/in/aditya-yadav-a17841129/',
  gmail: 'iamadi2001@gmail.com',
  facebook: 'https://www.facebook.com/adityayadavchamp2001',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'Mysql',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'Google Cloud Platform',
      fontAwesomeClassname: 'fab fa-google',
    },
    {
      skillName: 'R Language',
      fontAwesomeClassname: 'fab fa-r-project',
    },
    {
      skillName: 'Android OS',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Saint Jude high School',
      logo: require('./assets/images/ssc.jpg'),
      subHeader: 'S.S.C',
      duration: 'April 2013',
    },
    {
      schoolName: 'Karthika Junior College',
      logo: require('./assets/images/hsc.jpg'),
      subHeader: 'H.S.C',
      duration: '2013 - 2015',
    },
    {
      schoolName: 'Shah & Anchor Kutchhi Polytechnic',
      logo: require('./assets/images/sakp.png'),
      subHeader: 'Diploma in Computer Technology',
      duration: '2015 - 2019',
    },
    {
      schoolName: 'Alamuri Ratnamala Institute of Engineering and Technology',
      logo: require('./assets/images/download.jpg'),
      subHeader: 'Engineering in Computer Engineering',
      duration: '2019 - Currently Enrolled',
      },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Linux System Engineer',
      company: 'Geekay Infotech',
      companylogo: require('./assets/images/geekaylogo.jpg'),
      date: 'July 2018 – Oct 2019',
      desc:
        '',
      descBullets: [
      ],
    },
    {
      role: 'Author at STJS',
      company: 'STJS.com',
      companylogo: require('./assets/images/stjs.jpeg'),
      date: 'May 2017 – May 2018',
    },
    
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Aadi2001', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/03.png'),
      link: 'http://fincer.tech/',
    },
    {
      image: require('./assets/images/logo.png'),
      link: 'http://bombay61.com/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Ubuntu for Blinds',
      subtitle:
        'Customised Ubuntu OS for blind to work on OpenOffice apps and chrome to work on google Sheets',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        
      ],
    },
    /*{
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        /*{
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },*/
      //],
    //},*/

    {
      title: ' Defences In Cyber Security Course',
      subtitle: 'Completed Certifcation from Udemy for Cyber Security',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: 'https://drive.google.com/file/d/1xmOD4TxJr2-WF4Rg7il__MUFET0aXBCm/view?usp=drivesdk' },
        /*{
          name: ' Defences In Cyber Security Course',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },*/
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  /*
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  
  ),
    */
  talks: [
    /*
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  */
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  /*
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
*/};
const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91 8898514602',
  emailAddress: 'iamadi2001@gmail.com',
};

// Twitter Section

const twitterDetails = {
  /*
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
*/
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
