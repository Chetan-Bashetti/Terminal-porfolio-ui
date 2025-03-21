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
	@media only screen and (max-width: 889px) {
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
	border-radius: 1em;
	line-height: 2;
	letter-spacing: 1px;
	color: #5f6f81;
	line-height: 1.4;
	margin-bottom: 1em;
	text-align: left;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 700px) {
		padding: 2em;
	}
`;

const EachWork = styled.div`
	background-color: white;
	border-radius: 15px;
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	-webkit-box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
	box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
	border: 1px solid #eee;
	display: flex;
	flex-direction: row;
	margin: 1em;
	text-align: center;
	transition: all 0.3s ease-in;
	&:hover {
		box-shadow: 5px 14px 28px rgb(134 151 168 / 20%);
	}
	@media only screen and (min-width: 700px) {
		flex-direction: row;
		padding: 1em;
	}
	@media only screen and (max-width: 699px) {
		flex-direction: column;
		margin: 1em;
	}
	@media only screen and (max-width: 399px) {
		flex-direction: column;
	}
`;

const WorkInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1em;
`;

const WorkLabel = styled.div`
	font-size: 1.2em;
	text-transform: uppercase;
	color: black;
	letter-spacing: 1px;
	text-align: left;
	font-weight: 500;
	@media only screen and (max-width: 699px) {
		margin-top: 1em;
	}
`;

const WorkTeck = styled.div`
	font-size: 1em;
	text-align: left;
	display: flex;
	@media only screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

const TitleLabel = styled.div`
	font-size: 1em;
	text-align: left;
`;

const HigjlightLabel = styled.div`
	font-size: 1em;
	text-align: left;
	margin: 1em 0em;
	color: darkslategray;
`;

const HigjlightsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

const EachHighlight = styled.div`
	font-size: 0.8em;
	color: darkslategray;
	letter-spacing: 0.5px;
`;

const EachLink = styled.a`
	margin: 1em;
`;

const LinksWrapper = styled.div`
	display: flex;
	margin-bottom: 1em;
`;

const GitHubLink = styled.div`
	text-align: center;
`;

const Work = ({ viewMode }) => {
	const skills = [
		{
			label: 'React form builder',
			img: 'react-form-builder.png',
			tech: 'React Js',
			highlights: [
				'This form builder can help user to build a form with multiple questions',
				'Questions can be of multiple choice, YES or NO, Multiple types',
				'Used Material-ui for components'
			],
			links: { git: 'https://github.com/Chetan-Bashetti/react-form-builder' }
		},
		{
			label: 'Car wash react web application',
			img: 'carwash-web.png',
			tech: 'React Js, NodeJs, ExpressJs, Styled Components',
			highlights: [
				'This is built using React js and styled components',
				'API/services are created using NodeJS/expressJs',
				'Contains User auth login/signup',
				'Conatins role based access',
				'Routes based component switching using react router'
			],
			links: {
				git: 'https://github.com/Chetan-Bashetti/carwash-web',
				live: 'https://carwash-web.netlify.app/'
			}
		},
		{
			label: 'Car wash mobile application',
			img: 'carwash-mobile.jpg',
			tech: 'React Native, NodeJs, ExpressJs',
			highlights: [
				'This is built using React Native for Android and IOS',
				'API/services are created using NodeJS/expressJs',
				'Contains User auth login/signup',
				'Conatins role based access',
				'Routes based component switching using react navigation 6'
			]
		}
	];
	return (
		<Wrapper id='work'>
			<AboutWrapper>
				<Title>
					<TitleText>My</TitleText>
					<div style={{ color: viewMode && 'darkgray' }}>work</div>
				</Title>
				<DevBrief>
					{skills?.map((eachSkill, id) => (
						<EachWork key={id}>
							<img
								src={require(`../../../assets/${eachSkill.img}`)}
								alt={eachSkill.label}
								style={{
									height: 250,
									border: '1px solid lightgray',
									borderRadius: '10px'
								}}
							/>
							<WorkInfo>
								<WorkLabel>{eachSkill.label}</WorkLabel>
								<WorkTeck>
									<TitleLabel>Teachnologies used - </TitleLabel>{' '}
									<WorkTeck>{eachSkill.tech}</WorkTeck>
								</WorkTeck>
								<HigjlightLabel>Highlights</HigjlightLabel>
								<HigjlightsWrapper>
									{eachSkill?.highlights?.map((each, id) => (
										<EachHighlight key={id}> * {each}</EachHighlight>
									))}
								</HigjlightsWrapper>

								<LinksWrapper>
									{eachSkill?.links?.git ? (
										<EachLink href={eachSkill?.links?.git} target='_blank'>
											Repo
										</EachLink>
									) : (
										''
									)}
									{eachSkill?.links?.live ? (
										<EachLink href={eachSkill?.links?.live} target='_blank'>
											Live
										</EachLink>
									) : (
										''
									)}
								</LinksWrapper>
							</WorkInfo>
						</EachWork>
					))}
					<GitHubLink>
						Visit my{' '}
						<span>
							<a
								href='https://github.com/Chetan-Bashetti'
								target='_blank'
								rel='noopener noreferrer'
							>
								github
							</a>
						</span>{' '}
						account to explore more of awesome work
					</GitHubLink>
				</DevBrief>
			</AboutWrapper>
		</Wrapper>
	);
};

export default Work;
