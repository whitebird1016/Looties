import styled from "styled-components";
import { Column } from "./element";
import Logo from "../assets/image/HeaderLogo.webp";
import Text from "./Text/text";

const Footer = () => {
  return (
    <Wrapper>
      <LogoImage src={Logo} />
      <Text text="©2022 Looties. All rights reserved. by Kurai" />
    </Wrapper>
  );
};

const Wrapper = styled(Column)`
  gap: 10px;
`;
const LogoImage = styled.img`
  max-height: 30px;
  height: auto;
`;
export default Footer;
