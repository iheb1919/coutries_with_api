import CountryCard from '../compoennets/countryCard'
import CountryFilters from '../compoennets/CountryFilters'
import CountryLoading from '../compoennets/CountryLoading'
import { useGetCoutries } from '../contexts/useGetCoutries'
import type { CountrySummary } from '../types/types';

function Home() {

    const { countriesData, isLoading, isError, searchInput, setSearchInput, region, setRegion, visibleCount } = useGetCoutries();
    return (
        <>
            <CountryFilters searchInput={searchInput} setSearchInput={setSearchInput} region={region} setRegion={setRegion} />
            {isError ? (
                <div className=" text-center py-10 text-lg font-semibold">
                    No country found!
                </div>
            ) : (
                <div className='container group/item mx-auto gap-x-4 gap-y-10 grid grid-cols-1 mmd:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {isLoading
                        ? Array(10).fill(null).map((_, i) => <CountryLoading key={i} />)
                        : countriesData &&
                            countriesData.length === 0 ?
                            <div className=" text-center py-10 text-lg text-red-500 font-semibold">
                                No country found!
                            </div>
                            : (Array.isArray(countriesData) ? countriesData : []).slice(0, visibleCount).map((country: CountrySummary, i: number) => (
                                <CountryCard
                                    key={i}
                                    country={country}
                                    priority={i < 8}
                                />
                            ))
                    }
                </div>
            )}
        </>
    )
}

export default Home



