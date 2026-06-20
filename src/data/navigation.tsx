import type { NavigationItem } from "../types/Navigation";

const BlogIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path stroke="#7F56D9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/>
    </svg>
);

const StoriesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path stroke="#7F56D9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2 3 14h9l-1 8 10-12h-9z"/>
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path stroke="#7F56D9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
        <path stroke="#7F56D9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 8 6 4-6 4z"/>
    </svg>
);

export const navLinks: NavigationItem[] = [
    {label: 'Home', href: '/'},
    {label: 'Products', href: '#', hasDropdown: true, 
        children: [
            { title: 'Blog', description: 'The latest industry news, updates and info.', href: '#', icon: BlogIcon},
            { title: 'Customer stories', description: 'Learn how our customers are making big changes.', href: '#', icon: StoriesIcon},
            { title: 'Video tutorials', description: 'Get up and running on new features and techniques.', href: '#', icon: VideoIcon},
        ]
    },
    {label: 'Resources', href: '#', hasDropdown: true,
        children: [
            { title: 'Blog', description: 'The latest industry news, updates and info.', href: '#', icon: BlogIcon},
            { title: 'Customer stories', description: 'Learn how our customers are making big changes.', href: '#', icon: StoriesIcon},
            { title: 'Video tutorials', description: 'Get up and running on new features and techniques.', href: '#', icon: VideoIcon},
        ]
    },
    {label: 'Pricing', href: '#start-free'},
]