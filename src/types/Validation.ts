export interface ValidationRules {
    login: (value: string) => string | null,
    password: (value: string) => string | null,
    password_repeat: (value: string, originalPassword: string) => string | null,
    email: (value: string) => string | null,
    number: (value: string ) => string | null,
}

export interface FormValidationProps {
    login?: string,
    password?: string,
    password_repeat?: string,
    email?: string,
    number?: string,
}