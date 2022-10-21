import styled from "styled-components";
import { Column, Row } from "./element";
import { useState, useRef } from "react";
import Logo from "../assets/image/HeaderLogo.webp";
import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter, FaVideo, FaBars } from "react-icons/fa";
import Button from "./Button/button";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const mouseMenu = useRef(null);
  const toggleMenu = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };
  const closeOpenMenus = (e) => {
    if (mouseMenu.current && toggle && !mouseMenu.current.contains(e.target)) {
      setToggle(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  toggle ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <Wrapper>
      <LogoImage src={Logo} />
      <WrapperContent>
        <Item>LEADERBOARD</Item>
        <Item>HOW TO OPEN</Item>
        <Item>FAQS</Item>
        <Item2>
          <FaVideo />
        </Item2>
        <Item2>
          <FaDiscord />
        </Item2>
        <Item2>
          <FaTwitter />
        </Item2>
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
          boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px,
          rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
          font-weight: 500"
          borderRadius="4px"
        />
      </WrapperContent>
      <WrapperContent2 ref={mouseMenu}>
        {toggle ? (
          <DropdownMenu>
            <Item>LEADERBOARD</Item>
            <Item>HOW TO OPEN</Item>
            <Item>FAQS</Item>
            <Row>
              <Item2>
                <FaVideo />
              </Item2>
              <Item2>
                <FaDiscord />
              </Item2>
              <Item2>
                <FaTwitter />
              </Item2>
            </Row>
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
              boxShadow="rgb(0 0 0 / 20%) 0px 3px 1px -2px,
          rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
          font-weight: 500"
              borderRadius="4px"
            />
          </DropdownMenu>
        ) : (
          <FaBars onClick={toggleMenu} />
        )}
      </WrapperContent2>
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  justify-content: space-between;
  padding: 0px 24px;
`;
const WrapperContent = styled(Row)`
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const WrapperContent2 = styled(Column)`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    font-size: 30px;
  }
`;
const LogoImage = styled.img`
  max-height: 40px;
  height: auto;
`;
const Item = styled(Link)`
  padding: 20px;
  font-size: 12px;
  letter-spacing: 1px;
`;
const Item2 = styled(Row)`
  font-size: 25px;
  padding: 10px;
`;
const DropdownMenu = styled(Column)`
  position: absolute;
  background: black;
  top: 0px;
  bottom: 0px;
  padding: 30px;
  z-index: 100;
  width: 230px;
  right: 0.0001px;
`;
export default Header;
