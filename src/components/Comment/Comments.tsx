import { CommentType } from "../../type";
import Comment from "./Comment";
import CommentWithInput from "./CommentWithInput";

interface CommentsProps {
  comments: CommentType[];
  postId: string;
}

export default function Comments({ comments, postId }: CommentsProps) {
  return (
    <section className="w-full flex flex-col gap-3 justify-center items-center p-3">
      <CommentWithInput postId={postId} />
      {comments.map((comment) => {
        return <Comment data={comment} key={comment.id} />;
      })}
    </section>
  );
}
