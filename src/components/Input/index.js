import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const StyledInput = styled.input`
	color: inherit;
	background: black;
	border: none;
	outline: none;
	color: limegreen;
	font-family: monospace;
	margin-left: 0.3em;
	width: 130px;
`;

const InputBox = ({ inputValue, changeCommand, keyPress, id }) => {
	return (
		<Wrapper>
			<StyledInput
				id={id}
				type='text'
				value={inputValue}
				onChange={changeCommand}
				onKeyPress={keyPress}
				placeholder='command'
				autoComplete='off'
			/>
		</Wrapper>
	);
};
export default InputBox;
