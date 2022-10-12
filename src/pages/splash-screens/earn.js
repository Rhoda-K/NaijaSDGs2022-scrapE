import React from "react";
import styled from "styled-components";

import {
  CenteredContainer,
  FlexRowSpaceBetween,
} from "../../components/containers/ScreenContainers";
import { ReactComponent as PageIcon } from "../../assets/images/earn.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/ellipsis2.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/right-arrow.svg";
import { PageTitle, Text } from "../../components/containers/MesssageContainers";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const ButtonContainer = styled(FlexRowSpaceBetween)`
  position: absolute;
  bottom: 4rem;
  left: 16px;
  right: 16px;
`;

const Earn = () => {
  return (
    <Container>
      <CenteredContainer direction="column" height="100%">
        <PageIcon />
        <PageTitle top="6.8rem">Earn.</PageTitle>
        <Text top="2.5rem" align="center" width="30.6rem">
          Sell your scrap and earn instant cash
        </Text>
        <EllipsisIcon style={{ marginTop: "10rem" }} />
      </CenteredContainer>
      <ButtonContainer>
        <Link to="/splash-three" style={{ textDecoration: "none" }}>
          <Text size="2.3rem">Skip</Text>
        </Link>
        <Link to="/splash-three" style={{ textDecoration: "none" }}>
          <ArrowIcon />
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default Earn;
