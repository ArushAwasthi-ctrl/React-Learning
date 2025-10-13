import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async CreateAccount({ email, password, name }) {
    try {
      const UserAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (UserAccount) {
        return this.Login({ email, password });
      } else {
        return null;
      }
    } catch (error) {
      console.error("Appwrite :: CreateAccount :: Error", error);
      throw error;
    }
  }
  async Login({ email, password }) {
    try {
      const login = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return login;
    } catch (error) {
      console.error("Appwrite :: CreateAccount :: Error", error);
      throw error;
    }
  }
  async GetCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      throw new error();
    }
    return null;
  }
  async Logut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new error();
    }
  }
}

const authservice = new AuthService();
export default authservice;
