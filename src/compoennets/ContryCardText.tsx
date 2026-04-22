export const ContryCardText = ({ text, label, classN }: { text: string | number | string[] | undefined; label: string, classN?: string }) => {
    const value = text ? (typeof text === 'number' ? text.toLocaleString() : (Array.isArray(text) ? text.join(', ') : text)) : 'N/A';
    return (
        <div className={`flex font-sans  px-4 items-center text-[12px] gap-1 overflow-hidden text-ellipsis text-gray-600 dark:text-gray-300 ${classN}`} >
            <h2 className='text-text font-semibold' >{label}: </h2>
            {text && <span>{value}</span>}
        </div>
    );
}