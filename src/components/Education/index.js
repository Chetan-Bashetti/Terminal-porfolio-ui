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

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0;
`;
const CourseName = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 1.5em;
  margin-right: 0.5em;
`;

const CourseDescription = styled.div`
  line-height: 2;
`;

const Education = ({ education = [] }) => {
  return (
    <Wrapper>
      {education &&
        education.length > 0 &&
        education.map((eachEducation, id) => {
          return (
            <EducationWrapper key={id}>
              <CourseName>
                <Title> {eachEducation.title}</Title> {eachEducation.timeline}
              </CourseName>
              <CourseDescription>{eachEducation.description}</CourseDescription>
            </EducationWrapper>
          );
        })}
    </Wrapper>
  );
};
export default Education;
