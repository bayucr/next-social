import React from "react";
import Post from "./Post";

const Feed = () => {
  return <div className="p-4 g-white rounded-lg flex flex-col gap-12 shadow-2xl">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>;
};

export default Feed;
