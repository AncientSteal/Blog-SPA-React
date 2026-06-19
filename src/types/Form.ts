import React from "react";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    error?: string,
}

export interface UseFormOptions<T> {
    initialValues: T;
    validate: (values: T) => Record<string, string> | null;
    onSubmit: (values: T) => void | Promise<void>;
}