import React from 'react';
import NavButton from './NavButton';
// import { BrowserRouter as NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

import Test from './icons/test.png';

function Navigation() {
	return (
		<nav className='Navigation'>
			<ul className='Navigation_list'>
				<NavLink exact to='/nastavnik/'>
					<NavButton img={Test} title='Главная' />
				</NavLink>
				<NavLink exact to='/nastavnik/tasks'>
					<NavButton img={Test} title='Задания' />
				</NavLink>
				<NavLink exact to='/nastavnik/master'>
					<NavButton img={Test} title='Наставникам' />
				</NavLink>
				<NavLink exact to='/nastavnik/nastavnikan'>
					<NavButton img={Test} title='Мастер-класс' />
				</NavLink>
			</ul>
		</nav>
	);
}

export default Navigation;
