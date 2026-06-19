interface TitleBlock {
    type: 'title';
    text: string;
}

interface ParagraphBlock {
    type: 'paragraph';
    text: string;
}

interface ImageBlock {
    type: 'image';
    url: string;
    alt: string;
}

interface QuoteBlock {
    type: 'quote';
    text: string;
    quote_author: string;
}

interface ConclusionBlock {
    type: 'conclusion';
    conclusion_text: string;
}

interface SlideImage {
    type: 'image';
    url: string;
    alt: string;
}

export type BlogContentBlock = 
    | TitleBlock
    | ParagraphBlock
    | ImageBlock
    | QuoteBlock
    | ConclusionBlock;

export interface BlogItem {
    id: number;
    category: string;
    title: string;
    short: string;
    author_id: number;
    author_name: string;
    author_label: string;
    createdAt: string;
    preview: string;
    avatar: string;
    slides?:SlideImage[];
    content: BlogContentBlock[];
}