import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 3em;
	justify-content: center;
	color: #5f6f81;
	line-height: 1.4;
`;

const ContactWrapper = styled.div`
	display: flex;
	padding: 1em;
`;
const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (max-width: 599px) {
		flex-direction: column;
	}
`;

const Links = styled.div`
	display: flex;
	margin-left: 2em;
	@media only screen and (max-width: 599px) {
		margin-left: 0em;
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
	@media only screen and (max-width: 599px) {
		margin-top: 1em;
	}
`;

const Contact = () => {
	return (
		<Wrapper id='contact'>
			<ContactWrapper>
				<LinksWrapper>
					<div>Connect with me</div>
					<Links>
						<EachLink href='https://github.com/Chetan-Bashetti' target='_blank'>
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
						{/* <EachLink href='https://twitter.com/CBashetti' target='_blank'>
							<img
								src={require('../../../assets/icons/twitter.svg')}
								alt='twitter'
								style={{ width: 20 }}
							/>
						</EachLink> */}
						<EachLink href='mailto:chetankb619@gmail.com' target='_blank'>
							<img
								src={require('../../../assets/icons/mail.svg')}
								alt='twitter'
								style={{ width: 20 }}
							/>
						</EachLink>
					</Links>
				</LinksWrapper>
			</ContactWrapper>
		</Wrapper>
	);
};

export default Contact;
