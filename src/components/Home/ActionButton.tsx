import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import CommentModal from "./CommentModal";
import { Icon, Text, useDisclosure } from "@chakra-ui/react";
interface ActionButtonProps {
  type: "like" | "comment";
  postId: string;
  userId: string;
  handler: any;
}

export default function ActionButton({
  type,
  postId,
  userId,
  handler,
}: ActionButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const likeContent = (
    <button
      onClick={async () => {
        await handler(postId);
      }}
      className="w-full outline-none bg-transparent transition-colors duration-150 hover:bg-gray-hover rounded-md"
    >
      <div className="flex justify-center items-center gap-4 p-3">
        <Icon as={AiFillLike} />
        <Text as="b" fontSize="lg">
          Like
        </Text>
      </div>
    </button>
  );

  const commentContent = (
    <>
      <button
        onClick={onOpen}
        className="w-full outline-none bg-transparent transition-colors duration-150 hover:bg-gray-hover rounded-md"
      >
        <div className="flex justify-center items-center gap-4 p-3">
          <Icon as={AiOutlineComment} />
          <Text as="b" fontSize="lg">
            Comment
          </Text>
        </div>
      </button>
      <CommentModal isOpen={isOpen} onClose={onClose} postId={postId} />
    </>
  );
  return <>{type === "comment" ? commentContent : likeContent}</>;
}
