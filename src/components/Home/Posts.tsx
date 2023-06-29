import PostContainer from "./Container";
import Post from "./Post";
import type { PostType } from "../../type";

interface PostsProps {
  posts: PostType[] | undefined;
}

export default function Posts({ posts }: PostsProps) {
  return (
    {posts?.map()}
  );
}
