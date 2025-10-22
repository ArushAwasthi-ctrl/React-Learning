import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // ✅ Create a new post (Appwrite v21 APIs)
  async CreatePost({ title, slug, content, featuredImage, status, userId }) {
    // Make posts publicly readable; author can write/update/delete
    const permissions = [
      Permission.read(Role.any()),
      Permission.write(Role.user(userId)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];

    return await this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      { title, slug, content, featuredImage, status, userId },
      permissions
    );
  }

  // ✅ Update an existing post
  async UpdatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      { title, content, featuredImage, status }
    );
  }

  // ✅ Delete a post
  async DeletePost(slug) {
    await this.databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
    return true;
  }

  // ✅ Get a single post
  async getPost(slug) {
    return await this.databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
  }

  // ✅ Get all posts with status "published"
  async getAllPost() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", "published")]
      );
    } catch (err) {
      console.error("Appwrite listDocuments error:", err);
      return { documents: [], total: 0 };
    }
  }
}

const Postservices = new Service();
export default Postservices;
