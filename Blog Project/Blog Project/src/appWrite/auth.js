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
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Appwrite :: Login :: Error", error);
      throw error;
    }
  }

  async GetCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new AuthService();
export default authservice;
