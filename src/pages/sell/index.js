import React from "react";
import styled from "styled-components";

import {
  PageTitle,
  Text,
} from "../../components/containers/MesssageContainers";
import {
  FlexColumn,
  FlexDiv,
  ScreenContainer,
} from "../../components/containers/ScreenContainers";
import TextInputWithLabel from "../../components/inputs/textinput";
import Navigation from "../../components/navigation";
import colors from "../../styles/variables";
import electronics from "../../assets/images/electronics.svg";
import plastic from "../../assets/images/plastic.svg";
import cans from "../../assets/images/cans.svg";
import metal from "../../assets/images/metal.svg";
import parts from "../../assets/images/car-parts.svg";
import nylon from "../../assets/images/nylon.svg";
import { useNavigate } from "react-router-dom";

const Image = styled.img``;

const Sell = () => {
  const navigate = useNavigate();
  return (
    <>
      <ScreenContainer>
        <TextInputWithLabel
          placeholder="Search categories of items to sell"
          // value={}
        />
        <PageTitle top="4.6rem" bottom="4.6rem" color={colors.lightGreen}>
          Select category
        </PageTitle>

        <FlexDiv style={{ gap: "2rem" }} bottom="4.8rem">
          <FlexColumn>
            <Image
              alt="electronics"
              onClick={() => navigate("/process")}
              src={electronics}
            />
            <Text top="8px" bottom="2px">
              Electronics
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
          <FlexColumn>
            <Image
              alt="plastic"
              onClick={() => navigate("/process")}
              src={plastic}
            />
            <Text top="8px" bottom="2px">
              Plastic
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
        </FlexDiv>
        <FlexDiv style={{ gap: "2rem" }} bottom="4.8rem">
          <FlexColumn>
            <Image alt="cans" onClick={() => navigate("/process")} src={cans} />
            <Text top="8px" bottom="2px">
              Cans
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
          <FlexColumn>
            <Image
              alt="nylon"
              onClick={() => navigate("/process")}
              src={nylon}
            />
            <Text top="8px" bottom="2px">
              Nylon
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
        </FlexDiv>
        <FlexDiv style={{ gap: "2rem" }}>
          <FlexColumn>
            <Image alt="metal" onClick={() => navigate("/process")} src={metal} />
            <Text top="8px" bottom="2px">
              Metal
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
          <FlexColumn>
            <Image
              alt="car parts"
              onClick={() => navigate("/process")}
              src={parts}
            />
            <Text top="8px" bottom="2px">
              Car Parts
            </Text>
            <Text weight="500">₦500/kg</Text>
          </FlexColumn>
        </FlexDiv>
      </ScreenContainer>
      <Navigation />
    </>
  );
};

export default Sell;
