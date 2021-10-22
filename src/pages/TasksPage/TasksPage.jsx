import React, { useState } from 'react';
import Modal from './Modals/Modal';
import TaskBlock from './TaskBlock';

import typesModal from './typesModal';
import './TasksPage.scss';

function TasksPage() {
	const [modal, setModal] = useState(null);

	function openModal(type) {
		console.log('modal:', modal, type);
		if (type === modal) {
			setModal(null);
		} else {
			setModal(type);
		}
	}

	return (
		<>
			<div className='TasksList'>
				<TaskBlock
					onClick={() => openModal(typesModal.t1)}
					img='https://cdn-icons-png.flaticon.com/512/902/902544.png'
					title='ЖКХ'
				/>
				<TaskBlock
					onClick={() => openModal(typesModal.t2)}
					img='https://cdn-icons-png.flaticon.com/512/902/902544.png'
					title='Экономи'
				/>
				<TaskBlock
					onClick={() => openModal(typesModal.t3)}
					img='https://cdn-icons-png.flaticon.com/512/902/902544.png'
					title='Учеба'
				/>
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
				<TaskBlock img='https://cdn-icons-png.flaticon.com/512/902/902544.png' title='Учеба' />
			</div>
			{modal ? <Modal status={{ modal, setModal }} type={modal} /> : null}
		</>
	);
}

export default TasksPage;
