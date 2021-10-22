import React from 'react';
import './Navigation.scss';

import Test from './icons/test.png';
import NavButton from './NavButton';

function Navigation() {
	return (
		<nav className='Navigation'>
			<ul className='Navigation_list'>
				<NavButton img={Test} title='Задания' />
				<NavButton img={Test} title='Наставникам' />
				<NavButton img={Test} title='Мастер-класс' />
			</ul>
		</nav>
	);
}

export default Navigation;
