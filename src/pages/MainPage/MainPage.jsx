import React from 'react';
import bg from './bg.jpg';

function MainPage() {
	return (
		<div>
			<p style={bgc.text}>
				<b>Педагог</b> - это не дрессировщик с педагогическим хлыстом, это изобретатель условий
			</p>
			<img style={bgc.bg} src={bg} alt='' />
		</div>
	);
}

const bgc = {
	bg: {
		// marginTop: '-25px',
		marginTop: '25px',
		marginBottom: '25px',
		width: '100%',
	},
	text: {
		fontSize: '2.4rem',
		// color: '#1247d6',
		color: '#2a6ba7',
		fontWeight: '500',
		padding: '0px 100px',
		textAlign: 'center',
	},
};

export default MainPage;
