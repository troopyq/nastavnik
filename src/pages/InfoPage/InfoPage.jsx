import React, { useState } from 'react';
import Modal from '../TasksPage/Modals/Modal';
import TaskBlock from '../TasksPage/TaskBlock';
import Info1 from '../TasksPage/Modals/Info1';
import Info2 from '../TasksPage/Modals/Info2';

import i1 from '../TasksPage/Modals/icons/info1-n.png';
import i2 from '../TasksPage/Modals/icons/info2.png';

import '../TasksPage/TasksPage.scss';

function InfoPage() {
	const [other, setOther] = useState(null);

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
				<TaskBlock
					st='infoLink'
					onClick={() => openModal2('info1')}
					img={i1}
					title='Как повысить эффективность'
				/>
				<TaskBlock
					st='infoLink'
					onClick={() => openModal2('info2')}
					img={i2}
					title='Полезные сервисы'
				/>
			</div>
			{other === 'info1' ? (
				<Modal status={{ setOther }}>
					<Info1 />
				</Modal>
			) : other === 'info2' ? (
				<Modal status={{ setOther }}>
					<Info2 />
				</Modal>
			) : null}
		</>
	);
}

export default InfoPage;
