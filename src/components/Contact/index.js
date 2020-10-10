import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 1em;
  margin: 0.5em 0;
  border: 1px solid;
  width: fit-content;
  flex-direction: column;
`;

const ContactWrapper = styled.div`
  display: flex;
  padding: 0.2em 0;
`;
const ContactKey = styled.div``;

const ContactValue = styled.div`
  margin-left: 0.5em;
`;

const Contact = ({ contact = [] }) => {
  return (
    <Wrapper>
      {contact &&
        contact.length > 0 &&
        contact.map((eachContact, id) => (
          <ContactWrapper key={id}>
            <ContactKey>{eachContact.medium} :</ContactKey>
            <ContactValue>{eachContact.info}</ContactValue>
          </ContactWrapper>
        ))}
    </Wrapper>
  );
};
export default Contact;
