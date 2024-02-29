import { DiagnosisDto } from "./diagnosis.dto"

export class DiagnosisPaginationDto {
    private constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: DiagnosisDto[]){ }

    static create(request: {[key: string]: any}){
        const count = request.count
        const next = request.next
        const previous = request.previous
        const results = request.results.map((result: {[key: string]: any}) => DiagnosisDto.create(result))

        return new DiagnosisPaginationDto(
            count,
            next,
            previous,
            results)
    }
}