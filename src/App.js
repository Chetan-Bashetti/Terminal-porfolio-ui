import React from 'react';
import './App.css';

import DevPortal from 'components/Terminal';
import GuiPortal from 'components/GUI';

function App() {
	const [siteState, setSiteState] = React.useState('gui');
	return (
		<div className='App'>
			{siteState === 'terminal' ? (
				<DevPortal setSiteState={setSiteState} />
			) : (
				<GuiPortal setSiteState={setSiteState} />
			)}
		</div>
	);
}

export default App;
