import { ChangeEvent, useEffect, useState } from 'react';
import { forecastType, optionType } from '../types';

const useForecast = () => {
	const [term, setTerm] = useState<string>('');
	const [option, setOption] = useState<[]>([]);
	const [selected, setSelected] = useState<optionType | null>(null);
	const [forecast, setForecast] = useState<forecastType | null>(null);
	// console.log(forecast);

	const getSearchOption = (value: string) => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${import.meta.env.VITE_API_KEY}`
		)
			.then((response) => response.json())
			.then((data) => setOption(data))
			.catch((error) => console.log(error));
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTerm(value);

		if (value === '') return;
		getSearchOption(value);
	};

	const onOptionSelect = (option: optionType) => {
		setSelected(option);
	};

	const getForecast = (selected: optionType) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${selected.lat}&lon=${selected.lon}&units=metric&appid=${
				import.meta.env.VITE_API_KEY
			}`
		)
			.then((response) => response.json())
			.then((data) => {
				const forecastData = {
					...data.city,
					list: data.list.slice(0, 16),
				};

				setForecast(forecastData);
			});
	};

	const onSearch = () => {
		if (!selected) return;

		getForecast(selected);
	};

	useEffect(() => {
		if (selected) {
			setTerm(selected.name + ', ' + selected.state + ', ' + selected.country);
			setOption([]);
		}
	}, [selected]);

	return {
		term,
		option,
		forecast,
		handleInputChange,
		onSearch,
		onOptionSelect,
		getForecast,
	};
};

export default useForecast;
