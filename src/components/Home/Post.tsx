import { Author, Comment } from "../../type";
import PostContainer from "./Container";

import { Avatar } from "@chakra-ui/react";

interface PostProps {
  author: Pick<Author, "userName" | "id">;
  imageUrl: string;
  reactions: number | null;
  description: string;
  createdAt: string;
  comments: Comment[];
  id: string;
  tag: string[];
}

export default function Post({
  author,
  imageUrl,
  reactions,
  description,
  createdAt,
}: PostProps) {
  return (
    <PostContainer>
      <div className="my-3 flex justify-center w-full">
        <div className="flex justify-center items-center">
          <Avatar size="sm" />
          <p className="text-bold text-lg ">{author.userName}</p>
        </div>
        <p className="w-full my-4">{description}</p>
      </div>
    </PostContainer>
  );
}
