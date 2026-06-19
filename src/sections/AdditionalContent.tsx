import { Link } from "react-router-dom";

function AdditionalContent() {
    return (
        <section id="additional-container">
            <div id="start-free" className="py-16 md:pt-24 md:pb-16 flex flex-col gap-16 md:px-8 border-y border-neutral-200">
                <div className="flex gap-8 md:gap-10 flex-col justify-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-neutral-900 text-center font-semibold text-3xl md:text-4xl">Start your free trial</h2>
                        <p className="text-neutral-500 text-center text-lg md:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 justify-center">
                        <Link to="/registration" className="button w-full md:w-fit bg-brand-700 text-base-white text-center py-3 md:px-5">Get started</Link>
                        <button className="w-full md:w-fit bg-brand-50 text-neutral-700 text-center py-3 md:px-5">Learn more</button>
                    </div>
                </div>
                <div className="relative w-full md:max-h-[55vh] overflow-hidden">
                    <img className="w-full h-full" src="/content/Content.png" alt="Free trial demo"/>
                </div>
            </div>
        </section>
    )
}

export default AdditionalContent;