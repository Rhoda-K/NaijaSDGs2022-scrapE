import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { NavigationElement } from "../../components/navigation-element";

import ActiveSellIcon from "../../assets/icons/active_sell.svg";
import SellIcon from "../../assets/icons/sell.svg";
import HomeIcon from "../../assets/icons/home.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import TransactionsIcon from "../../assets/icons/transactions.svg";
import colors from "../../styles/variables";

export const FixedBottom = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: ${colors.green2};
  box-shadow: 0 1px 10px 0 #dddddd, 0 4px 5px 0 #23000000,
    0 2px 4px -1px #33000000;
  width: 36rem;
  height: 56px;
  justify-content: center;
  max-width: 36rem;
  z-index: ${({ zIndex }) => zIndex || 100};
`;

const NavigationWrapper = styled(FixedBottom)``;

const NavigationBar = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  max-height: 56px;
`;

const Navigation = () => {
  const route = useLocation();

  return (
    <Fragment>
      <NavigationWrapper>
        <NavigationBar>
          <NavigationElement
            link={"/"}
            currentLink={route.pathname}
            activeIcon={HomeIcon}
            nonActiveIcon={HomeIcon}
            text={"Home"}
          />

          <NavigationElement
            link={"/sell"}
            currentLink={route.pathname}
            activeIcon={ActiveSellIcon}
            nonActiveIcon={SellIcon}
            text={"Sell"}
          />

          <NavigationElement
            link={"/"}
            currentLink={route.pathname}
            activeIcon={TransactionsIcon}
            nonActiveIcon={TransactionsIcon}
            text={"Transactions"}
          />

          <NavigationElement
            link={"/profile"}
            currentLink={route.pathname}
            activeIcon={ProfileIcon}
            nonActiveIcon={ProfileIcon}
            text={"Profile"}
          />
        </NavigationBar>
      </NavigationWrapper>
    </Fragment>
  );
};

export default Navigation;
