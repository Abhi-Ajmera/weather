import Forecast from './components/Forecast';
import Search from './components/Search';
import useForecast from './hooks/useForecast';

function App(): JSX.Element {
	const { term, option, forecast, handleInputChange, onSearch, onOptionSelect } = useForecast();

	return (
		<main className='flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 min-h-[100vh] w-full'>
			{forecast ? (
				<Forecast data={forecast} />
			) : (
				<Search
					term={term}
					option={option}
					handleInputChange={handleInputChange}
					onOptionSelect={onOptionSelect}
					onSearch={onSearch}
				/>
			)}
		</main>
	);
}

export default App;
