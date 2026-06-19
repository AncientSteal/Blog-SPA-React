import { forwardRef } from 'react';
import type { DropdownMenuProps } from '../../types/Navigation';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(({subItems, className = ''}, ref) => {
    return ( 
        <div ref={ref} className={`text-sm text-neutral-600 font-normal flex flex-col gap-2 py-3 border-neutral-300 shadow-lg bg-base-white ${className}`}>
            {subItems.map((subItem) => {
                const Icon = subItem.icon;
                return (
                    <a key={subItem.title} className="flex gap-4" href={subItem.href}>
                        <div><Icon/></div>
                        <div>
                            <p className="text-base text-neutral-900 font-semibold">{subItem.title}</p>
                            <span>{subItem.description}</span>
                        </div>
                    </a>
                );
            })}
        </div>
    )
});

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
