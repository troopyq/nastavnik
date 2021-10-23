import React from 'react';
import True from './icons/true.png';
import False from './icons/false.png';

function TypeModal({ data }) {
	function onAnswer(e) {
		if (e.target.classList.contains('vsImg')) {
			console.log(e.target.nextSibling.classList.add('active'));
		}
	}

	return (
		<div className='ModalContent'>
			<h2>Instagram</h2>
			<div onClick={onAnswer} className='vs'>
				<div className='left vsBlock'>
					<img className='vsImg' src={data.left.img} alt='' />
					<div className='answer'>
						<img className='answerIcon' src={data.left.answer ? True : False} alt='' />
					</div>
				</div>
				<span className='vsSpan'>VS</span>
				<div className='right vsBlock'>
					<img className='vsImg' src={data.right.img} alt='' />
					<div className='answer'>
						<img className='answerIcon' src={data.right.answer ? True : False} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default TypeModal;
