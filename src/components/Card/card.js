import styled from "styled-components";
import Button from "../Button/button";
import { Column, Row } from "../element";

const Card = (props) => {
  return (
    <Wrapper>
      <ContentImage src={props.url} />
      <WrapperContent>
        <CoinContent>
          <CoinImage src={props.url2} />
          <>0.05</>
        </CoinContent>
        <Button
          text="SELECT WALLET"
          padding="14px 16px"
          background="linear-gradient(
          275.68deg,
          #b386fe 5.91%,
          #92cfeb 50.2%,
          #a7fe89 101.53%
          )"
          fontSize="0.875rem"
          boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;"
          fontWeight="500"
          borderRadius="4px"
        />
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  border: 1px solid #434343;
  padding: 16px;
  background: linear-gradient(
    152.97deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 10px;
  backdrop-filter: blur(42px);
  gap: 7px;
`;
const ContentImage = styled.img`
  width: 100%;
  max-height: 100%;
  height: auto;
  background-color: black;
  border-radius: 10px;
`;
const WrapperContent = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;
const CoinContent = styled(Row)`
  gap: 10px;
`;
const CoinImage = styled.img``;
export default Card;
