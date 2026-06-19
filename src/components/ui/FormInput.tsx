import type { FormInputProps } from "../../types/Form";

export function FormInput({ label, name, error, className = "", ...props }:FormInputProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={name} className={label ? '' : 'sr-only'}>{label || name}</label>
            <input name={name} id={name} className={`mb-0.5 text-neutral-900 ${className}`}
                {...props}
            />
            {error && <span className="text-red-500 text-sm font-normal mb-2">{error}</span>}
        </div>
    );
}