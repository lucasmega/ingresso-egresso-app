export class User {
    
    public nombre: string;
    public email: string;
    public uid: string;
        
    constructor(user: DataUser ) {
        this.nombre = user && user.nombre || null;
        this.email = user && user.email || null;
        this.uid = user && user.uid;
    }
}

export interface DataUser {
    uid: string;
    email: string;
    nombre: string;
}