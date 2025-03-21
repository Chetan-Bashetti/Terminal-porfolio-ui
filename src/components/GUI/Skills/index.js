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
	letter-spacing: 1px;
	color: #5f6f81;
	line-height: 1.4;
	margin-bottom: 1em;
	text-align: left;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const EachSkill = styled.div`
	background-color: white;
	padding: 15px 10px;
	border-radius: 15px;
	width: 70px;
	height: 60px;
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	-webkit-box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
	box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
	border: 1px solid #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 1em;
	text-align: center;

	transition: all 0.3s ease-in;
	&:hover {
		box-shadow: 5px 14px 28px rgb(134 151 168 / 20%);
	}
`;

const SkillLabel = styled.div`
	font-size: 0.8em;
	margin-top: 0.8em;
	font-weight: 700;
	letter-spacing: 0;
`;

const Skills = ({ viewMode }) => {
	const skills = [
		{
			label: 'HTML',
			img: 'html.svg'
		},
		{
			label: 'CSS',
			img: 'css.svg'
		},
		{
			label: 'JavaScript',
			img: 'javascript.svg'
		},
		{
			label: 'TypeScript',
			img: 'typescript.svg'
		},
		{
			label: 'React',
			img: 'react.svg'
		},
		{
			label: 'React Native',
			img: 'react.svg'
		},
		{
			label: 'VSCode',
			img: 'vscode.svg'
		},
		{
			label: 'NodeJs',
			img: 'nodejs.svg'
		},
		{
			label: 'ExpressJs',
			img: 'express.svg'
		},
		{
			label: 'Mongo DB',
			img: 'mongodb.svg'
		},
		{
			label: 'Git',
			img: 'git.svg'
		},
		{
			label: 'Jira',
			img: 'jira.svg'
		},
		{
			label: 'Netlify',
			img: 'netlify.svg'
		},
		{
			label: 'Hiroku',
			img: 'heroku.svg'
		}
	];
	return (
		<Wrapper id='skills'>
			<AboutWrapper>
				<Title>
					<TitleText>My</TitleText>
					<div style={{ color: viewMode && 'darkgray' }}>skills</div>
				</Title>
				<DevBrief>
					{skills?.map((eachSkill, id) => (
						<EachSkill key={id}>
							<img
								src={require(`../../../assets/icons/${eachSkill.img}`)}
								alt={eachSkill.label}
								style={{ height: 30 }}
							/>
							<SkillLabel>{eachSkill.label}</SkillLabel>
						</EachSkill>
					))}
				</DevBrief>
			</AboutWrapper>
		</Wrapper>
	);
};

export default Skills;
