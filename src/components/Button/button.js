import styled from "styled-components";

const Button = (props) => {
  return (
    <Wrapper
      padding={props.padding}
      fontSize={props.fontSize}
      background={props.background}
      borderRadius={props.borderRadius}
      boxShadow={props.boxShadow}
      fontWeight={props.fontWeight}
    >
      {props.text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  font-weight: ${(props) => props.fontWeight};
  color: white;
`;
export default Button;
