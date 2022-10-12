import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../../styles/variables";
import { Text } from "../containers/MesssageContainers";

const DisplayIcon = styled.img`
  align-items: center;
`;

const NavIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 56px;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: #718596;
  &.active {
    color: ${colors.lightGreen};
    font-weight: 700;
  }
`;

export const NavigationElement = ({
  text,
  nonActiveIcon,
  activeIcon,
  onClick,
  clickState,
  link,
  currentLink,
}) => {
  return (
    <NavIcon
      to={link ? link : currentLink}
      onClick={onClick || null}
      activeclassname="active"
      exact={"true"}
      className={link === currentLink || clickState ? "active" : ""}
    >
      <DisplayIcon
        src={link === currentLink || clickState ? activeIcon : nonActiveIcon}
        alt={`${text} icon`}
      />
      <Text
        size="1rem"
        color={
          link === currentLink || clickState ? colors.lightGreen : colors.grey2
        }
      >
        {text}
      </Text>
    </NavIcon>
  );
};
