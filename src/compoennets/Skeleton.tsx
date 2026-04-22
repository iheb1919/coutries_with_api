

export const Skeleton = ({ classN }: { classN: string }) => {
    return (
        <div className={`animate-pulse bg-gray-200 dark:bg-[#ffffff15] ${classN}`} />
    );
}