import React, { useEffect } from "react";
import styled from "styled-components";

import Input from "./partials/Input";
import Button from "./partials/Button";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f7f71c;
`;

const ModalWrapper = styled.div`
  padding: 2em;
  box-shadow: 6px 6px;
  background: black;
`;

const ModalHeader = styled.div`
  font-size: 2em;
  margin-bottom: 1.5em;
`;
const ModalBody = styled.div``;

const ModalFooter = styled.div`
  margin-top: 2em;
`;

const Modal = ({
  visitor,
  handleVisitor,
  keyPress,
  onClickSubmit,
  closeModal,
}) => {
  useEffect(() => {
    document.getElementById("visitor").focus();
  });
  return (
    <Wrapper>
      <ModalWrapper>
        <ModalHeader>Hello there ! who is this ?</ModalHeader>
        <ModalBody>
          <Input
            value={visitor}
            onChange={handleVisitor}
            onKeyPress={keyPress}
            id="visitor"
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>cancle</Button>
          <Button onClick={onClickSubmit}>submit</Button>
        </ModalFooter>
      </ModalWrapper>
    </Wrapper>
  );
};
export default Modal;
