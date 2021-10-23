import { useEffect, useState } from 'react';
import { Navigation, SideAvatar } from './components';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import { MasterPage, TasksPage, ThreePage, MainPage } from './pages';

import './assets/scss/index.scss';

function App() {
	return (
		<HashRouter>
			<div className='wrapper'>
				<Navigation />

				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<MainPage />
						</Route>
						<Route path='/tasks'>
							<TasksPage />
						</Route>
						<Route path='/toolbox'>
							<MasterPage />
						</Route>
						<Route path='/info'>
							<ThreePage />
						</Route>
					</Switch>
				</div>

				<SideAvatar />
			</div>
		</HashRouter>
	);
}

export default App;
