import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
      "Simplicity is the ultimate sophistication." - Leonardo da Vinci <br />
        Here are some of my projects you shouldn't miss: 
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Cooming Soon",
    desc: "We're working hard on something amazing! Stay tuned for updates...",
    url: "https://github.com/DuckHats",
  },
  {
    id: 2,
    title: "Stegnonfiles",
    desc: "Stegnonfiles is a minimalist clone of AnonFiles. It allows anonymous file uploads and uses encryption to protect privacy.",
    url: "https://github.com/Gerijacki/stegnonfiles",
  },
  {
    id: 3,
    title: "Github_Api_Manager",
    desc: "Python terminal-based application on how to manage GitHub with the official API.",
    url: "https://github.com/Gerijacki/GitHub_Api_Manager",
  },
  {
    id: 4,
    title: "CF PBB LA ROCA",
    desc: "Development of the official website of the Penya blanca i blava la roca Football Club",
    url: "https://cfpbblaroca.com",
  },
  {
    id: 5,
    title: "Google-SignIn",
    desc: "A GitHub project on how to make a phishing server based on the zPhisher tool.",
    url: "https://github.com/SergiGiribet/google-SignIn",
  },
  {
    id: 6,
    title: "passWifi",
    desc: "Automation scripts for 'deauth' practice and hash decryption.",
    url: "https://github.com/Gerijacki/passWifi",
  },
  {
    id: 7,
    title: "Shadowbyte",
    desc: "A basic utility application for everyday use, made with Python.",
    url: "https://github.com/Gerijacki/Shadowbyte",
  },
  {
    id: 8,
    title: "Cyber_Startupv2",
    desc: "This repository serves as a centralized hub for various cybersecurity materials, including scripts, resources, and information.",
    url: "https://github.com/Gerijacki/Cyber_Startupv2",
  },
];

export default Projects;
