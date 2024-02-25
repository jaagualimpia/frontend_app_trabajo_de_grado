import axios from "axios"


export const authenticateUser = async ({ email, password }: { [key: string]: any }) => {
    return await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/auth/signin`,
        {
            "email": email,
            "password": password
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": "Bearer " + localStorage.getItem("user_jwt_token")
            }
        }
    ).then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

export const createUser = async ({ email, username, password }: { [key: string]: any }) => {
    console.log(process.env.NEXT_PUBLIC_API_URL)

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/auth/signup`,
        {
            "email": email,
            "username": username,
            "password": password
        })

    return response.data;
}