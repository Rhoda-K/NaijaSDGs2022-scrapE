import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
import { ReactComponent as LineIcon } from "../../../assets/icons/line.svg";
import { ReactComponent as Line2Icon } from "../../../assets/icons/line2.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as AppleIcon } from "../../../assets/icons/apple.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";

import {
  PageTitle,
  Text,
} from "../../../components/containers/MesssageContainers";

import {
  FlexRowCentered,
  ScreenContainer,
} from "../../../components/containers/ScreenContainers";
import TextInputWithLabel from "../../../components/inputs/textinput";
import colors from "../../../styles/variables";

const Register = () => {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <PageTitle color={colors.lightGreen}>Register Your Account</PageTitle>

      <TextInputWithLabel
        label="Full name"
        placeholder="John Doe"
        top="3.5rem"
      />
      <TextInputWithLabel
        label="Email address"
        placeholder="example@gmail.com"
        top="2.2rem"
      />
      <TextInputWithLabel
        label="Phone number"
        placeholder="e.g +2348183000085"
        top="2.2rem"
      />
      <TextInputWithLabel
        label="Password"
        placeholder="At least 8 characters"
        type="password"
        top="2.2rem"
      />
      <TextInputWithLabel
        label="Confirm Password"
        placeholder="Enter password again"
        type="password"
        top="2.2rem"
      />

      <FlexRowCentered top="3rem" bottom=".9rem">
        <Button width="200px" onClick={() => navigate("")}>
          Next
        </Button>
      </FlexRowCentered>
      <Text size="1rem" bottom='3.1rem'>
        By continuing, you agree with our Terms of Service and Privacy Policy
      </Text>
      <FlexRowCentered>
        <LineIcon />
        <Text size="1.1rem" align="center">
          Or Sign in with
        </Text>
        <Line2Icon />
      </FlexRowCentered>

      <FlexRowCentered style={{ gap: "3rem" }} top="2.5rem">
        <GoogleIcon />
        <AppleIcon />
        <FacebookIcon />
      </FlexRowCentered>
    </ScreenContainer>
  );
};

export default Register;
