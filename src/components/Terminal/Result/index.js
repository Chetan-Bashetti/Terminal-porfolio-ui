import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResultPrompt = styled.div`
  display: flex;
  flex-direction: column;
`;

const PromptCommand = styled.div``;

const PromptCompnent = styled.div``;

const Result = ({ components, user }) => {
  return (
    <Wrapper>
      {components &&
        components.length > 0 &&
        components.map((eachComponent, id) => {
          return (
            <ResultPrompt key={id}>
              <PromptCommand>
                {user ? user : "anonymous"}@chetan_dev_portal_>{" "}
                {eachComponent.command}
              </PromptCommand>
              <PromptCompnent>{eachComponent.component}</PromptCompnent>
            </ResultPrompt>
          );
        })}
    </Wrapper>
  );
};
export default Result;
