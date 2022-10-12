import React from "react";
import {
  CenteredContainer,
  ScreenContainer,
} from "../../../components/containers/ScreenContainers";

import { ReactComponent as SuccessMark } from "../../../assets/icons/success-mark.svg";
import {
  PageTitle,
  Text,
} from "../../../components/containers/MesssageContainers";
import { Button } from "../../../components/button";
import colors from "../../../styles/variables";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
    const navigate = useNavigate();
  return (
    <ScreenContainer>
      <CenteredContainer direction="column">
        <SuccessMark />
        <PageTitle color={colors.lightGreen} top='4.6rem' bottom='2.4rem'>Registration Successful!</PageTitle>
        <Text bottom='9rem' align='center'>
          Proceed to verify your identity This stage will require your BVN. We
          only need this to confirm your identity. scrapE doesnt have access to
          your to bank information
        </Text>
        <Button width='20rem' onClick={() => navigate('/account-info')}>Get me started</Button>
      </CenteredContainer>
    </ScreenContainer>
  );
};

export default RegisterSuccess;
