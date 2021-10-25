import React from 'react';

function Info2() {
	return (
		<div className='ModalContent ModalLinks'>
			<div className='anchor_block'>
				<a target='_blank' className='anchor_title anchor_title-upp' href='https://kahoot.it/'>
					Kahoot
				</a>
				<span className='anchor_text'>
					{' '}
					- сервис для создания викторин, тестов и дидактических игр
				</span>
			</div>
			<div className='anchor_block'>
				<a target='_blank' className='anchor_title anchor_title-upp' href='https://nearpod.com/'>
					Nearpod
				</a>
				<span className='anchor_text'>
					{' '}
					- образовательное приложение, которое делает сделать обучение увлекательным
				</span>
			</div>
			<div className='anchor_block'>
				<a
					target='_blank'
					className='anchor_title anchor_title-upp'
					href='https://ahaslides.com/ru/'>
					AhaSlides
				</a>
				<span className='anchor_text'>
					{' '}
					- сервис для создания интерактивных презентаций, позволяющий организовать "живое"
					взаимодействие с аудиторией
				</span>
			</div>
			<div className='anchor_block'>
				<a target='_blank' className='anchor_title anchor_title-upp' href='https://discord.com/'>
					Discord
				</a>
				<span className='anchor_text'>
					{' '}
					- бесплатная платформа, которая позволяет легко и просто организовать и настроить все для
					проведения дистанционных занятий
				</span>
			</div>
		</div>
	);
}

export default Info2;
