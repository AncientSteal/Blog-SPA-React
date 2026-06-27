import { formValidation } from "../Validation";

describe('Тестирование функции formValidation', () => {
    test('должна возвращать ошибки, если поля полностью пустые', () => {
        const mockData = { login: '',  email: '', password: '', password_repeat: '', number: ''};
        const result = formValidation(mockData);

        const emptyValueMessage = 'Cannot be empty or contain empty symbols';

        expect(result?.login).toBe(emptyValueMessage);
        expect(result?.email).toBe(emptyValueMessage);
        expect(result?.password).toBe(emptyValueMessage);
        expect(result?.password_repeat).toBe(emptyValueMessage);
        expect(result?.number).toBe(emptyValueMessage);
    });

    test('должна показать текст ошибки на некорректный формат полей ввода', () => {
        const mockData = { login: 'love',  email: 'something123', password: 'password_wrong', password_repeat: 'password123!', number: '799988877'};
        const result = formValidation(mockData);

        expect(result?.login).toBe('Login needs too contain from 5 to 20 characters');
        expect(result?.email).toBe('Email needs too contain @ symbol, email token and domain');
        expect(result?.password).toBe('Passwords needs too contain numbers and special symbols !$#_/-*+=();%,.<>');
        expect(result?.password_repeat).toBe('Passwords do not match');
        expect(result?.number).toBe('Phone needs too contain 11 numbers and starting from 7 or 8');
    });

    test('не должно быть ошибок на корректный формат полей ввода', () => {
        const mockData = { login: 'lover123',  email: 'some@mail.com', password: 'password123!', password_repeat: 'password123!', number: '79998887766'};
        const result = formValidation(mockData);

        expect(result?.login).toBe(undefined);
        expect(result?.email).toBe(undefined);
        expect(result?.password).toBe(undefined);
        expect(result?.password_repeat).toBe(undefined);
        expect(result?.number).toBe(undefined);
    });
    
})