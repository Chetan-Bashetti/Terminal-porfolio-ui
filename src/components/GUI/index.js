import React from 'react';
import styled from 'styled-components';

import Sidebar from './SideBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Work from './Work';

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	background: #f7f7f7;
	font-family: 'Lato', sans-serif;
	@media only screen and (max-width: 1340px) {
		flex-direction: column-reverse;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	display: block;
	overflow: auto;
`;

const SwicthButton = styled.div`
	border: none;
	background: black;
	color: limegreen;
	padding: 0.5em 1em;
	border-radius: 2px;
	position: absolute;
	right: 10px;
	top: 10px;
	text-transform: uppercase;
	cursor: pointer;
	font-family: monospace;
	font-size: 1.2em;
	@media only screen and (max-width: 699px) {
		right: 0px;
		top: 0px;
		width: 100%;
		padding: 1em;
	}
`;

const GuiPortal = ({ setSiteState }) => {
	return (
		<Wrapper>
			<Sidebar setSiteState={setSiteState} />
			<ContentWrapper>
				<SwicthButton
					onClick={() => {
						setSiteState('terminal');
					}}
				>
					Switch to terminal _&gt;
				</SwicthButton>
				<Home />
				<About />
				<Skills />
				<Work />
				<Contact />
			</ContentWrapper>
		</Wrapper>
	);
};

export default GuiPortal;
