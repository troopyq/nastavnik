import React, { useState } from 'react';
import Modal from './Modals/Modal';
import TaskBlock from './TaskBlock';
import Type21 from './Modals/Type21';
import Type22 from './Modals/Type22';
import Type23 from './Modals/Type23';
import Type31 from './Modals/Type31';
import Type32 from './Modals/Type32';
import Type33 from './Modals/Type33';
import Type41 from './Modals/Type41';
import Type42 from './Modals/Type42';
import Type43 from './Modals/Type43';

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
				<TaskBlock onClick={() => openModal2('31')} img={info} />
				<TaskBlock onClick={() => openModal2('32')} img={info} />
				<TaskBlock onClick={() => openModal2('33')} img={info} />
				<TaskBlock onClick={() => openModal2('41')} img={info} />
				<TaskBlock onClick={() => openModal2('42')} img={info} />
				<TaskBlock onClick={() => openModal2('43')} img={info} />
			</div>
			{modal ? <Modal status={{ setModal }} type={modal} /> : null}
			{other === '21' ? (
				<Modal status={{ setOther }}>
					<Type21 />
				</Modal>
			) : other === '22' ? (
				<Modal status={{ setOther }}>
					<Type22 />
				</Modal>
			) : other === '23' ? (
				<Modal status={{ setOther }}>
					<Type23 />
				</Modal>
			) : other === '31' ? (
				<Modal status={{ setOther }}>
					<Type31 />
				</Modal>
			) : other === '32' ? (
				<Modal status={{ setOther }}>
					<Type32 />
				</Modal>
			) : other === '33' ? (
				<Modal status={{ setOther }}>
					<Type33 />
				</Modal>
			) : other === '41' ? (
				<Modal status={{ setOther }}>
					<Type41 />
				</Modal>
			) : other === '42' ? (
				<Modal status={{ setOther }}>
					<Type42 />
				</Modal>
			) : other === '43' ? (
				<Modal status={{ setOther }}>
					<Type43 />
				</Modal>
			) : null}
		</>
	);
}

export default TasksPage;
