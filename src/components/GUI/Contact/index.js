import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LinkedInSvg } from 'assets/icons/linkedin.svg';
import { ReactComponent as MailSvg } from 'assets/icons/mail.svg';
import { ReactComponent as GitHubSvg } from 'assets/icons/github.svg';

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
	flex-direction: column;
`;
const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Links = styled.div`
	display: flex;
	margin-bottom: 2em;
	flex-wrap: wrap;
	justify-content: center;
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
	margin-top: 1em;
`;

const EachLinkContact = styled(EachLink)`
	color: #007acc;
	text-decoration: none;
`;

const Contact = () => {
	return (
		<Wrapper id='contact'>
			<ContactWrapper>
				<LinksWrapper>
					<div>Got an exiting offer for me? let's discuss over a call</div>
					<Links>
						<EachLinkContact href='tel:+600189474651' target='_blank'>
							Malaysia: +60 018 9474 651
						</EachLinkContact>
						<EachLinkContact href='tel:+918495011619' target='_blank'>
							India: +91 8495011619
						</EachLinkContact>
					</Links>
				</LinksWrapper>

				<LinksWrapper>
					<div>Connect with me</div>
					<Links>
						<EachLink href='https://github.com/Chetan-Bashetti' target='_blank'>
							<GitHubSvg style={{ width: 20 }} />
						</EachLink>
						<EachLink
							href='https://www.linkedin.com/in/chetan-bashetti/'
							target='_blank'
						>
							<LinkedInSvg style={{ width: 20 }} />
						</EachLink>
						<EachLink href='mailto:chetankb619@gmail.com' target='_blank'>
							<MailSvg style={{ width: 20 }} />
						</EachLink>
					</Links>
				</LinksWrapper>
			</ContactWrapper>
		</Wrapper>
	);
};

export default Contact;
