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

const Title = styled.div`
  font-size: 1.5em;
  margin-right: 0.5em;
`;

const CourseDescription = styled.div`
  line-height: 2;
`;

const Experiance = ({ experinace = {} }) => {
  return (
    <Wrapper>
      <Title>{experinace.org}</Title>
      <CourseDescription>
        {experinace.desg}, {experinace.period}
      </CourseDescription>
    </Wrapper>
  );
};
export default Experiance;
