import styled from "styled-components";

export const ScreenContainer = styled.div`
  padding: 6.5rem 1.6rem;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor || null};
  /* width: 100%; */
`;

const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor || null};
  border-radius: ${({ radius }) => radius || null};
  border: ${({ border }) => border || null};
  padding: ${({ padding }) => padding || null};
  height: ${({ height }) => height || null};
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || null};
`;

export const CentredBox = styled(Container)`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  align-items: center;
`;

export const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "row"};
`;

export const FlexCentredRow = styled(Container)`
  display: flex;
  /* flex-row */
  align-items: center;
`;

export const FlexCentredCol = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FlexRowSpaceBetween = styled(FlexCentredRow)`
  justify-content: space-between;
`;

export const FlexRowCentered = styled(FlexCentredRow)`
  justify-content: center;
`;

export const FlexColCentered = styled(FlexCentredCol)`
  align-items: center;
`;

export const FlexDiv = styled(Container)`
  display: flex;
`;

export const FlexColumn = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const FlexRowEnd = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
