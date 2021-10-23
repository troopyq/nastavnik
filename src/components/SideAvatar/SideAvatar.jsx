import React from 'react';
import './SideAvatar.scss';

import qr from './qr.png';

function SideAvatar() {
	return (
		<aside className='SideAvatar'>
			<div className='avatar'>
				<img
					className='avatar_img'
					src='https://sun9-57.userapi.com/impg/IJd9CQkTyyAbssxhTAZLKpB5j2WZaxiGj1pAGw/6BH7qzQ_sF0.jpg?size=720x1280&quality=95&sign=255793666c719cf282bf497279d48e48&type=album'
					alt='Анастасия Сергеевна'
				/>
				<p className='avatar_desc'>
					Аминова Анастасия Сергеевна
					<a className='avatar_anchor' href='tel: +79041704152'>
						+7-904-170-41-52
					</a>
					<a className='avatar_anchor' href='https://vk.com/id7356469'>
						ВКонтакте
					</a>
				</p>
				<img className='qr' src={qr} alt='' />
			</div>
		</aside>
	);
}

export default SideAvatar;
