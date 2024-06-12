import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Gerijacki</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a multiplatform developer</HighlightAlt> based in Barcelona, Spain.
      </p>
      <p>
      I'm passionate about computers in all their aspects, especially in web development, programming,
      and cybersecurity. <br />
      <br />
      I enjoy <HighlightSpan>overcoming technological challenges</HighlightSpan> with creativity and determination. With a mindset of <br />
      continuous improvement, I constantly seek to innovate to provide effective and secure <br />
      computing solutions. I'm determined to stay at the forefront of the <HighlightSpan>latest technological trends,</HighlightSpan><br />
      ensuring that each project reflects my commitment to excellence and reliability.<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
