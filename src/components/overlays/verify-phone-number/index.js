import React, { useEffect, useState } from "react";

import OtpInput from "react-otp-input";

import styled from "styled-components";
import colors from "../../../styles/variables";
import ModalOverlay from "../modal-overlay";

import { Text } from "../../containers/MesssageContainers";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border: 1px solid ${colors.yellow};
  position: relative;
  padding: 9rem 1.6rem 12rem;
  width: calc(36rem - 32px);
  background-color: white;
  z-index: 150;
  border-radius: 6px;
`;

const VerifyPhoneNumberOverlay = ({ openModal, onClose, phoneNumber }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    otp.length === 4 && navigate("/register-success");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  return (
    <ModalOverlay openModal={openModal} onClose={onClose}>
      <Container>
        <Text bottom="3.6rem" color={colors.lightGreen}>
          Verify your Phone number
        </Text>
        <Text bottom="0.3rem">Enter code sent to: </Text>
        <Text bottom="0.3rem">{phoneNumber}</Text>
        <Text bottom="6.8rem" color={colors.brown} onClick={onClose}>
          Edit phone number
        </Text>
        <OtpInput
          value={otp}
          onChange={(otp) => setOtp(otp)}
          numInputs={4}
          inputStyle={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "4px",
            height: "44px",
            width: "66px",
            marginRight: "1rem",
          }}
          //   separator={<span>-</span>}
        />
      </Container>
    </ModalOverlay>
  );
};

export default VerifyPhoneNumberOverlay;
