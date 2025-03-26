import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>anonymous</User>@<WebsiteName>terminal.gerardloriz.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
