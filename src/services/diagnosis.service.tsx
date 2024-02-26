import axios from "axios"


export const post_diagnosis = async (
    {
        patientAge,
        patientName,
        imageUrl
    }:  { [key: string]: any }) => {

    const formData = new FormData()

    formData.append('patient_date_of_birth', patientAge)
    formData.append('patient_name', patientName)
    formData.append('image_url', imageUrl)
    formData.append('user', "7")

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/diagnosis`,
        formData,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("user_jwt_token")
        
        }
        })

    return response.data
}