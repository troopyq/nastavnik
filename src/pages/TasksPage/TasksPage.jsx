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

import instagram from './icons/instagram2.png';
import youtube from './icons/youtube2.png';
import telegram from './icons/telegram2.png';
import i21 from './Modals/icons/21.png';
import i22 from './Modals/icons/22.png';
import i23 from './Modals/icons/23.png';
import i31 from './Modals/icons/31.png';
import i32 from './Modals/icons/32.png';
import i33 from './Modals/icons/33.png';
import i41 from './Modals/icons/41-n.png';
import i42 from './Modals/icons/42-n.png';
import i43 from './Modals/icons/43-n.png';

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
				<TaskBlock onClick={() => openModal(typesModal.inst)} img={instagram} />
				<TaskBlock onClick={() => openModal(typesModal.youtube)} img={youtube} />
				<TaskBlock onClick={() => openModal(typesModal.telegram)} img={telegram} />
				<TaskBlock onClick={() => openModal2('21')} img={i21} />
				<TaskBlock onClick={() => openModal2('22')} img={i22} />
				<TaskBlock onClick={() => openModal2('23')} img={i23} />
				<TaskBlock onClick={() => openModal2('31')} img={i31} />
				<TaskBlock onClick={() => openModal2('32')} img={i32} />
				<TaskBlock onClick={() => openModal2('33')} img={i33} />
				<TaskBlock onClick={() => openModal2('41')} img={i41} />
				<TaskBlock onClick={() => openModal2('42')} img={i42} />
				<TaskBlock onClick={() => openModal2('43')} img={i43} />
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
