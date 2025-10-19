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
    const uploadedFile = await this.bucket.createFile(
      conf.appwriteBucketId,
      ID.unique(),
      file
    );
    return uploadedFile;
  }

  async deleteFile(fileId) {
    await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    return true;
  }

  async downloadFile(fileId) {
    const downloadedFile = await this.bucket.getFileDownload(
      conf.appwriteBucketId,
      fileId
    );
    return downloadedFile;
  }

  async previewFile(fileId) {
    const previewedFile = await this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
    return previewedFile;
  }

  getFileView(fileId) {
    return this.bucket.getFileView(conf.appwriteBucketId, fileId);
  }
}

const imageStorageServices = new FileStorage();
export default imageStorageServices;
