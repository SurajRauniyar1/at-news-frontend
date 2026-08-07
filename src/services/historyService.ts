import api from "@/api/client";

export async function getHistory() {

    const response = await api.get("/history");

    return response.data;

}

export async function addHistory(articleId: number) {

    const response = await api.post(
        `/history/${articleId}`
    );

    return response.data;

}

export async function updateReadingDuration(
    articleId: number,
    duration: number
) {

    const response = await api.put(
        `/history/${articleId}/duration`,
        null,
        {
            params: {
                duration,
            },
        }
    );

    return response.data;

}

export async function completeHistory(
    articleId: number
) {

    const response = await api.put(
        `/history/${articleId}/complete`
    );

    return response.data;

}