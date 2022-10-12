import React from "react";

import styled from "styled-components";
import { Text } from "../../containers/MesssageContainers";

const Container = styled.div`
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || null};
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  height: ${({ height }) => height || "4rem"};
  width: ${({ width }) => width || "100%"};
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 400;

  &::placeholder {
    /* font-size: 1.6rem ; */
  }
`;

const TextInputWithLabel = ({
  label,
  placeholder,
  value,
  handleChange,
  top,
  bottom,
  type = "text",
  width
}) => {
  return (
    <Container top={top} bottom={bottom}>
      <Text>{label}</Text>
      <Input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        width={width}
      />
    </Container>
  );
};

export default TextInputWithLabel;
