import React from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdList, HelpWrapper } from "../styles/Help.styled";
import filesData, { File } from "./filesdata";

const Ls: React.FC = () => {
  const handleDownload = (url: string, filename: string) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      })
      .catch(error => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <HelpWrapper data-testid="ls">
      <ProjectsIntro>Here are the files available for download</ProjectsIntro>
      <CmdList>
        {filesData.map((file: File) => (
          <CmdList key={file.id}>
            <Cmd>
              {`${file.id}. ${file.title}`}{" "}
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  handleDownload(file.url, file.title);
                }}
              >
                [Get]
              </a>
            </Cmd>
          </CmdList>
        ))}
      </CmdList>
    </HelpWrapper>
  );
};

export default Ls;
