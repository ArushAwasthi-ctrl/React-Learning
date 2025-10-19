import React from "react";
import imageStorageServices from "../appWrite/file";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group block">
      <article className="w-full rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]" src={imageStorageServices.getFileView(featuredImage)} alt={title} />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">{title}</h2>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
