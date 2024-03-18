import axios from "axios"

export const isSessionActive = async () => {
    if (
        localStorage.getItem("access_token") === null ||
        localStorage.getItem("access_token") === undefined
    ) {
        return false
    }

    try {
        const request = await axios.post(`${process.env["NEXT_PUBLIC_API_URL"]}/api/v1.0/token`, {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            }
        )

        return request.data.status
    } catch (error) {
        return false
    }

} 