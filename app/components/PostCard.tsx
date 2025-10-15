"use client";
import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps): React.JSX.Element {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};