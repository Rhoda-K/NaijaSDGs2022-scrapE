import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button";
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

const BvnDetails = () => {
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <PageTitle bottom="3rem" color={colors.lightGreen}>Complete your registration</PageTitle>
      <Text bottom="3rem">
        This step is crucial to verify your identity and ensure smooth payment
      </Text>

      <TextInputWithLabel
        label="National Identification Number (NIN)"
        placeholder="Enter your NIN"
        bottom="3rem"
      />
      <TextInputWithLabel
        label="BVN"
        placeholder="Enter your bank verification number"
        bottom="3rem"
      />
      <TextInputWithLabel
        label="Account Number"
        placeholder="Enter your account number for payment"
        bottom="5rem"
      />
      <FlexRowCentered>
        <Button width="20rem" onClick={() => navigate("/sell")}>
          Complete Registration
        </Button>
      </FlexRowCentered>
    </ScreenContainer>
  );
};

export default BvnDetails;
