import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import type { CountryDetail, CountrySummary } from "../types/types";

// 1. Fetch single country
const getSingleCountry = async (name: string): Promise<CountryDetail[]> => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!res.ok) throw new Error("Failed to fetch country");
    return res.json();
};

// 2. Fetch border countries (summary is enough for the buttons)
const getCountryByCode = async (codes: string[]): Promise<CountrySummary[]> => {
    const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}&fields=name`
    );
    if (!res.ok) throw new Error("Failed to fetch borders");
    return res.json();
};

const useGetSingleCountry = () => {
    const { name } = useParams();

    // 🔹 First query
    const {
        data: countryData,
        isLoading: countryLoading,
        isError,
    } = useQuery<CountryDetail[]>({
        queryKey: ["country", name],
        queryFn: () => getSingleCountry(name!),
        enabled: !!name,
        retry: false,
    });

    // Extract borders safely
    const borders = countryData?.[0]?.borders || [];

    // 🔹 Second query (depends on first)
    const {
        data: borderCountries,
        isLoading: bordersLoading,
    } = useQuery<CountrySummary[]>({
        queryKey: ["borders", borders],
        queryFn: () => getCountryByCode(borders),
        enabled: borders.length > 0,
    });

    return {
        countryData,
        borderCountries,
        isLoading: countryLoading || bordersLoading,
        isError,
        bordersLoading,
    };
};

export default useGetSingleCountry;