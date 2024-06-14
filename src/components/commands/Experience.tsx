import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="Experience">
      <EduIntro>Here is my experience background!</EduIntro>
      {expBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const expBg = [
  {
    title: "Multiplatform application development in a pharmaceutical company",
    desc: "04/2024 - Present | Intern (Dual)",
  },
  {
    title: "IT Technician in a public school",
    desc: "10/2022 - 06/2023 | Intern",
  },
];

export default Experience;
