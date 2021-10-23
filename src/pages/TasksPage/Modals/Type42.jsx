import React from 'react';
import img1 from './img/42-1.jpg';
import img2 from './img/42-2.jpg';

function Type42() {
	return (
		<div className='ModalContent'>
			<img className='ModalContentImg' src={img1} alt='' />
			<img className='ModalContentImg' src={img2} alt='' />
		</div>
	);
}

export default Type42;
