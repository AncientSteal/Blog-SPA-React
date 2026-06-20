import { blogs } from "../data/mockData";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { BlogContentBlock } from "../types/Blog";
import { SwiperSlide, Swiper } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import { SliderPrevBtn, SliderNextBtn } from "../components/ui/SwiperNavigation";
import 'swiper/css';
import 'swiper/css/virtual';

function BlogDetailPage() {
    const { id } = useParams<{id:string}>();
    const currentBlog = blogs.find((item) => item.id === Number(id));

    function splitText(textBlock:string) {
        return textBlock
            .split('\n')
            .filter(p => p.trim() !== '')
            .map((p, index) => (
                <p key={index} className="pb-4 md:pb-5">{p}</p>
            ));
    }

    function renderBlogContent(array:BlogContentBlock[]) {
        if (!array || array.length === 0) return null;
        if (array.length > 0) {
            return array.map((block, index) => {
                switch (block.type) {
                    case 'title':
                        return (<h3 key={index} className="text-neutral-900 text-2xl md:text-3xl font-semibold pb-5 md:pb-6">{block.text}</h3>);
                    case 'paragraph':
                        return (<p key={index} className="pb-4 md:pb-5">{block.text}</p>);
                    case 'image':
                        return (
                            <figure key={index} className="mb-12">
                                <img className="pb-3 md:pb-4 pt-8" src={`/${block.url}`} alt="Block Img"/>
                                <figcaption className="text-sm">{block.alt}</figcaption>
                            </figure>
                        )
                    case 'quote':
                        return (
                            <blockquote key={index} className="flex flex-col gap-8 mb-12 pl-5 border-l-2 border-brand-700">
                                <p className="text-neutral-900 text-xl md:text-2xl font-medium italic">{block.text}</p>
                                <span>{block.quote_author}</span>
                            </blockquote>
                        )
                    case 'conclusion':
                        return (
                            <div key={index} className="md:px-8 md:py-10 md:bg-neutral-50">
                                <h3 className="text-neutral-900 text-2xl md:text-3xl font-semibold pb-5 md:pb-6">Conclusion</h3>
                                {splitText(block.conclusion_text)}
                            </div>
                        )
                    default:
                        return '';
                }
            })
        }
    }

    if(!currentBlog) {
        return (
            <section>
                <div className="px-12 py-24 md:px-16 md:py-32 bg-base-white text-2xl md:text-3xl font-semibold grid col-span-full">
                    <p className="text-neutral-900 font-normal text-center">We do not find any results for this article.</p>
                    <Link to="/" className="button w-fit mx-auto my-4 text-brand-700 bg-brand-100 text-center font-bold">Back to catalog</Link>
                    <p className="pt-6 text-neutral-900 font-normal text-center">Maybe you will be interested in the articles from below:</p>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="flex flex-col items-center text-neutral-600 text-lg font-normal md:mx-8 mx-0 bg-base-white py-16 md:py-24">
                <div className="w-full">
                    <span className="text-brand-700 text-base font-semibold pb-3">Published {currentBlog.createdAt}</span>
                    <h2 className="text-4xl md:text-5xl font-semibold pb-4 md:pb-6 text-neutral-900">{currentBlog.title}</h2>
                    <p>{currentBlog.short}</p>
                </div>
                {currentBlog.slides ? (
                    <div className="w-full h-full pt-8 md:pt-16">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={1}
                            modules={[Controller, Navigation]}
                            navigation={{
                                prevEl: '.blog-detail-prev',
                                nextEl: '.blog-detail-next',
                            }}
                            breakpoints={{
                                1300: {slidesPerView: 2},
                                1024: {slidesPerView: 1.5, spaceBetween:32},
                                900: {slidesPerView: 1.2},
                            }}
                            className="h-[60vh] md:h-fit"
                        >
                            {currentBlog.slides.map((slide, index) => {
                                return (
                                    <SwiperSlide key={index} virtualIndex={index} className="md:w-auto! h-full!">
                                        <img src={slide.url} alt={slide.alt} className="w-full h-auto max-[500px]:h-full object-cover"/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className="w-full flex gap-4 z-20 pt-2">
                            <SliderPrevBtn className="blog-detail-prev"/>
                            <SliderNextBtn className="blog-detail-next"/>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-fit max-h-150 pt-16 overflow-hidden">
                        <img className="w-full h-full aspect-video object-cover" src={currentBlog.preview} alt="Blog preview"/>
                    </div>
                )}
                <div className="max-w-200 py-12 md:py-16">
                    {renderBlogContent(currentBlog.content)}
                </div>
                <div className="flex flex-col w-full gap-6 md:flex-row md:gap-0 md:justify-between py-6 border-t border-neutral-300">
                    <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src={currentBlog.avatar} alt="Avatar"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-lg text-neutral-900">{currentBlog.author_name}</p>
                            <span>{currentBlog.author_label}</span>
                        </div>
                    </div>
                    <div className="text-sm h-fit px-2 rounded-full text-center bg-brand-200 text-brand-700 w-fit">{currentBlog.category}</div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailPage;