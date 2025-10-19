import React, { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, RTE } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Postservices from "../../appWrite/config";
import imageStorageServices from "../../appWrite/file";

function PostForm({ post }) {
  const { register, handleSubmit, watch, control, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "",
      image: null,
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  // Slug transformation function
  const slugTransformation = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // spaces to hyphen
        .replace(/[^\w-]/g, ""); // remove invalid characters
    }
    return "";
  }, []);

  // Auto-update slug when title changes
  const title = watch("title");
  useEffect(() => {
    setValue("slug", slugTransformation(title), { shouldValidate: true });
  }, [title, setValue, slugTransformation]);

  // Form submit
  const Submit = async (data) => {
    try {
      let fileId;

      // Upload image if exists
      if (data.image && data.image[0]) {
        const file = await imageStorageServices.uploadFile(data.image[0]);
        if (file) fileId = file.$id;

        // If editing, delete old image
        if (post?.featuredImage) {
          await imageStorageServices.deleteFile(post.featuredImage);
        }
      }

      const postData = {
        ...data,
        featuredImage: fileId || post?.featuredImage,
        userId: userData.$id,
      };

      let dbPost;

      if (post) {
        // Update post (edit mode)
        dbPost = await Postservices.UpdatePost(post.$id, postData);
      } else {
        // Create new post
        dbPost = await Postservices.CreatePost(postData);
      }

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } catch (error) {
      console.error("Post submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(Submit)} className="space-y-4">
      {/* Title */}
      <Input
        label="Title"
        placeholder="Enter post title"
        {...register("title", { required: "Title is required" })}
      />

      {/* Slug */}
      <Input
        label="Slug"
        placeholder="Auto-generated slug"
        {...register("slug", { required: "Slug is required" })}
      />

      {/* Content (RTE) */}
      <Controller
        name="content"
        control={control}
        rules={{ required: "Content is required" }}
        render={({ field }) => <RTE {...field} />}
      />

      {/* Image Upload */}
      <Input
        label="Featured Image"
        type="file"
        {...register("image")}
      />

      {/* Status */}
      <Input
        label="Status"
        placeholder="draft / published"
        {...register("status")}
      />

      {/* Submit */}
      <Button type="submit" className="w-full">
        {post ? "Update Post" : "Create Post"}
      </Button>
    </form>
  );
}

export default PostForm;
