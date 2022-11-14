import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const HeaderTextWrapper = styled.div`
  text-decoration: underline;
  line-height: 2.5;
`;

const Command = styled.div``;

const Commands = () => {
  const [commands] = useState([
    "about",
    "experience",
    "education",
    "contact",
    "social-links",
    "skills",
    "exit",
    "clear",
  ]);
  return (
    <Wrapper>
      <HeaderTextWrapper>Some important commands</HeaderTextWrapper>
      <Wrapper>
        {commands.length > 0 &&
          commands.map((eachCommand, id) => {
            return (
              <Command key={id}>
                {id + 1}) {eachCommand}
              </Command>
            );
          })}
      </Wrapper>
    </Wrapper>
  );
};
export default Commands;
