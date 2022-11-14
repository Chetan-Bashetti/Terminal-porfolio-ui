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

const Skill = styled.div`
  line-height: 1.5;
`;

const Skills = ({ skills = [] }) => {
  return (
    <Wrapper>
      {skills &&
        skills.length > 0 &&
        skills.map((eachSkill, id) => {
          return (
            <Skill key={id}>
              {id + 1}) {eachSkill}
            </Skill>
          );
        })}
    </Wrapper>
  );
};
export default Skills;
