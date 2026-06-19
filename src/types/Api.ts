export interface ServerErrorResponse {
    status: 'error';
    errors: Record<string, string>;
}

export interface ServerSuccessResponse {
    status: 'success';
    token: string;
    user: {
        name: string;
        email: string;
    };
}