import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

import type { CountrySummary } from "../types/types";

async function getCountriesData(searchInput: string, region: string): Promise<CountrySummary[]> {
    const fields = 'fields=name,flags,population,region,capital';
    let url = '';

    if (searchInput) {
        url = `https://restcountries.com/v3.1/name/${searchInput}?${fields}`;
    } else if (region) {
        url = `https://restcountries.com/v3.1/region/${region}?${fields}`;
    } else {
        url = `https://restcountries.com/v3.1/all?${fields}`;
    }

    const res = await fetch(url);

    if (res.status === 404) return [];
    if (!res.ok) throw new Error('Failed to fetch countries');

    let data = await res.json();

    // Combine filters if both are present
    if (searchInput && region) {
        data = data.filter((country: CountrySummary) => country.region === region);
    }

    return data;
}
export const useGetCoutries = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const debounceValue = useDebounce(searchInput, 500);

    const [region, setRegion] = useState<string>('');
    const [visibleCount, setVisibleCount] = useState<number>(12);

    const { data: countriesData, isLoading, isError } = useQuery<CountrySummary[]>({
        queryKey: ['countries', debounceValue, region],
        queryFn: () => getCountriesData(debounceValue, region),
        retry: false
    });

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(12);
    }, [debounceValue, region]);

    // Infinite scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                setVisibleCount(prev => prev + 12);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { countriesData, isLoading, isError, searchInput, setSearchInput, region, setRegion, visibleCount };
};