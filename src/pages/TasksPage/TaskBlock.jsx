import React from 'react';

function TaskBlock({ img, title, onClick, st }) {
	return (
		<div onClick={onClick} className={`TaskBlock ${st ? st : ''}`}>
			<img src={img} alt='' />
			{title ? <p>{title}</p> : null}
		</div>
	);
}

export default TaskBlock;
