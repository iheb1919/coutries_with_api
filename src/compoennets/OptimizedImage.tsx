import { useState } from "react";
import { Skeleton } from "./Skeleton";
import type { CountrySummary } from "../types/types";

const OptimizedImage = ({ country, className, priority }:
    { country: CountrySummary; className: string; priority?: boolean }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const src = country.flags.png;
    const svg = country.flags.svg;
    const alt = country.flags.alt || `Flag of ${country.name.common}`;

    return (
        <div className="relative w-full h-full bg-gray-100 dark:bg-[#ffffff10]">
            {!isLoaded && !hasError && (
                <Skeleton classN="absolute inset-0 w-full h-full rounded-none" />
            )}
            <picture>
                {svg && <source srcSet={svg} type="image/svg+xml" />}
                <img
                    src={src}
                    alt={alt}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={priority ? "high" : "low"}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} object-cover transition-opacity duration-500`}
                />
            </picture>
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-xs text-gray-500">
                    Image failed to load
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;