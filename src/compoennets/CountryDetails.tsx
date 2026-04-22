import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetSingleCountry from "../contexts/useGetSinglecountry";
import { Link } from "react-router";
import OptimizedImage from "./OptimizedImage";
import { ContryCardText } from "./ContryCardText";
import type { CountryDetail, CountrySummary } from "../types/types";
import CountryDetailsLoading from "./CountryDetailsLoading";
const BackButton = () => {
    return (
        <Link to="/" className="flex items-center justify-center gap-2 bg-element shadow-lg mb-10 w-[140px] py-3 px-2 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} />
            <p className="px-2">Back </p>
        </Link>
    )
}
const CountryDetails = () => {
    const { countryData, borderCountries, isLoading, isError } = useGetSingleCountry();
    const country = countryData?.[0] as CountryDetail | undefined;

    if (isLoading) return (
        <div className='container mx-auto px-3 lg:px-0'>
            <BackButton />
            <CountryDetailsLoading />
        </div>
    );

    if (isError) return (
        <div className='container mx-auto px-3 lg:px-0 text-center '>
            <BackButton />
            <h1 className="text-2xl font-bold mb-4">Oops!We couldn't find country .</h1>

        </div>
    );

    return (
        <div className='container mx-auto px-3 lg:px-0'>
            <BackButton />
            {country &&
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4   md:gap-20 ">

                    <div className="max-w-[600px]">
                        <OptimizedImage
                            country={country}
                            className="w-full h-full  rounded-none"
                            priority={false}
                        />
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl px-4 py-6 '> {country.name.common}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="flex flex-col gap-1.5">
                                {country.name.nativeName && (
                                    <ContryCardText 
                                        text={country.name.nativeName[Object.keys(country.name.nativeName)[0]].common} 
                                        label={'Native Name'} 
                                        classN="text-[14px]!" 
                                    />
                                )}
                                <ContryCardText text={country.population} label={'Population'} classN="text-[14px]!" />
                                <ContryCardText text={country.region} label={'Region'} classN="text-[14px]!" />
                                <ContryCardText text={country.subregion || 'N/A'} label={'Sub Region'} classN="text-[14px]!" />
                                <ContryCardText text={country.capital || []} label={'Capital'} classN="text-[14px]!" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <ContryCardText text={country.tld || []} label={'Top Level Domain'} classN="text-[14px]!" />
                                {country.currencies && (
                                    <ContryCardText 
                                        text={Object.values(country.currencies).map((currency) => currency.name)} 
                                        label={'Currencies'} 
                                        classN="text-[14px]!" 
                                    />
                                )}
                                {country.languages && (
                                    <ContryCardText 
                                        text={Object.values(country.languages)} 
                                        label={'Languages'} 
                                        classN="text-[14px]!" 
                                    />
                                )}
                            </div>
                            {borderCountries &&
                                <div className="md:col-span-2 flex gap-2 flex-wrap ">
                                    <h2 className='flex items-center font-semibold w-full md:w-auto  text-nowrap px-4 text-[14px]' >Border Countries</h2>
                                    {borderCountries.map((country: CountrySummary) => (
                                        <Link to={`/country/${country.name.common}`} className="bg-element shadow-md text-text py-1 px-7 rounded-sm cursor-pointer" key={country.name.common}>{country.name.common}</Link>
                                    ))}
                                </div>
                            }

                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default CountryDetails;