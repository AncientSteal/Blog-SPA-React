import type { FormValidationProps, ValidationRules } from "../types/Validation";

const validationRules:ValidationRules = {

    login: (value) => {
        if (value.length < 5 || value.length > 20) {
            return 'Login needs too contain from 5 to 20 characters'
        }
        return null;
    },
    
    password:  (value) => {
        if (value.length < 9 || value.length > 20) {
            return 'Passwords needs too contain from 9 to 20 characters'
        } else if (!/(?=.*[0-9])(?=.*[!$#_/\-*+=();%,.<>])/.test(value)) {
            return 'Passwords needs too contain numbers and special symbols !$#_/-*+=();%,.<>';
        }
        return null;
    },

    password_repeat: (value, originalPassword) => {
        return value !== originalPassword ? 'Passwords do not match' : null;
    },

    email: (value) => {
        if (!/(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)/.test(value)) {
            return 'Email needs too contain @ symbol, email token and domain';
        }
        return null;
    },

    number: (value) => {
        if (!/(^[78])(?=[0-9]{10}$)/.test(value)) {
            return 'Phone needs too contain 11 numbers and starting from 7 or 8'
        }
        return null;
    }
};

export function formValidation(formElement: FormValidationProps) {

    const passwordValue = formElement.password?.trim() || '';
    const errors: Record<string, string> = {};

    for (const [key, value] of Object.entries(formElement)) {

        const trimmedValue = (value || '').trim();
        const validateRule = validationRules[key as keyof ValidationRules];

        if (!trimmedValue || /\s/.test(trimmedValue)) {
            errors[key] = 'Cannot be empty or contain empty symbols';
            continue;
        }

        if (validateRule) {
            const errorMessage = validateRule(trimmedValue, passwordValue);
            if (errorMessage) {
                errors[key] = errorMessage;
            } 
        }
    }

    return (Object.keys(errors).length > 0) ? errors : null;
};