import api from "../api/client";

export interface UpdateProfileData {
    username?: string;
    avatar?: string;
    bio?: string;
}

export async function getProfile() {

    const response = await api.get("/user/me");

    return response.data;

}

export async function updateProfile(

    data: UpdateProfileData

) {

    const response = await api.put(

        "/user",

        data

    );

    return response.data;

}

export async function deleteAccount() {

    const response = await api.delete(

        "/user"

    );

    return response.data;

}