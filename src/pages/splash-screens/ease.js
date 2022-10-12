import React from "react";
import styled from "styled-components";

import { CenteredContainer } from "../../components/containers/ScreenContainers";
import { ReactComponent as PageIcon } from "../../assets/images/ease.svg";
import {
  PageTitle,
  Text,
} from "../../components/containers/MesssageContainers";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { FlexCentredCol } from "../../components/containers/ScreenContainers";
import colors from "../../styles/variables";

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const ButtonContainer = styled(FlexCentredCol)`
  width: 20rem;
  gap: 3.5rem;
  margin-top: 10rem;
`;

const Ease = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <CenteredContainer direction="column" height="100%">
        <PageIcon />
        <PageTitle top="6.8rem">Ease.</PageTitle>
        <Text top="2.5rem" align="center" width="30.6rem">
          Pick up options available at your time and date
        </Text>
        <ButtonContainer>
          <Button color={colors.grey3} onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button
            bgColor={"#fff"}
            border={`1px solid ${colors.yellow}`}
            color={colors.grey}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </ButtonContainer>
      </CenteredContainer>
    </Container>
  );
};

export default Ease;
