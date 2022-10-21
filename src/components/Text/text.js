import styled from "styled-components";

const Text = (props) => {
  return (
    <Wrapper
      color={props.color}
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
      letterSpacing={props.letterSpacing}
      maxWidth={props.maxWidth}
      lineHeight={props.lineHeight}
      textAlign={props.textAlign}
    >
      {props.text}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
  max-width: ${(props) => props.maxWidth};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  margin: auto;
`;

export default Text;
