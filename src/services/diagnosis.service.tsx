import { DiagnosisPaginationDto } from "@/dtos/diagnosisPagination.dto"
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

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/diagnosis`,
        formData,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access_token")
        }
        })

    return response.data
}

export const getDiagnosisHistory = async (page: number) : Promise<DiagnosisPaginationDto> => {
    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1.0/list_diagnosis/?page=${page}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access_token")
            }
        })

    return DiagnosisPaginationDto.create(response.data)
}