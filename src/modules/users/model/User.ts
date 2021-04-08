import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;

  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }
}

export { User };
