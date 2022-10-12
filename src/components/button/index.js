import styled from "styled-components";
import colors from "../../styles/variables";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  background-color: ${({ bgColor }) => bgColor || colors.darkGreen};
  color: ${({ color }) => color || "#fff"};
  border-radius: ${({ radius }) => radius || "4px"};
  border: ${({ border }) => border || "none"};
  height: ${({ height }) => height || "4.8rem"};
  outline: none;
  font-size: 1.6rem;
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || 0};
  font-weight: ${({ weight }) => weight || 400};
  line-height: ${({ lineHeight }) => lineHeight || "inherit"};
  width: ${({ width }) => width || "100%"};
`;
