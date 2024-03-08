export class DiagnosisDetailDto {
    private constructor(
        public id: number,
        public diagnosisResult: string,
        public diagnosisDate: Date,
        public patientDateOfBirth: Date,
        public patientName: string,
        public imageUrl: string,
        public username: string){ }

    static create(request: {[key: string]: any}){
        const {
            id,
            diagnosis_result, 
            diagnosis_date, 
            patient_date_of_birth, 
            patient_name, 
            image_url, 
            username } = request

        return new DiagnosisDetailDto(
            id,
            diagnosis_result,
            diagnosis_date,
            patient_date_of_birth,
            patient_name,
            image_url,
            username
            )
    }
}