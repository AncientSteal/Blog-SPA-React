function Footer() {
    return (
        <footer>
            <section>
                <div className="pt-8 pb-28 md:px-8 flex flex-col md:flex-row md:justify-between gap-6 border-t border-neutral-300">
                <div className="items-center gap-2.5 flex">
                    <div className="w-8 h-8 bg-[url(/Logo.svg)] bg-contain bg-no-repeat"></div>
                    <div className="text-neutral-900 text-2xl font-bold">Untitled UI</div>
                </div>
                <div className="text-base text-neutral-500 font-normal">
                    <p>© 2077 Untitled UI. All rights reserved.</p>
                </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;