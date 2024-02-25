import axios from "axios"


export const post_diagnosis = async (
    {
        patient_date_of_birth,
        patient_name,
        image_file
    }:  { [key: string]: any }) => {

    const formData = new FormData()

    formData.append('patient_date_of_birth', patient_date_of_birth)
    formData.append('patient_name', patient_name)
    formData.append('image_url', image_file)

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/diagnosis`,
        formData,
        {
            headers: {"Authorization": "Bearer " + localStorage.getItem("user_jwt_token")}
        })

    return response.data
}