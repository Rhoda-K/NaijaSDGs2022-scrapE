import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Declutter, SplashScreen, Earn, Ease, Login, Register } from "./pages";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 36rem;
  overflow-x: hidden;
  height: 100vh;
  /* padding-top: 1.94rem; */
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/splash-one" element={<Declutter />} />
          <Route path="/splash-two" element={<Earn />} />
          <Route path="/splash-three" element={<Ease />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
