import { useEffect, useState } from 'react';
import { Navigation, SideAvatar } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='wrapper'>
			<Navigation />

			<div className='content'></div>

			<SideAvatar />
		</div>
	);
}

export default App;
