import React from "react";

import styled from "styled-components";

import { Text } from "../containers/MesssageContainers";

const Container = styled.div`
  position: relative;
  border: 1px dashed;
  height: 19.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
`;

const Label = styled(Text)`
  position: absolute;
  width: 80%;
  text-align: center;
`;

const UploadButton = styled.label`
  height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 10;

  & > input {
    /* height: 0; */
    /* width: 0; */
    overflow: hidden;
    background: transparent;
    opacity: 0;
  }
`;

const UploadFile = ({onChange}) => {
  return (
    <Container>
      <Label>Drag and drop or click to upload file here</Label>
      <UploadButton>
        <input
          type="file"
          id="uploadSheet"
          // accept={accept}
          accept={".jpg, .jpeg"}
          onChange={onChange}
          // onChange={(event) => {
          //     if (event.target.files[0].size >= 100000000) {
          //         toast.error('File size cannot be more than 10MB');
          //         return;
          //     } else {
          //         handleFile(event);
          //     }
          // }}
        />
      </UploadButton>
    </Container>
  );
};

export default UploadFile;
