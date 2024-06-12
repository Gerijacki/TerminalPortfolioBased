import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Advanced diploma in multiplatform application development",
    desc: "09/2023 ~ Present | DAM",
  },
  {
    title: "Intermediate diploma in microcomputer systems and networks",
    desc: "09/2021 ~ 05/2023 | SMX",
  },
  {
    title: "Compulsory Secondary Education. Technological Itinerary.",
    desc: "09/2017 ~ 07/2021 | ESO",
  },
];

export default Education;
