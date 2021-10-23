import React from 'react';

function TaskBlock({ img, title, onClick }) {
	return (
		<div onClick={onClick} className='TaskBlock'>
			<img src={img} alt='' />
			{title ? <p>{title}</p> : null}
		</div>
	);
}

export default TaskBlock;
