import api from "../api/client";

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export const login = async (data: LoginData) => {

    const formData = new URLSearchParams();

    formData.append("username", data.email);
    formData.append("password", data.password);

    const response = await api.post(

        "/auth/login",

        formData,

        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }

    );

    return response.data;
};

export const register = async (data: RegisterData) => {

    const response = await api.post(

        "/auth/register",

        data

    );

    return response.data;
};

export const getProfile = async () => {

    const response = await api.get(

        "/user/me"

    );

    return response.data;
};