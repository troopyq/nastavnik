import React from 'react';
import bg from './bg.jpg';

function MainPage() {
	return (
		<div>
			<img style={bgc.bg} src={bg} alt='' />
			<p style={{ fontSize: '2.2rem' }}>
				<b>Педагог</b> - это не дрессировщик с педагогическим хлыстом, это изобретатель условий
			</p>
		</div>
	);
}

const bgc = {
	bg: {
		marginTop: '-25px',
		marginBottom: '25px',
		width: '100%',
	},
};

export default MainPage;
