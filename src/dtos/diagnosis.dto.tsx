export class DiagnosisDto {
    private constructor(
        private diagnosisResult: string,
        private diagnosisDate: Date,
        private patientDateOfBirth: Date,
        private patientName: string,
        private imageUrl: string){ }

    static create(request: {[key: string]: any}){
        const diagnosisResult = request.diagnosis_result
        const diagnosisDate = request.diagnosis_date
        const patientDateOfBirth = request.patient_date_of_birth
        const patientName = request.patient_name
        const imageUrl = request.image_url

        return new DiagnosisDto(
            diagnosisResult,
            diagnosisDate,
            patientDateOfBirth,
            patientName,
            imageUrl)
    }
}