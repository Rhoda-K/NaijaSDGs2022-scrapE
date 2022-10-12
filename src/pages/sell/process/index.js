import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/button";
import {
  PageTitle,
  Text,
} from "../../../components/containers/MesssageContainers";
import {
  FlexDiv,
  FlexRowCentered,
  FlexRowSpaceBetween,
  ScreenContainer,
} from "../../../components/containers/ScreenContainers";
import TextInputWithLabel from "../../../components/inputs/textinput";
import Navigation from "../../../components/navigation";
import UploadFile from "../../../components/upload-file";
import colors from "../../../styles/variables";
import upload from "../../../assets/images/upload.svg";
import ScheduledPickupOverlay from "../../../components/overlays/scheduled-pickup";
const TabContainer = styled.div`
  border: none;
  border-bottom: ${({ showBorder }) =>
    showBorder ? `3px solid ${colors.lightGreen}` : "none"};
  padding: 3rem 3rem 2.5rem;
`;

const Line = styled.hr`
  height: 1px;
  background-color: #000;
  margin-top: -0px;
  margin-bottom: 4.7rem;
`;

const Image = styled.img`
  width: 100%;
`;

const ProcessSale = () => {
  const [currentTab, setCurrentTab] = useState("Details");
  const [showUpload, setShowUpload] = useState(false);
  const [showScheduledSuccess, setShowScheduledSuccess] = useState(false);
  return (
    <>
      <ScreenContainer>
        <PageTitle bottom="">Sell scrap in 2 quick steps</PageTitle>

        <FlexRowSpaceBetween>
          <TabContainer
            onClick={() => setCurrentTab("Details")}
            showBorder={currentTab === "Details"}
          >
            <Text>Details</Text>
          </TabContainer>
          <TabContainer
            onClick={() => setCurrentTab("Pick-up")}
            showBorder={currentTab === "Pick-up"}
          >
            <Text>Pick-up</Text>
          </TabContainer>
        </FlexRowSpaceBetween>
        <Line />

        {currentTab === "Details" && (
          <>
            <TextInputWithLabel
              label="Weight in kg"
              placeholder="Enter a minimum of 2kg"
            />
            <Text top="4.8rem" bottom="8px">
              Upload Image of Items
            </Text>
            {showUpload ? (
              <Image src={upload} alt="plastic" />
            ) : (
              <UploadFile onChange={() => setShowUpload(true)} />
            )}

            <FlexRowSpaceBetween gap={"3rem"} top="7.6rem">
              <Button onClick={() => setShowUpload(false)}>Delete Image</Button>
              <Button
                bgColor="#fff"
                color={colors.grey2}
                border={`1px solid ${colors.yellow}`}
                onClick={() => setCurrentTab("Pick-up")}
              >
                Next
              </Button>
            </FlexRowSpaceBetween>
          </>
        )}
        {currentTab === "Pick-up" && (
          <>
            <TextInputWithLabel
              label={"Your address"}
              placeholder={"Enter pickup location"}
              bottom="4rem"
            />
            <TextInputWithLabel
              label={"Preferred date"}
              placeholder={""}
              type="date"
              bottom="4rem"
            />
            <FlexRowSpaceBetween>
              <TextInputWithLabel
                label={"Preferred time"}
                placeholder={"06:00"}
                width="15rem"
              />
              <FlexDiv style={{ alignSelf: "flex-end" }}>
                <Button
                  bgColor="#fff"
                  color={colors.grey2}
                  border={`1px solid ${colors.yellow}`}
                  width="64px"
                  height="4rem"
                >
                  AM
                </Button>
                <Button
                  bgColor="#fff"
                  color={colors.grey2}
                  border={`1px solid ${colors.yellow}`}
                  width="64px"
                  height="4rem"
                >
                  PM
                </Button>
              </FlexDiv>
            </FlexRowSpaceBetween>
            <FlexRowCentered>
              <Button
                top="7rem"
                width="29rem"
                onClick={() => setShowScheduledSuccess(true)}
              >
                Schedule pick up
              </Button>
            </FlexRowCentered>
            <Text align="center" top="3rem">
              Want to drop off yourself? Save and chat with customer service
            </Text>
          </>
        )}
        <ScheduledPickupOverlay
          openModal={showScheduledSuccess}
          onClose={() => setShowScheduledSuccess(false)}
        />
      </ScreenContainer>
      <Navigation />
    </>
  );
};

export default ProcessSale;
