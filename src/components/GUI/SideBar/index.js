import React from 'react';
import styled from 'styled-components';

import STORE from 'store';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background: black;
	transition: all 0.3s ease-in;
	@media only screen and (min-width: 1340px) {
		width: 105px;
		flex-direction: column;
		&:hover {
			will-change: width;
			width: 200px;
		}
	}
	@media only screen and (max-width: 1339px) {
		flex-direction: row;
	}
`;

const EachLink = styled.div`
	color: white;
	padding: 1em;
	display: flex;
	align-items: center;
	cursor: pointer;
	justify-content: flex-start;
	border-radius: 10px;
	background: ${(props) => (props.bg ? props.bg : '')};
	text-transform: uppercase;
	&:hover {
		background: #a7a4a466;
		box-shadow: 0px 8px 16px #464646;
	}
	@media only screen and (min-width: 599px) {
		padding: 20px;
		margin: 0.2em 1em;
	}
`;

const EachLinkText = styled.div`
	color: white;
	margin-left: 1em;

	@media only screen and (max-width: 1239px) {
		display: none;
	}
`;

const Sidebar = ({ setSiteState }) => {
	const [toggle, setToggle] = React.useState(false);
	const [view, setView] = React.useState('home');
	const goToViolation = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
		setView(id);
	};

	return (
		<Wrapper
			onMouseOver={() => setToggle(true)}
			onMouseLeave={() => setToggle(false)}
		>
			{STORE.GUI_ROUTES.map((eachRoute) => (
				<EachLink
					key={eachRoute.label}
					onClick={() => goToViolation(eachRoute.to)}
					bg={view === eachRoute.to ? '#a7a4a466' : ''}
				>
					<span
						className='material-symbols-outlined'
						style={{
							marginLeft: !toggle ? '5px' : '',
							transition: 'all 0.3s ease-in'
						}}
					>
						{eachRoute.icon}
					</span>
					{toggle ? <EachLinkText>{eachRoute.label}</EachLinkText> : ''}
				</EachLink>
			))}
		</Wrapper>
	);
};

export default Sidebar;
