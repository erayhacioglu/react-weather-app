import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Weather from './components/Weather';

const App = () => {
	const [weather, setWeather] = useState();
	const [inputText, setInputText] = useState('');
	

	const clearInput = () => {
		setInputText('');
		setWeather();
	};

	return (
		<div
			className={`wrapper ${
				weather ? (weather.current.temp_c <= 15 ? 'cold' : 'warm') : ''
			}`}
		>
			<Navbar />
			<Search
				setWeather={setWeather}
				inputText={inputText}
				setInputText={setInputText}
				clearInput={clearInput}
			/>
			<Weather weather={weather} />
		</div>
	);
};

export default App;
