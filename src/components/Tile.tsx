import Feels from './Icons/Feels';
import Pop from './Icons/Pop';
import Pressure from './Icons/Pressure';
import Humidity from './Icons/Humidity';
import Visibility from './Icons/Visibility';
import Wind from './Icons/Wind';

type TitleProp = {
	icon: 'wind' | 'feels' | 'humidity' | 'visiblity' | 'presure' | 'pop';
	title: string;
	info: string | JSX.Element;
	description: string;
};

const icons = {
	wind: Wind,
	feels: Feels,
	humidity: Humidity,
	visiblity: Visibility,
	presure: Pressure,
	pop: Pop,
};

const Tile = ({ icon, title, info, description }: TitleProp): JSX.Element => {
	const Icon = icons[icon];
	return (
		<article className='w-[170px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-3 mb-5 flex items-center flex-col justify-around'>
			<div className='flex items-center text-sm font-bold'>
				<Icon /> <h4 className='font-semibold text-lg ml-1'>{title}</h4>
			</div>
			<h3 className='my-1 text-lg'>{info}</h3>
			<p className='text-sm text-center font-bold'>{description}</p>
		</article>
	);
};
export default Tile;
