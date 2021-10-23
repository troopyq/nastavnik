import { useEffect, useState } from 'react';
import { Navigation, SideAvatar } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MasterPage, TasksPage, ThreePage, MainPage } from './pages';

import './assets/scss/index.scss';

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Navigation />

				<div className='content'>
					<Switch>
						<Route exact path='/nastavnik/'>
							<MainPage />
						</Route>
						<Route path='/nastavnik/tasks'>
							<TasksPage />
						</Route>
						<Route path='/nastavnik/toolbox'>
							<MasterPage />
						</Route>
						<Route path='/nastavnik/info'>
							<ThreePage />
						</Route>
					</Switch>
				</div>

				<SideAvatar />
			</div>
		</Router>
	);
}

export default App;