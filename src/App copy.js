import { useEffect, useState } from 'react';

function App() {
	const [clients, setClients] = useState([]);
	const [myId, setMyId] = useState('');

	console.log(myId);

	useEffect(() => {
		setMyId(`${Math.floor(Math.random() * 10000000)}`);
		const ws = new WebSocket('ws://localhost:2346');
		ws.onmessage = (msg) => {
			const data = JSON.parse(msg.data);
			console.log(data);
			setClients(data);
		};
	}, []);
	return (
		<div className='App'>
			clients:
			{clients.map((el, id) => (
				<div key={id}>{el}</div>
			))}
		</div>
	);
}

export default App;
