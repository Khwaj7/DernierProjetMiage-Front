export class Membre {
    id: number
    nomMembre  : string
    prenomMembre : string
    mailMembre :string
    login :string
    numLicence :number
    niveau:number
    numero:number
    rue:string
    ville:string
    pays:string  
    isTeamLeader:boolean
    
    constructor(id: number, 
        nomMembre  : string, 
        prenomMembre : string, 
        mailMembre :string,
        login :string, 
        numLicence :number, 
        niveau:number, 
        numero:number, 
        rue:string,
        ville:string,
        pays:string,
        isTeamLeader:boolean
        ){
            this.id = id;
            this.nomMembre = nomMembre;
            this.prenomMembre = prenomMembre;
            this.mailMembre = mailMembre;
            this.login = login;
            this.numLicence = numLicence;
            this.niveau = niveau;
            this.numero = numero;
            this.rue = rue;
            this.ville = ville;
            this.pays = pays;
            this.isTeamLeader = isTeamLeader;
        }
    }
    