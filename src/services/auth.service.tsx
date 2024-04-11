import axios from "axios"


export const authenticateUser = async ({email, password }: { [key: string]: any }) => {
    return await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/auth/signin`,
        {
            "email": email,
            "password": password
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    ).then(response => {
        return response.data;
    }).catch(error => {
        throw error
    });
}

export const createUser = async ({ email, username, password }: { [key: string]: any }) => {
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/auth/signup`,
        {
            "email": email,
            "username": username,
            "password": password
        }).then(response => {
            return response.data;
        }).catch(error => {
            throw error
        })
}