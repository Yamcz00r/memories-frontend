import PostContainer from "./Container";

interface PostProps {
  author: string;
  description: string;
  imageUrl: string;
  reactions: number;
  comments:
}

export default function Post() {
  return (
    <PostContainer>
      <div></div>
    </PostContainer>
  );
}
