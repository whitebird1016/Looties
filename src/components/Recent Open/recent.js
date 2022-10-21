import styled from "styled-components";
import { Row } from "../element";
import Text from "../Text/text";

const Recent = (props) => {
  return (
    <Wrapper>
      <WrapperContent>
        <ContentImage src={props.src} />
        <Text text={props.text} fontSize="16px" textAlign="left" />
      </WrapperContent>
      <TimeContent>{props.time}</TimeContent>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  padding: 13px 20px;
  background: linear-gradient(
    152.97deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 1rem;
  backdrop-filter: blur(42px);
  width: 100%;
  justify-content: space-between;
  border: 1px solid #606060;
`;
const WrapperContent = styled(Row)`
  gap: 20px;
`;
const ContentImage = styled.img`
  width: 60px;
`;
const TimeContent = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
export default Recent;
