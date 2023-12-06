import React from 'react';
import styled from 'styled-components';
import STORE from 'store';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
`;

const ExperienceWrapper = styled.div`
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
	text-align: left;
`;

const ExpMainWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2em 0;
	@media only screen and (max-width: 799px) {
		flex-direction: column;
	}
`;

const LogoContainer = styled.div`
	font-size: xxx-large;
	line-height: 0.9;
	font-family: 'Alumni Sans Collegiate One', sans-serif;
	@media only screen and (max-width: 799px) {
		margin-bottom: 0.5em;
	}
`;

const CompanyInfo = styled.div`
	margin: 0 2em;
	@media only screen and (max-width: 799px) {
		margin: 0;
		padding: 0em 0 2em 0;
		border-bottom: 1px solid #f5e8e8;
	}
`;

const CompanyName = styled.div`
	font-weight: 600;
	color: black;
`;

const CompanyWorkDesc = styled.div`
	margin-top: 1em;
`;

const CompanyWorkLocation = styled.div`
	font-size: small;
`;

const SubCompanyName = styled(CompanyName)`
	font-size: medium;
	font-weight: 500;
`;

const SubCompanyDesc = styled(CompanyName)`
	font-size: small;
	margin: 1em 0;
`;

const TechStackWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 0.5em;
`;

const TechStackTag = styled.div`
background-color: #000000;
padding: 7px 18px 9px;
border-radius: 20px;
box-shadow: 0px 4px 8px rgb(134 151 168 / 10%);
border: 1px solid #eee;
color: white;
}
`;

const Experience = () => {
	return (
		<Wrapper id='Experience'>
			<ExperienceWrapper>
				<Title>
					<TitleText>My</TitleText>
					<div>Experience</div>
				</Title>
				<DevBrief>
					{STORE?.experienceData.map((eachExp) => (
						<ExpMainWrapper>
							<LogoContainer>{eachExp.startYear}</LogoContainer>

							<CompanyInfo>
								<CompanyName>
									{eachExp.title} - {eachExp.companyName}
								</CompanyName>
								<CompanyWorkLocation>{eachExp.period}</CompanyWorkLocation>
								<CompanyWorkLocation>{eachExp.location}</CompanyWorkLocation>
								{eachExp.clients.map((eachClient) => (
									<CompanyWorkDesc>
										<SubCompanyName>{eachClient.clientName}</SubCompanyName>
										<SubCompanyDesc>
											Work - {eachClient.workDesc}
										</SubCompanyDesc>
										<SubCompanyDesc>
											Tech stack
											<TechStackWrapper>
												{eachClient?.techStack?.map((eachTech) => (
													<TechStackTag>{eachTech}</TechStackTag>
												))}
											</TechStackWrapper>
										</SubCompanyDesc>
									</CompanyWorkDesc>
								))}
							</CompanyInfo>
						</ExpMainWrapper>
					))}
				</DevBrief>
			</ExperienceWrapper>
		</Wrapper>
	);
};

export default Experience;
