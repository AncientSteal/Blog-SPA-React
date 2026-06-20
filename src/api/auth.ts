import type { ServerErrorResponse, ServerSuccessResponse } from "../types/Api";
import type { FormValidationProps } from "../types/Validation";

export const serverAnswer = async (data: FormValidationProps): Promise<ServerSuccessResponse | ServerErrorResponse> => {

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000)

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`An error occurred while sending data: ${response.status}`)
        }

        if (data.login?.toLowerCase() === 'admin') {
            return {
                status: 'error',
                errors: { login: 'This nickname is already taken' },
            }
        };

        const result = await response.json();
        const successResponse:ServerSuccessResponse = {
            status: 'success',
            token: `fake-jwt-token-for-${result.login || 'user'}-${result.id}`,
            user: {
                name: data.login || 'Guest',
                email: data.email || 'user@example.com',
            }
        };

        return successResponse;

    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                throw new Error('Server is not responding. Please try again later.', { cause: error })
            }
            throw error;
        }
        
        throw new Error('An unexpected error occurred', { cause: error });

    } finally {
        clearTimeout(timeout);
    }
}
