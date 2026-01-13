const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api/';

export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T>{
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
    });

    if (!response.ok){
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
}