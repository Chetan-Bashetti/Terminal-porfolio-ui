import React, { useState } from 'react';
import styled from 'styled-components';

import Sidebar from './SideBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Work from './Work';
import Experiance from './Experience';

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	background: ${(props) =>
		props.viewMode === true ? 'var(--bg-color-dark)' : 'var(--bg-color-light)'};
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
	padding: 1em;
	position: absolute;
	right: 10px;
	bottom: 10px;
	text-transform: uppercase;
	cursor: pointer;
	font-family: monospace;
	font-size: 1.2em;
	border-radius: ${(props) => (props.radius ? props.radius : '')};
	@media only screen and (max-width: 699px) {
		right: 0px;
		bottom: 65px;
		padding: 1em;
		background: limegreen;
		color: black;
		height: fit-content;
	}
`;

const ViewModeWrapper = styled.div`
	position: absolute;
	top: 30px;
	right: 50px;
	cursor: pointer;
	@media only screen and (max-width: 699px) {
		right: 15px;
		top: 15px;
	}
`;

const GuiPortal = ({ setSiteState }) => {
	const [hovered, setHovered] = useState(false);
	const [viewMode, setViewMode] = useState(false);

	return (
		<Wrapper viewMode={viewMode}>
			<Sidebar setSiteState={setSiteState} />
			<ViewModeWrapper>
				{!viewMode ? (
					<span
						className='material-symbols-outlined'
						style={{
							transition: 'all 0.3s ease-in',
							fontSize: '2.5em',
							color: 'white',
							mixBlendMode: 'difference'
						}}
						onClick={() => setViewMode(true)}
					>
						dark_mode
					</span>
				) : (
					<span
						className='material-symbols-outlined'
						style={{
							transition: 'all 0.3s ease-in',
							fontSize: '2.5em',
							color: 'white',
							mixBlendMode: 'difference'
						}}
						onClick={() => setViewMode(false)}
					>
						light_mode
					</span>
				)}
			</ViewModeWrapper>
			<ContentWrapper>
				{hovered ? (
					<SwicthButton
						onClick={() => {
							setSiteState('terminal');
						}}
						onMouseOver={() => {
							setHovered(true);
						}}
						onMouseOut={() => {
							setHovered(false);
						}}
						radius='25px'
					>
						Switch to terminal _&gt;
					</SwicthButton>
				) : (
					<SwicthButton
						onClick={() => {
							setSiteState('terminal');
						}}
						onMouseOver={() => {
							setHovered(true);
						}}
						onMouseOut={() => {
							setHovered(false);
						}}
						radius='50%'
					>
						_&gt;
					</SwicthButton>
				)}

				<Home viewMode={viewMode} />
				<About viewMode={viewMode} />
				<Experiance viewMode={viewMode} />
				<Skills viewMode={viewMode} />
				<Work viewMode={viewMode} />
				<Contact viewMode={viewMode} />
			</ContentWrapper>
		</Wrapper>
	);
};

export default GuiPortal;
