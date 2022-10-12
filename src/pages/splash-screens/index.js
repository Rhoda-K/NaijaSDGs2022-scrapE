import React, { useEffect } from "react";
import { CenteredContainer } from "../../components/containers/ScreenContainers";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import colors from "../../styles/variables";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      navigate("/splash-one");
    }, 2000);

    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <CenteredContainer height="100vh" bgColor={colors.green}>
      <Logo />
    </CenteredContainer>
  );
};

export default SplashScreen;
