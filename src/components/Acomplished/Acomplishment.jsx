import { Section, SectionTitle, Divider } from "../../AppStyles";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentStyles";

const data = [
  { number: 10, text: "Open Source Projects" },
  { number: 25, text: "Students" },
  { number: 20, text: "Github Followers" },
  { number: 70, text: "Github Starts" },
];

const Acomplishment = () => {
  return (
    <Section>
      <SectionTitle>Personal Achievments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <Divider />
    </Section>
  );
};

export default Acomplishment;
