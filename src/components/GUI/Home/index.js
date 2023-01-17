import React from 'react';
import styled from 'styled-components';

import Pdf from 'assets/documents/chetan_bashetti.pdf';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	@media only screen and (min-width: 1340px) {
		height: 100vh;
	}
`;

const HomeWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (min-width: 1340px) {
		flex: 1;
	}
	@media only screen and (max-width: 1339px) {
		flex-direction: column;
		flex: 1;
		padding-top: 2em;
	}
	@media only screen and (max-width: 699px) {
		padding-top: 5em;
	}
`;

const DevDataWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: ${(props) => (props?.align ? props.align : '')};
	@media only screen and (min-width: 599px) {
		padding: 2em 0;
	}
	@media only screen and (max-width: 1339px) {
		align-items: center;
		padding: 1em;
	}
`;

const DevImage = styled.div`
	height: 350px;
	width: 350px;
	border-radius: 50%;
	box-shadow: 12px 0 #585858, 24px 0 #8f8f8f, 36px 0 #bcbcbc;
	@media only screen and (max-width: 1399px) {
		box-shadow: 24px 0 #585858, -24px 0 #8f8f8f;
	}
	@media only screen and (max-width: 1239px) {
		height: 250px;
		width: 250px;
	}
	@media only screen and (max-width: 889px) {
		height: 200px;
		width: 200px;
	}
`;

const DevInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 6em;
	text-align: left;
	@media only screen and (min-width: 599px) {
		width: 450px;
	}
	@media only screen and (max-width: 1239px) {
		padding-left: 0px;
	}
	@media only screen and (max-width: 889px) {
		padding-left: 0px;
	}
`;

const DevIntro = styled.div`
	letter-spacing: 1px;
	font-size: 1rem;
	line-height: 1.2;
	@media only screen and (max-width: 1339px) {
		text-align: center;
	}
`;

const DevName = styled.div`
	display: flex;
	text-transform: uppercase;
	font-size: 2.5rem;
	letter-spacing: 2px;
	margin: 24px 0;
	@media only screen and (max-width: 889px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const DevFirstName = styled.div`
	margin-left: 0.4em;
	color: darkgray;
	@media only screen and (max-width: 889px) {
		margin-left: 0px;
	}
`;

const DevAbout = styled.div`
	letter-spacing: 0.5px;
	color: #5f6f81;
	font-size: 1rem;
	min-width: 250px;
	line-height: 1.4;
	margin-bottom: 1em;
	@media only screen and (max-width: 599px) {
		text-align: center;
	}
`;

const DownloadResume = styled.button`
	background-color: #000000;
	padding: 15px 35px;
	border-radius: 40px;
	letter-spacing: 2px;
	font-size: 0.9rem;
	font-weight: 300;
	display: inline-block;
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	border: none;
	box-shadow: 1px 1px 9px lightgrey;
	color: white;
	cursor: pointer;
	&:hover {
		box-shadow: 5px 14px 28px rgb(134 151 168 / 20%);
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1em;
	@media only screen and (max-width: 1399px) {
		justify-content: center;
	}
	@media only screen and (max-width: 799px) {
		flex-direction: column;
	}
`;

const Links = styled.div`
	display: flex;
	margin-left: 2em;
	@media only screen and (max-width: 799px) {
		margin-left: 0em;
		margin-top: 1em;
	}
`;

const EachLink = styled.a`
	padding: 7px 10px;
	background-color: white;
	border-radius: 6px;
	border: 1px solid #eee;
	-webkit-box-shadow: 0px 4px 6px rgb(134 151 168 / 10%);
	box-shadow: 0px 4px 6px rgb(134 151 168 / 10%);
	-webkit-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
	display: inline-block;
	align-items: center;
	display: flex;
	margin: 0 0.5em;
	cursor: pointer;
	&:hover {
		box-shadow: 5px 14px 28px rgb(134 151 168 / 20%);
	}
`;

const Home = () => {
	return (
		<div id='home'>
			<Wrapper>
				<HomeWrapper>
					<DevDataWrapper align={'flex-end'}>
						<DevImage>
							<img
								src={require('../../../assets/chetan.jpeg')}
								alt='chetan k b'
								style={{
									borderRadius: '50%',
									height: 'inherit',
									width: 'inherit'
								}}
							/>
						</DevImage>
					</DevDataWrapper>
					<DevDataWrapper align={'flex-start'}>
						<DevInfo>
							<DevIntro>HEY THERE VISITOR, I'M</DevIntro>
							<DevName>
								<div>chetan</div>
								<DevFirstName>Bashetti</DevFirstName>
							</DevName>
							<DevAbout>
								Bangalore based{' '}
								<span
									style={{ color: 'black', textTransform: 'uppercase' }}
								></span>
								FRONT-END DEVELOPER, With 4 years of industry experience, I love
								to code, develop scalable user interfaces, and find solutions to
								complex problems
							</DevAbout>
							<LinksWrapper>
								<a href={Pdf} rel='noopener noreferrer' target='_blank'>
									<DownloadResume>Resume</DownloadResume>
								</a>

								<Links>
									<EachLink
										href='https://github.com/Chetan-Bashetti'
										target='_blank'
									>
										<img
											src={require('../../../assets/icons/github.svg')}
											alt='twitter'
											style={{ width: 20 }}
										/>
									</EachLink>
									<EachLink
										href='https://www.linkedin.com/in/chetan-bashetti/'
										target='_blank'
									>
										<img
											src={require('../../../assets/icons/linkedin.svg')}
											alt='twitter'
											style={{ width: 20 }}
										/>
									</EachLink>
									{/* <EachLink
										href='https://twitter.com/CBashetti'
										target='_blank'
									>
										<img
											src={require('../../../assets/icons/twitter.svg')}
											alt='twitter'
											style={{ width: 20 }}
										/>
									</EachLink> */}
								</Links>
							</LinksWrapper>
						</DevInfo>
					</DevDataWrapper>
				</HomeWrapper>
			</Wrapper>
		</div>
	);
};

export default Home;
