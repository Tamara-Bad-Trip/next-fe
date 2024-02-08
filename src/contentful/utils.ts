import { createClient } from 'contentful';

export const setClient = (space: string) => {
    const client = createClient({
        space: space,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
    });

    return client;
};

export const getContent = async (space: string, content: string) => {
    try {
        const client = setClient(space);
        const response = await client.getEntries({
            content_type: content,
        });
        return response.items?.[0]?.fields;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};
