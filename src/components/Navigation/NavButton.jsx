import React from 'react';

export default function NavButton({ title, img }) {
	return (
		<li className='Navigation_anchor'>
			<img src={img} alt={title} />
			<p>{title}</p>
		</li>
	);
}
