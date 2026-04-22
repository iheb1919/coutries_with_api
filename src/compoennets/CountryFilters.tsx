import { faChevronDown, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CountryFilters = ({ searchInput, setSearchInput, region, setRegion }: any) => {
    return (
        <div className=' flex justify-between flex-wrap gap-2 pb-10 items-center  container mx-auto'>
            <label htmlFor="search" className='relative text-input bg-element shadow-md rounded-lg w-[300px] flex items-center '>
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2" />
                <input id='search' className="p-4 pl-9 font-[600] h-full w-full border-none" type="text" placeholder="Search for a country..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            </label>

            <CustomSelect region={region} setRegion={setRegion} />

        </div>
    );
};

export default CountryFilters;

const CustomSelect = ({ region, setRegion }: any) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative w-[200px]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full p-3 bg-element rounded-lg shadow-md text-left"
            >
                {region || "Filter by Region"}
                {region && <span onClick={() => setRegion('')} className="absolute right-9 top-1/2 -translate-y-1/2 hover:cursor-pointer  hover:bg-red-200 transition-all duration-300 hover:text-red-500"><FontAwesomeIcon icon={faXmark} /></span>}
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2" />
            </button>
            {open && (
                <div className="fixed inset-0 z-98" onClick={() => setOpen(false)}></div>
            )}
            {open && (
                <ul className="absolute z-99 mt-2 w-full bg-element rounded-lg shadow-lg overflow-hidden">
                    {["Africa", "America", "Asia", "Europe", "Oceania"].map((r) => (
                        <li
                            key={r}
                            onClick={() => {
                                setRegion(r);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${region === r ? 'bg-gray-200' : ''} `}
                        >
                            {r}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}