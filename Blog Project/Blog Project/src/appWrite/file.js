import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf";

export class FileStorage {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }

 
  async uploadFile(file) {
    try {
      const uploadedFile = await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
      return uploadedFile;
    } catch (error) {
      throw error;
    }
  }

 
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  
  async downloadFile(fileId) {
    try {
      const downloadedFile = await this.bucket.getFileDownload(
        conf.appwriteBucketId,
        fileId
      );
      return downloadedFile;
    } catch (error) {
      throw error;
    }
  }

  
  async previewFile(fileId) {
    try {
      const previewedFile = await this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );
      return previewedFile;
    } catch (error) {
      throw error;
    }
  }

  
  getFileView(fileId) {
    return this.bucket.getFileView(conf.appwriteBucketId, fileId);
  }
}

const fileStorage = new FileStorage();
export default fileStorage;
