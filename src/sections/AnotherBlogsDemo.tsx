import { Link } from "react-router-dom";

function AnotherBlogsDemo() {
    return (
        <section>
            <div className="flex flex-col md:flex-row gap-16 py-12 md:py-24 md:px-8">
                <div className="flex flex-1 flex-col gap-4 md:gap-6 justify-center">
                    <h3 className="text-neutral-900 font-semibold text-3xl md:text-5xl md:text-12">No long-term contracts.<br/>No catches.</h3>
                    <p className="text-neutral-900">Start your 30-day free trial today.</p>
                    <div className="flex flex-col md:flex-row gap-3 md:w-fit w-full pt-4">
                        <button className="text-neutral-600 border border-neutral-300 w-full text-center md:w-fit">Learn more</button>
                        <Link to="/registration" className="button text-base-white bg-brand-700 w-full text-center md:w-fit">Get started</Link>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-4 md:justify-between overflow-hidden">
                    <div className="flex gap-4 h-fit justify-center">
                        <img className="w-fit h-fit mt-auto" src="/projects-demo/Image2.png" alt="Other projects demo"/>
                        <img className="w-fit h-fit" src="/projects-demo/Image3.png" alt="Other projects demo"/>
                    </div>
                    <div className="flex gap-4 h-fit justify-center">
                        <img className="w-fit h-fit" src="/projects-demo/Image1.png" alt="Other projects demo"/>
                        <img className="w-fit h-fit" src="/projects-demo/Image5.png" alt="Other projects demo"/>
                        <img className="w-fit h-fit" src="/projects-demo/Image4.png" alt="Other projects demo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnotherBlogsDemo;