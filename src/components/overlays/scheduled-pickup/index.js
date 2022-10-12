import React from "react";

import styled from "styled-components";
import colors from "../../../styles/variables";
import ModalOverlay from "../modal-overlay";

import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { CenteredContainer } from "../../containers/ScreenContainers";
import { Text } from "../../containers/MesssageContainers";
import { Button } from "../../button";

const Container = styled.div`
  border: 1px solid ${colors.yellow};
  border-radius: 20px;
  position: relative;
  padding: 13rem 0 2rem;
  width: calc(36rem - 32px);
  background-color: white;
  z-index: 1000;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const ScheduledPickupOverlay = ({ openModal, onClose }) => {
  return (
    <ModalOverlay openModal={openModal} onClose={onClose}>
      <Container>
        <Close />
        <CenteredContainer direction="column">
          <Text bottom="4.3rem">You have scheduled a pick up</Text>
          <Text bottom="4.3rem">Your scrap is worth #5000</Text>
          <Button bottom="2.1rem" width="20rem">
            Add more items
          </Button>
          <Button
            bgColor="#fff"
            color={colors.grey2}
            border={`1px solid ${colors.yellow}`}
            width="20rem"
          >
            Go to transactions
          </Button>
        </CenteredContainer>
      </Container>
    </ModalOverlay>
  );
};

export default ScheduledPickupOverlay;
