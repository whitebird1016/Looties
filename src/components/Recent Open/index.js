import styled from "styled-components";
import lootbox1 from "../../assets/image/lootbox1.webp";
import { Column, Row } from "../element";
import Text from "../Text/text";
import Recent from "./recent";

const RecentOpen = () => {
  return (
    <Wrapper>
      <Text text="Recent Opens" fontSize="30px" fontWeight="500" />
      <WrapperContent>
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
        <Recent
          src={lootbox1}
          text="Cs3...PLY opened 0.75 SOL and won 0 SOL"
          time="4 minutes ago"
        />
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  width: 100%;
  gap: 40px;
`;
const WrapperContent = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  width: 100%;
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;
export default RecentOpen;
