import React from 'react';
import NavButton from './NavButton';
// import { BrowserRouter as NavLink } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.scss';

import home from './icons/home.png';
import task from './icons/task.png';
import toolbox from './icons/toolbox.png';
import info from './icons/info.png';

function Navigation() {
	return (
		<nav className='Navigation'>
			<ul className='Navigation_list'>
				<NavLink exact to='/nastavnik/'>
					<NavButton img={home} title='Главная' />
				</NavLink>
				<NavLink exact to='/nastavnik/tasks'>
					<NavButton img={task} title='Задания' />
				</NavLink>
				<a
					target='_blank'
					href='https://jamboard.google.com/d/1G1P8T7HqB-nt3onm4gNZVWGD5vYDm9KUhPcVgWO403k/edit?usp=sharing'>
					<NavButton img={toolbox} title='Тулбокс' />
				</a>

				<NavLink exact to='/nastavnik/info'>
					<NavButton img={info} title='Полезная информация' />
				</NavLink>
			</ul>
		</nav>
	);
}

export default Navigation;
