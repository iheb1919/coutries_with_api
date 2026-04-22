import { Link } from 'react-router';
import OptimizedImage from './OptimizedImage';
import { ContryCardText } from './ContryCardText';
import type { CountrySummary } from '../types/types';
const CountryCard = ({ country, priority }: { country: CountrySummary; priority?: boolean }) => {
    return (

        <Link to={`/country/${country.name.common}`} className='bg-element hover:cursor-pointer 
        group-hover/item:not-[&:hover]:grayscale-60  
        
        shadow-md rounded-lg overflow-hidden w-full max-w-[400px] md:max-w-[290px] 
        mx-auto pb-10 transition-all hover:scale-[1.02] duration-300'>
            <div className="relative h-cardheight w-full overflow-hidden">
                <OptimizedImage
                    country={country}
                    className="h-full w-full object-cover"
                    priority={priority}
                />
            </div>
            <h1 className='font-bold text-base px-4 py-3 '> {country.name.common}</h1>
            <div className="flex flex-col gap-1">
                <ContryCardText text={country.population} label={'Population'} />
                <ContryCardText text={country.region} label={'Region'} />
                <ContryCardText text={country.capital} label={'Capital'} />
            </div>
        </Link>

    );
};

export default CountryCard;





