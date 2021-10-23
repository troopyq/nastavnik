import React, { useState } from 'react';
import Modal from './Modals/Modal';
import TaskBlock from './TaskBlock';

import typesModal from './typesModal';
import './TasksPage.scss';

import instagram from './icons/instagram.png';
import youtube from './icons/youtube.png';
import tiktok from './icons/tiktok.png';

function TasksPage() {
	const [modal, setModal] = useState(null);

	function openModal(type) {
		if (type === modal) {
			setModal(null);
		} else {
			setModal(type);
		}
	}
	return (
		<>
			<div className='TasksList'>
				<TaskBlock onClick={() => openModal(typesModal.t1)} img={instagram} />
				<TaskBlock onClick={() => openModal(typesModal.t2)} img={youtube} />
				<TaskBlock onClick={() => openModal(typesModal.t3)} img={tiktok} />
			</div>
			{modal ? <Modal status={{ setModal }} type={modal} /> : null}
		</>
	);
}

export default TasksPage;
