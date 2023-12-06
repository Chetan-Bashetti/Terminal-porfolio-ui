import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
`;

const AboutWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	@media only screen and (min-width: 900px) {
		margin: 4em;
	}
	@media only screen and (max-width: 899px) {
		margin: 1em;
	}
`;

const Title = styled.div`
	display: flex;
	text-transform: uppercase;
	font-size: 2.5rem;
	letter-spacing: 2px;
	margin: 24px 0;
	@media only screen and (max-width: 1339px) {
		justify-content: center;
		margin-top: 2em;
	}
`;

const TitleText = styled.div`
	margin-right: 0.4em;
	color: darkgray;
`;

const DevBrief = styled.div`
	background: white;
	padding: 2em;
	border-radius: 1em;
	line-height: 2;
	letter-spacing: 0.5px;
	color: #5f6f81;
	font-size: 1.2rem;
	min-width: 250px;
	line-height: 1.4;
	margin-bottom: 1em;
	text-align: center;
`;

const About = () => {
	return (
		<Wrapper id='about'>
			<AboutWrapper>
				<Title>
					<TitleText>About</TitleText>
					<div>Me</div>
				</Title>
				<DevBrief>
					I started my carrier as a{' '}
					<span style={{ color: 'black', textTransform: 'uppercase' }}>
						Front-End developer
					</span>{' '}
					in 2018 in a Bangalore based startup, Since then I have worked on
					multiple domains like pharmacy, EdTech, eCommerce, and Online
					portfolio management systems and got the opportunity to work on
					websites, web applications, and native mobile applications, Since
					development is a continues process of learning I learned few of the
					back-end technology's like expressJs, NodeJs, and MongoDB
				</DevBrief>
			</AboutWrapper>
		</Wrapper>
	);
};

export default About;
