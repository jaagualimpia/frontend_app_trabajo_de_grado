export class AuthUserDto {
    private constructor(
        private email: string,
        private username:string,
        private password: string
        ){ }

    static create(request: {[key: string]: any}){
        const { email, username, password } = request

        return new AuthUserDto(email, username, password)
    }
}