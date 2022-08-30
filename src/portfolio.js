import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  displayGreeting: true,
  username: "Rafael Mateus",
  title: "Hi all, I'm Rafael Mateus",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building APIs and Web applications with Go | Python | Ruby | Rails | Docker | K8s and DevOps skills"
  ),
  resumeLink: "https://linkedin.com/in/rafaelbmateus",
};

const socialMediaLinks = {
  display: true,
  github: "https://github.com/rafaelbmateus",
  gitlab: "https://gitlab.com/rafaelbmateus",
  linkedin: "https://linkedin.com/in/rafaelbmateus",
  instagram: "https://instagram.com/rafaelbmateus",
  medium: "https://medium.com/@rafaelbmateus",
};

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Works as Software Engineer in architecture oriented to microservices. Currently, super focused on Golang and DevOps skills"
    ),
    emoji(
      "⚡ I'm founder and coordinator of whiteStone_dev, which aims to disseminate knowledge and encourage new developers"
    ),
    emoji(
      "⚡ With soft skills of teamwork, flexibility, communication between peers, feedback culture and motivated to engage the team and achieve results"
    ),
    emoji(
      "⚡ In constant learning in the world of technology and software development"
    ),
    emoji("⚡ When I am not programming I like to play the piano"),
  ],
  softwareSkills: [
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab",
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "digital-ocean",
      fontAwesomeClassname: "fab fa-digital-ocean",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "fas fa-gem",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello",
    },
    {
      skillName: "slack",
      fontAwesomeClassname: "fab fa-slack",
    },
    {
      skillName: "spotify",
      fontAwesomeClassname: "fab fa-spotify",
    },
  ],
  display: true,
};

const educationInfo = {
  display: false,
  schools: [],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "API",
      progressPercentage: "100%",
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false,
};

const workExperiences = {
  display: false,
};

const openSource = {
  display: true,
  showGithubProfile: "true",
};

const bigProjects = {
  display: false,
};

const achievementSection = {
  display: false,
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  display: true,
};

const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
};

const podcastSection = {
  display: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "",
};

const twitterDetails = {
  display: false,
  userName: "rafaelbmateus",
};

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
};
