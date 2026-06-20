import type { HeaderTitleProps } from '../types/Navigation';

function HeaderTitle({searchValue, onSearchChange}:HeaderTitleProps) {

    return (
        <>
            <div className="flex flex-col justify-center items-center py-16 md:py-24">
                <div className="rounded-full bg-brand-100 text-brand-700 text-sm font-medium py-1 px-3 mb-4">Our blog</div>
                <h1 className="text-brand-900 font-semibold text-4xl md:text-5xl mb-4 md:mb-6 text-center">Resources and insights</h1>
                <p className="text-brand-700 font-normal text-lg md:text-xl mb-8 md:mb-10 text-center">The latest industry news, interviews, technologies, and resources.</p>
                <search role="search" className="block">
                <div className="relative flex items-center">
                    <div className="absolute left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input onChange={(event) => onSearchChange(event.target.value)} value={searchValue} type="search" placeholder="Search" className="flex justify-start bg-base-white py-3 pl-10 pr-4 text-base rounded-lg border border-neutral-300"/>
                </div>
                </search>
            </div>
            <div className="absolute top-[-30vh] left-[-20vw] -z-1">
                <div className="bg-brand-50 w-[150vw] md:h-[90vh] h-[70vh] rotate-350 absolute z-2"></div>
                <div className="bg-brand-100 w-[150vw] md:h-[100vh] h-[75vh] rotate-350 absolute z-1"></div>
                <div className="bg-brand-300 w-[150vw] md:h-[110vh] h-[80vh] rotate-350 absolute z-0"></div>
            </div>
        </>
    )
}

export default HeaderTitle;