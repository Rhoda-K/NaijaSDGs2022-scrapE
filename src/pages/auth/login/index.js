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

const Login = () => {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <PageTitle color={colors.lightGreen}>Good to see you're back!</PageTitle>
      <Text color={colors.grey2}>Please Login to your account</Text>

      <TextInputWithLabel
        placeholder="0812345678"
        label="Phone number"
        top="5.4rem"
      />
      <TextInputWithLabel
        placeholder="Password"
        label="Password"
        type="password"
        top="3.1rem"
      />
      <Text align="right" size="1.333rem">
        Forgot password?
      </Text>

      <FlexRowCentered top="6rem" bottom="3.7rem">
        <Button width="200px" onClick={() => navigate("/sell")}>
          Login
        </Button>
      </FlexRowCentered>
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
      <FlexRowCentered top="5.8rem">
        <Text align="center">Dont have an account?</Text>
        <Text
          align="center"
          onClick={() => navigate("/register")}
          color={colors.lightGreen}
        >
          Sign Up
        </Text>
      </FlexRowCentered>
    </ScreenContainer>
  );
};

export default Login;
