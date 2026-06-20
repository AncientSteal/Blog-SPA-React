import { useState } from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../../data/mockData";

interface BlogCatalogProps {
    query: string;
    baseQuantity: number;
}

function BlogCatalog({ query, baseQuantity }: BlogCatalogProps) {

    const [loadedCards, setLoadedCards] = useState(baseQuantity);

    const filteredBlogs = blogs.filter(blog => {
        const searchString = `${blog.title} ${blog.short} ${blog.author_name} ${blog.category}`.toLowerCase();
        return searchString.includes(query.toLowerCase().trim());
    });

    const renderedCards = filteredBlogs.slice(0, loadedCards);

    function loadMoreCards() {
        setLoadedCards(loadedCards + 3);
    }

    return (
        <section>
            <div  className="card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8">
                
                {renderedCards.map((blog) => {
                    return (
                        <BlogCard key={blog.id} blog={blog}/>
                    )
                })}

                {filteredBlogs.length === 0 && (
                    <div className="p-12 bg-base-white shadow-lg text-xl col-span-full">
                        <p className="text-neutral-900 font-normal text-center">We do not find any results for :  
                            <span className="text-brand-700 font-bold"> '{query}'</span>
                        </p>
                    </div>
                )}

            </div>
            <div className="mb-16 md:mb-24 md:px-8 pt-12 md:pt-16 flex justify-center w-full">
                {filteredBlogs.length > renderedCards.length && (
                    <button onClick={loadMoreCards} className="load__btn flex gap-3 justify-center items-center bg-brand-50 font-semibold text-base text-brand-700 py-3 md:px-5 w-full md:w-fit">
                        <div className="flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6.7.8v11.7M6.7 12.5l5.8-5.8M6.7 12.5l-5.9-5.8" stroke="#6941C6" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        Load more
                    </button>
                )}
            </div>
        </section>
    )
}

export default BlogCatalog;