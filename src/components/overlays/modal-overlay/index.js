import React from "react";

import styled from "styled-components";

const Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.7); */
  position: fixed;
  z-index: 100;
  inset: 0;
`;

const InnerCont = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: ${({ position }) => position || "fixed"};
  top: ${({ top }) => top || "0"};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  min-height: ${({ minHeight }) => minHeight || "100%"};
  max-width: inherit;
  z-index: ${({ zIndex }) => zIndex || "99"};
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease-in;
  @media (min-width: 576px) {
    margin: auto;
    max-width: 375px;
    width: 100%;
  }
`;

export default function ModalOverlay({ openModal, onClose, children }) {
  if (!openModal) return null;

  return (
    <Container>
      <Overlay onClick={onClose} />
      <InnerCont>{children}</InnerCont>
    </Container>
  );
}
