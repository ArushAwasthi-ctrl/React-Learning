import { Client, ID, Databases, Storage, Query } from "appwrite";
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

  // ✅ Create a new post
  async CreatePost({ title, slug, content, featuredImage, status, userId }) {
    return await this.databases.documents.create(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      { title, slug, content, featuredImage, status, userId }
    );
  }

  // ✅ Update an existing post
  async UpdatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.documents.update(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      { title, content, featuredImage, status }
    );
  }

  // ✅ Delete a post
  async DeletePost(slug) {
    await this.databases.documents.delete(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
    return true;
  }

  // ✅ Get a single post
  async getPost(slug) {
    return await this.databases.documents.get(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug
    );
  }

  // ✅ Get all posts with status "published"
  async getAllPost() {
    return await this.databases.documents.list(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.equal("status", "published")]
    );
  }
}

const Postservices = new Service();
export default Postservices;
