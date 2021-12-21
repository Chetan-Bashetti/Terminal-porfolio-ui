import React from 'react';
import styled from 'styled-components';

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

const Experiance = ({ experinace = [] }) => {
	return (
		<>
			{experinace?.map((eachExp, id) => (
				<Wrapper key={id}>
					<Title>{eachExp.org}</Title>
					<CourseDescription>
						{eachExp.desg}, {eachExp.period}
					</CourseDescription>
				</Wrapper>
			))}
		</>
	);
};
export default Experiance;
