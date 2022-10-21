import Header from "../../components/header";
import PublicPage from "../../view/public";
import Footer from "../../components/footer";

import styled from "styled-components";
const Wrapper = styled.div`
  padding: 24px;
`;

const WrapperContent = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1280px;
`;
const PublicLayout = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <Header />
        <PublicPage />
        <Footer />
      </WrapperContent>
    </Wrapper>
  );
};
export default PublicLayout;
