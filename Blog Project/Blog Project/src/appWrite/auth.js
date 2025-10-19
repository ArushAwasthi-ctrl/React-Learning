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
  }

  async Login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async GetCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // If no session exists, return null instead of throwing (prevents uncaught 401s)
      if (error && (error.code === 401 || error.status === 401 || error?.response?.status === 401)) {
        return null;
      }
      console.error("Appwrite :: GetCurrentUser :: Error", error);
      return null;
    }
  }

  async Logout() {
    await this.account.deleteSessions();
  }
}

const authservice = new AuthService();
export default authservice;
