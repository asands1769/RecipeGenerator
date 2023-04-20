export class RegisterFormDTO {
    username: String;
	password: String;
    verifyPassword: String;

	constructor(username: String, password: String, verifyPassword: String){
		this.username = username;
		this.password = password;
        this.verifyPassword = verifyPassword;
	}
}