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
    title: "EduQuack",
    desc: "Social network focused on a school intranet. Allows to communicate news to students, chat with each other, and form groups with teachers.",
    url: "https://github.com/DuckHats/eduQuack",
  },
  {
    id: 2,
    title: "CF PBB LA ROCA",
    desc: "Development of the official website of the 'Club de futbol Penya blanca i blava la roca'",
    url: "https://cfpbblaroca.com",
  },
  {
    id: 3,
    title: "Google-SignIn",
    desc: "GitHub project on how to make a phishing server based on the tool zPhisher.",
    url: "https://github.com/SergiGiribet/google-SignIn",
  },
  {
    id: 4,
    title: "Shadowbyte",
    desc: "Basic utility application for daily use made with Python.",
    url: "https://github.com/Gerijacki/Shadowbyte",
  },
  {
    id: 5,
    title: "Cyber_Startupv2",
    desc: "This repository serves as a centralized hub for various cybersecurity-related materials, including scripts, resources, and information.",
    url: "https://github.com/Gerijacki/Cyber_Startupv2",
  },
];

export default Projects;
