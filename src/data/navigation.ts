import type { NavigationItem } from "../types/Navigation";
import { BlogIcon, StoriesIcon, VideoIcon } from "../components/ui/icons";


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