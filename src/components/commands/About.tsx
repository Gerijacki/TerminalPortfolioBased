import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Gerard</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a backend web developer & cybersecurity enthusiast</HighlightAlt> based in Barcelona, Spain.
      </p>
      <p>
        Passionate about technology, I love <HighlightSpan>creating efficient and secure solutions.</HighlightSpan><br />
        I enjoy tackling challenges with attention to detail, always seeking to innovate and improve.<br />
        Exploring new technologies and refining my skills is my way of staying ahead.<br />
        If you have a project or just want to chat about tech, feel free to reach out!<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
