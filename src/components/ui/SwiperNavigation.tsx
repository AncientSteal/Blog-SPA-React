export const SliderPrevBtn = (({ className = '', ...props }) => {
    return (
        <button
            className={`btn-prev py-2 text-neutral-500 rounded-lg px-4 flex items-center justify-center bg-base-white border border-neutral-200 overflow-hidden relative ${className}`}
            aria-label="Previous slide"
            {...props}
        >
            <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
});

export const SliderNextBtn = (({ className = '', ...props }) => {
    return (
        <button
            className={`btn-next py-2 text-neutral-500 rounded-lg px-4 flex items-center justify-center bg-base-white border border-neutral-200 overflow-hidden relative ${className}`}
            aria-label="Next slide"
            {...props}
        >
            <svg xmlns="http://w3.org" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
})