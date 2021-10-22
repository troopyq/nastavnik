import React from 'react';

function TaskBlock({ img, title, onClick }) {
	return (
		<div onClick={onClick} className='TaskBlock'>
			<img src={img} alt='' />
			<p>{title}</p>
		</div>
	);
}

export default TaskBlock;
