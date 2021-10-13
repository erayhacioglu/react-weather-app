const Weather = ({ weather }) => {
	const generateDate = (d) => {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const day = days[d.getDay()];
		const date = d.getDate();
		const month = months[d.getMonth()];
		const year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div className='container '>
			<div className='row'>
				<div className='col-md-4 offset-md-4'>
					{weather && (
						<div className='card'>
							<div className='card-header'>
								<h5 className='card-title text-center'>
									{weather.location.name}/{weather.location.country}
								</h5>
							</div>
							<div className='card-body text-center'>
								<img
									src={weather.current.condition.icon}
									alt=''
									style={{ width: '100px', height: '100px' }}
									loading='lazy'
								/>
								<h4 className='my-3'>{generateDate(new Date())}</h4>
								<h2 className='mb-3'>{weather.current.temp_c}°C</h2>
								<h3>{weather.current.condition.text}</h3>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Weather;
