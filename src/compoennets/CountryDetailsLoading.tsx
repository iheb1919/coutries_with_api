import { Skeleton } from "./Skeleton";

const CountryDetailsLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
            {/* Flag Skeleton */}
            <Skeleton classN="w-full aspect-[4/3] md:h-[400px] rounded-none shadow-md" />

            {/* Info Skeleton */}
            <div className="py-6">
                <Skeleton classN="h-10 w-3/4 mb-8" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left column info */}
                    <div className="flex flex-col gap-4">
                        <Skeleton classN="h-4 w-full" />
                        <Skeleton classN="h-4 w-5/6" />
                        <Skeleton classN="h-4 w-4/5" />
                        <Skeleton classN="h-4 w-3/4" />
                        <Skeleton classN="h-4 w-2/3" />
                    </div>

                    {/* Right column info */}
                    <div className="flex flex-col gap-4">
                        <Skeleton classN="h-4 w-full" />
                        <Skeleton classN="h-4 w-5/6" />
                        <Skeleton classN="h-4 w-4/5" />
                    </div>
                </div>

                {/* Borders Skeleton */}
                <div className="mt-12 flex flex-wrap gap-3 items-center">
                    <Skeleton classN="h-6 w-32" />
                    <div className="flex gap-2 flex-wrap">
                        <Skeleton classN="h-8 w-24" />
                        <Skeleton classN="h-8 w-24" />
                        <Skeleton classN="h-8 w-24" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailsLoading;
