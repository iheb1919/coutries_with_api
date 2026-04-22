import { Skeleton } from "./Skeleton";

const CountryLoading = () => {
    return (
        <div className='bg-element shadow-md rounded-lg overflow-hidden w-full max-w-[290px] mx-auto pb-10'>
            <Skeleton classN='h-cardheight w-full rounded-none' />
            <div className="px-4">
                <Skeleton classN='my-4 h-6 w-3/4' />
                <div className="flex flex-col gap-2">
                    <Skeleton classN='h-4 w-1/2' />
                    <Skeleton classN='h-4 w-2/3' />
                    <Skeleton classN='h-4 w-1/3' />
                </div>
            </div>
        </div>
    );
}
export default CountryLoading;
