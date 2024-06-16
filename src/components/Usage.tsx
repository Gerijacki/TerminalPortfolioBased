import React from "react";
import { UsageDiv } from "./styles/Output.styled";

type Command = "themes" | "projects" | "socials";

type ArgType = {
  [key in Command]: { placeholder: string; example: string };
};

const arg: ArgType = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
  projects: { placeholder: "project-no", example: "5" },
  socials: { placeholder: "social-no", example: "1" },
};

type Props = {
  cmd: Command;
  marginY?: boolean;
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  let action: "set" | "get" | "go";

  // Determine action based on cmd
  if (cmd === "themes") {
    action = "set";
  } else {
    action = "go";
  }

  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &lt;{arg[cmd].placeholder}&gt; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
