import React, { useState } from 'react';
import Modal from './Modals/Modal';
import TaskBlock from './TaskBlock';
import Type21 from './Modals/Type21';
import Type22 from './Modals/Type22';
import Type23 from './Modals/Type23';

import typesModal from './typesModal';
import './TasksPage.scss';

import instagram from './icons/instagram.png';
import youtube from './icons/youtube.png';
import info from '../../components/Navigation/icons/info.png';
import telegram from './icons/telegram.png';

function TasksPage() {
	const [modal, setModal] = useState(null);
	const [other, setOther] = useState(null);

	function openModal(type) {
		if (type === modal) {
			setModal(null);
		} else {
			setModal(type);
		}
	}
	function openModal2(type) {
		if (type === other) {
			setOther(null);
		} else {
			setOther(type);
		}
	}

	return (
		<>
			<div className='TasksList'>
				<div className='social'>
					<TaskBlock onClick={() => openModal(typesModal.inst)} img={instagram} />
					<TaskBlock onClick={() => openModal(typesModal.youtube)} img={youtube} />
					<TaskBlock onClick={() => openModal(typesModal.telegram)} img={telegram} />
				</div>
				<TaskBlock onClick={() => openModal2('21')} img={info} />
				<TaskBlock onClick={() => openModal2('22')} img={info} />
				<TaskBlock onClick={() => openModal2('23')} img={info} />
			</div>
			{modal ? <Modal status={{ setModal }} type={modal} /> : null}
			{other == '21' ? (
				<Modal status={{ setOther }}>
					<Type21 />
				</Modal>
			) : other == '22' ? (
				<Modal status={{ setOther }}>
					<Type22 />
				</Modal>
			) : other == '23' ? (
				<Modal status={{ setOther }}>
					<Type23 />
				</Modal>
			) : null}
		</>
	);
}

export default TasksPage;
