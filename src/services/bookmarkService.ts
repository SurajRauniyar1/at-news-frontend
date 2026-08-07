import api from "@/api/client";

export async function getBookmarks() {
    const response = await api.get("/bookmark");
    return response.data;
}

export async function addBookmark(article_id: number) {
    const response = await api.post(
        `/bookmark/${article_id}`
    );

    return response.data;
}

export async function removeBookmark(article_id: number) {
    await api.delete(`/bookmark/${article_id}`);
}