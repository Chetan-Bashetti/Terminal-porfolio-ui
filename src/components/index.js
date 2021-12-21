import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Importing components
import Commands from 'components/Commands';
import Input from 'components/Input';
import Result from 'components/Result';
import About from 'components/About';
import Skills from 'components/Skills';
import Experinace from 'components/Experiance';
import Education from 'components/Education';
import Contact from 'components/Contact';
import SocialLinks from 'components/SocialLinks';
import Modal from 'components/Modal';

//Importing Store
import STORE from 'store';

const Wrapper = styled.div`
	flex: 1;
	background: black;
	padding: 2em 10%;
	color: limegreen;
	font-family: monospace;
	overflow-y: auto;
	@media (max-width: 799px) {
		padding: 2em 3%;
	}
`;

const HeaderTextWrapper = styled.div`
	text-decoration: underline;
	margin-bottom: 1em;
	font-size: 2em;
	@media (max-width: 799px) {
		font-size: 1.5em;
	}
`;

const DevInfo = styled.div`
	flex: 1;
	text-align: left;
`;

const Prompt = styled.div`
	display: flex;
`;

const PromptResult = styled.div`
	display: flex;
`;

const PortalHome = () => {
	const [command, setCommand] = useState('');
	const [components, setComponents] = useState([]);
	const [visitor, setVisitor] = useState('');
	const [user, setUser] = useState('');
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		getInfo();
	}, []);

	const getInfo = () => {
		var userInfo = localStorage.getItem('visitor');
		if (userInfo !== null && userInfo !== '') {
			setUser(userInfo);
			setVisible(false);
		} else {
			setVisible(true);
			document.getElementById('getInfo').focus();
		}
	};

	const handleCommand = (e) => {
		setCommand(e.target.value);
	};

	const handleVisitor = (e) => {
		setVisitor(e.target.value);
	};

	const handleFilterKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) {
			addNewResult(command);
		}
	};

	const handleVisitorKeyPress = (e) => {
		if (e.keyCode === 13 || e.which === 13) {
			localStorage.setItem('visitor', visitor);
			setVisible(false);
			getInfo();
		}
	};

	const onClickSubmit = () => {
		if (visitor !== '' && visitor.length > 2) {
			localStorage.setItem('visitor', visitor);
			getInfo();
		}
	};

	const closeModal = () => {
		setVisible(false);
	};

	const addNewResult = (command) => {
		if (command.toLowerCase() !== 'clear') {
			let component;
			switch (command.toLowerCase()) {
				case 'about':
					component = <About about={STORE.ABOUT} />;
					break;
				case 'contact':
					component = <Contact contact={STORE.CONTACT} />;
					break;
				case 'education':
					component = <Education education={STORE.EDUCATION} />;
					break;
				case 'experience':
					component = <Experinace experinace={STORE.EXPERIANCE} />;
					break;
				case 'skills':
					component = <Skills skills={STORE.SKILLS} />;
					break;
				case 'social-links':
					component = <SocialLinks socialLinks={STORE.SOCIAL_LINKS} />;
					break;
				case 'exit':
					component = 'Bye Bye :)';
					break;
				default:
					component = 'Invalid command exiting with 0';
			}
			let newResult = {
				command: command,
				component: component
			};
			setComponents([...components, newResult]);
			setCommand('');
		} else {
			setComponents([]);
			setCommand('');
		}
	};
	return (
		<Wrapper>
			<HeaderTextWrapper>Welcome to my portfolio</HeaderTextWrapper>
			<DevInfo>
				<Commands />
				<PromptResult>
					<Result command={command} components={components} user={user} />
				</PromptResult>
				<Prompt>
					{user ? user : 'anonymous'} @chetan_dev_portal_&gt;
					<Input
						inputValue={command}
						changeCommand={(e) => handleCommand(e)}
						keyPress={(e) => handleFilterKeyPress(e)}
						id={'getInfo'}
					/>
				</Prompt>
			</DevInfo>
			{isVisible && (
				<Modal
					visitor={visitor}
					handleVisitor={(e) => handleVisitor(e)}
					keyPress={(e) => handleVisitorKeyPress(e)}
					onClickSubmit={onClickSubmit}
					closeModal={closeModal}
				/>
			)}
		</Wrapper>
	);
};
export default PortalHome;
