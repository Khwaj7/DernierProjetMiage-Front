export class Membre {
	id : string;
	nom : string;
	prenom : string;
	mail : string;
	username : string;
	password : string;
	licence : number;
	niveau : number;

	constructor(username: string, password: string){
		this.username = username;
		this.password = password;
	}
}
