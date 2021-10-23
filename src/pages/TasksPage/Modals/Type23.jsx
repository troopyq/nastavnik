import React from 'react';
import img1 from './img/23-1.jpg';
import img2 from './img/23-2.jpg';
import img3 from './img/23-3.jpg';

function Type23() {
	return (
		<div className='ModalContent'>
			<img className='ModalContentImg' src={img1} alt='' />
			<img className='ModalContentImg' src={img2} alt='' />
			<img className='ModalContentImg' src={img3} alt='' />
		</div>
	);
}

export default Type23;
