import type { ComponentType } from "react";

export interface DropdownSubItem {
    title: string;
    description: string;
    href: string;
    icon: ComponentType;
}

export interface NavigationItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    children?: DropdownSubItem[];
}

export interface BurgerMenuProps {
    items: NavigationItem[];
}

export interface DropdownMenuProps {
    subItems: DropdownSubItem[];
    className?: string;
}

export interface HeaderTitleProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
}

