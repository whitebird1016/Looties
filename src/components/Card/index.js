import styled from "styled-components";
import { Column, Row } from "../element";
import Card from "./card";
import lootbox1 from "../../assets/image/lootbox1.webp";
import lootbox2 from "../../assets/image/lootbox2.webp";
import lootbox3 from "../../assets/image/lootbox3.webp";
import lootbox4 from "../../assets/image/lootbox4.webp";
import lootbox5 from "../../assets/image/lootbox5.webp";
import lootbox6 from "../../assets/image/lootbox6.webp";
import solana from "../../assets/image/solana.webp";

const CardBox = () => {
  return (
    <Wrapper>
      <FilterContent>
        <FilterItem>SOL</FilterItem>
        <FilterItem>100X</FilterItem>
      </FilterContent>
      <WrapperContent>
        <Card url={lootbox1} url2={solana} />
        <Card url={lootbox2} url2={solana} />
        <Card url={lootbox3} url2={solana} />
        <Card url={lootbox4} url2={solana} />
        <Card url={lootbox5} url2={solana} />
        <Card url={lootbox6} url2={solana} />
      </WrapperContent>
    </Wrapper>
  );
};
const Wrapper = styled(Column)`
  gap: 20px;
  width: 100%;
`;
const FilterContent = styled(Row)`
  gap: 20px;
  width: 100%;
`;
const FilterItem = styled(Row)`
  padding: 16px;
  width: 100%;
  gap: 10px;
  border-radius: 4px;
  justify-content: center;
  background: linear-gradient(
    152.97deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const WrapperContent = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  width: 100%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;
export default CardBox;
