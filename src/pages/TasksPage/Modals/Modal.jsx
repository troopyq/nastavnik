import React, { useEffect } from 'react';
import TypeModal from './TypeModal';

import './Modal.scss';

function Modal(props) {
	let ModalContent = null;

	if (props.type) {
		ModalContent = <TypeModal data={props.type} />;
	}

	function modalClose(e) {
		if (e) {
			console.log(e.target.classList.contains('Modal'));
			if (e.target.classList.contains('Modal')) {
				if (!props.status.setModal) {
					props.status.setOther(null);
				} else {
					props.status.setModal(null);
				}
			}
		} else {
			if (!props.status.setModal) {
				props.status.setOther(null);
			} else {
				props.status.setModal(null);
			}
		}
	}
	console.log(props);
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${calcScroll()}px`;
		return () => {
			document.body.style = '';
		};
	}, []);
	return (
		<div onClick={(e) => modalClose(e)} className='Modal'>
			<div className='ModalWindow'>
				<div onClick={() => modalClose()} className='ModalClose'>
					&#10008;
				</div>
				<div className='ModalContent'>{props.children ? props.children : ModalContent}</div>
			</div>
		</div>
	);
}

function calcScroll() {
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	// мы должны вставить элемент в документ, иначе размеры будут равны 0
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	console.log(`${scrollWidth}, ${document.body.scrollHeight}, ${document.body.offsetHeight}`);

	return scrollWidth;
}

export default Modal;
