import type { BlogItem } from "../../types/Blog";
import { Link } from "react-router-dom";

interface BlogCardProps {
    blog: BlogItem;
    className?: string;
}

function BlogCard({blog, className}: BlogCardProps) {
    return (
        <Link to={`/blog/${blog.id}`} className={`flex flex-col gap-8 px-6 pt-6 pb-8 bg-card-white shadow-lg ${className} cursor-pointer transition-card duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl`}>
            <img className="aspect-3/2 object-cover" src={blog.preview} alt="Blog preview"/>
            <div className="flex flex-col gap-3">
                <span className="text-brand-700 text-sm">{blog.category}</span>
                <h3 className="text-neutral-900 text-xl">{blog.title}</h3>
                <p className="text-neutral-600 text-base">{blog.short}</p>
            </div>
            <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img className="w-full h-full" src={blog.avatar} alt="Avatar"/>
                </div>
                <div>
                    <p className="text-neutral-900 font-semibold text-sm">{blog.author_name}</p>
                    <span className="text-neutral-600 text-sm font-normal">{blog.createdAt}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;