import axios from 'axios';

const API_KEY = 'a38ec8bf57b645e7856121538212608';

const Search = ({ setWeather, inputText, setInputText, clearInput }) => {
	const getWeather = async (e) => {
		e.preventDefault();
		const { data } = await axios.get(
			`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputText}&aqi=no`
		);

		setWeather(data);
	};

	return (
		<div className='container my-5'>
			<div className='row'>
				<form className='col-md-4 offset-md-4' onSubmit={getWeather}>
					<div className='input-group position-relative'>
						<input
							type='text'
							className='form-control'
							placeholder='enter the city'
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
						/>
						{inputText && (
							<i
								className='fas fa-times text-danger fs-3 position-absolute'
								style={{
									zIndex: '10',
									right: '50px',
									top: '5px',
									cursor: 'pointer',
								}}
								onClick={clearInput}
							/>
						)}
						<div className='input-group-append'>
							<button type='submit' className='btn btn-primary'>
								<i className='fas fa-search' />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Search;
