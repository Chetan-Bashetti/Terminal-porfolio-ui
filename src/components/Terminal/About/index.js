import React from 'react';
import styled from 'styled-components';

import ProfileImg from './partials/ProfileImg';

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	padding: 1em;
	margin: 0.5em 0;
	border: 1px solid;
	width: fit-content;
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 290px;
	padding-left: 1em;
`;
const ProfileName = styled.div`
	font-size: 2em;
`;

const ProfileText = styled.div`
	margin-top: 0.5em;
`;

const About = ({ about = {} }) => {
	return (
		<Wrapper>
			<ProfileImg src={require('assets/chetan.jpeg')} />
			<ProfileInfo>
				<ProfileName>{about.name}</ProfileName>
				<ProfileText>
					{about.desg} {about.location}
				</ProfileText>
			</ProfileInfo>
		</Wrapper>
	);
};
export default About;
