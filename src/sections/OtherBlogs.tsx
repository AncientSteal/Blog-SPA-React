import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { blogs } from "../data/mockData";
import BlogCard from "../components/blog/BlogCard";
import { SliderPrevBtn, SliderNextBtn } from "../components/ui/SwiperNavigation";
import type { BlogItem } from "../types/Blog";
import { SwiperSlide, Swiper, type SwiperClass } from "swiper/react";
import { Controller, Virtual, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/virtual';

function OtherBlogs() {

    const prevBtnRef = useRef<HTMLButtonElement>(null);
    const nextBtnRef = useRef<HTMLButtonElement>(null);
    const [firstSlider, setFirstSlider] = useState<SwiperClass | null>(null);
    const [secondSlider, setSecondSlider] = useState<SwiperClass | null>(null);

    const { id } = useParams<{id:string}>();
    if (!id) return null;

    const currentId = Number(id);
    const filteredBlogs = blogs.filter(blog => blog.id !== currentId);
    const currentBlog = blogs.find((blog) => blog.id === currentId);

    const blogsToRender = currentBlog ? 
        [...filteredBlogs].sort((a:BlogItem, b:BlogItem) => {
        const aIsCategory = a.category === currentBlog.category;
        const bIsCategory = b.category === currentBlog.category;
        if (aIsCategory !== bIsCategory) {
            return +bIsCategory - +aIsCategory;
        }
        const aIsAuthor = a.author_id === currentBlog.author_id;
        const bIsAuthor= b.author_id === currentBlog.author_id;
        return +bIsAuthor - +aIsAuthor;
    }) : filteredBlogs;
    

    return (
        <section>
            <div className="md:px-8 md:py-24 border-b border-neutral-300">
                <div className="flex flex-col md:items-center md:flex-row gap-12 md:gap-0 justify-between">
                    <div className="flex flex-col gap-4 md:gap-5">
                        <span className="text-base text-brand-700 font-semibold">Our blog</span>
                        <h3 className="text-neutral-900 font-semibold text-3xl md:text-4xl">Latest blog posts</h3>
                        <p className="text-neutral-900">Tools and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <Link to="/">
                        <button className="bg-brand-700 text-base-white">View all posts</button>
                    </Link>
                </div>
                <div className="pt-12 md:pt-16 relative">
                    <div className="w-full flex gap-4 z-20 pb-2">
                        <SliderPrevBtn ref={prevBtnRef}/>
                        <SliderNextBtn ref={nextBtnRef}/>
                    </div>
                    <Swiper 
                        spaceBetween={8}
                        slidesPerView={1}
                        modules={[Virtual, Controller, Navigation]}
                        onSwiper={setFirstSlider}
                        controller={{control: secondSlider}}
                        navigation={true}
                        onBeforeInit={(swiper: SwiperClass) => {
                            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevBtnRef.current;
                                swiper.params.navigation.nextEl = nextBtnRef.current;
                            }
                        }}
                        virtual
                        breakpoints={{
                            720: {slidesPerView: 2, spaceBetween:16},
                            1024: {slidesPerView: 3, spaceBetween:24},
                        }}
                        className="overflow-visible!"
                    >
                        {blogsToRender.map((blog, index) => {
                            return (
                                <SwiperSlide key={blog.id} virtualIndex={index}>
                                    <BlogCard blog={blog} className='shadow-none'/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="absolute top-[10%] left-0 w-full blur-3xl scale-120 saturate-140 pointer-events-none -z-1">
                        <Swiper 
                        spaceBetween={8}
                        slidesPerView={1}
                        modules={[Virtual, Controller]}
                        onSwiper={setSecondSlider}
                        controller={{control: firstSlider}}
                        virtual
                        breakpoints={{
                            720: {slidesPerView: 2, spaceBetween:16},
                            1024: {slidesPerView: 3, spaceBetween:24},
                        }}
                    >
                        {blogsToRender.map((blog, index) => {
                            return (
                                <SwiperSlide key={blog.id} virtualIndex={index}>
                                    <BlogCard blog={blog} className='shadow-none'/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtherBlogs;