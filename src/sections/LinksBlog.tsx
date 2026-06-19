function LinksBlog() {
    return (
        <section>
            <div className="py-12 md:py-16 md:border-t md:px-8 border-neutral-200 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 text-neutral-600 text-base font-semibold">
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Product</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">Overview</a>
                        <a href="#">Features</a>
                        <a href="#">Solutions<span className="py-0.5 px-2 rounded-full bg-emerald-100 text-emerald-700 text-xs ml-2">New</span></a>
                        <a href="#">Tutorials</a>
                        <a href="#">Pricing</a>
                        <a href="#">Releases</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Company</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">News</a>
                        <a href="#">Media kit</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Resources</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">Blog</a>
                        <a href="#">Newsletter</a>
                        <a href="#">Events</a>
                        <a href="#">Help centre</a>
                        <a href="#">Tutorials</a>
                        <a href="#">Support</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Use cases</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">Startups</a>
                        <a href="#">Enterprise</a>
                        <a href="#">Government</a>
                        <a href="#">SaaS</a>
                        <a href="#">Marketplaces</a>
                        <a href="#">Ecommerce</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Social</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">X</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Facebook</a>
                        <a href="#">GitHub</a>
                        <a href="#">AngelList</a>
                        <a href="#">Dribbble</a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <a href="#" className="text-neutral-500 text-sm">Legal</a>
                    <div className="flex flex-col gap-3">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Licenses</a>
                        <a href="#">Settings</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinksBlog;