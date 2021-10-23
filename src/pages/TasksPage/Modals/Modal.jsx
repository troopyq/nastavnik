import React, { useEffect } from 'react';
import TypeOne from './TypeOne';
import TypeTwo from './TypeTwo';
import TypeThree from './TypeThree';

import './Modal.scss';

function Modal(props) {
	let ModalContent = null;

	switch (props.type) {
		case 'ЖКХ':
			ModalContent = <TypeOne />;
			break;
		case 'Мастер-класс':
			ModalContent = <TypeTwo />;
			break;
		case 'Опрос':
			ModalContent = <TypeThree />;
			break;
	}

	function modalClose() {
		props.status.setModal(null);
	}

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style = '';
		};
	}, []);
	return (
		<div className={`Modal`}>
			<div className='ModalWindow'>
				<div onClick={modalClose} className='ModalClose'>
					&#10008;
				</div>
				<div className='ModalContent'>{ModalContent}</div>
			</div>
		</div>
	);
}

export default Modal;
