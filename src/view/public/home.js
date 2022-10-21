import styled from "styled-components";
import CardBox from "../../components/Card";
import { Column, Row } from "../../components/element";
import RecentOpen from "../../components/Recent Open";
import Text from "../../components/Text/text";

const Home = () => {
  return (
    <Wrapper>
      <Text
        text="Open Looties to win up to 100X in SOL"
        fontWeight="700"
        fontSize="40px"
        fontFamily="'Press Start 2P'"
        lineHeight="70px"
        letterSpacing="0.02em"
        maxWidth="900px"
      />
      <Text text="No house edge, with 100% RTP." />
      <CardBox />
      <Text
        text="Open Responsibly"
        color="#b18cfd"
        fontWeight="bold"
        fontSize="25px"
      />
      <RecentOpen />
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  padding: 70px 0;
  gap: 40px;
  font-family: "Poppins", sans-serif;
`;

export default Home;
