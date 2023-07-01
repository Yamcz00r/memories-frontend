import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { Icon, Text } from "@chakra-ui/react";
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
  return (
    <button
      onClick={() => {
        handler();
      }}
      className="w-full outline-none bg-transparent transition-colors duration-150 hover:bg-gray-hover rounded-md"
    >
      <div className="flex justify-center items-center gap-4 p-3">
        <Icon as={type === "comment" ? AiOutlineComment : AiFillLike} />
        <Text as="b" fontSize="lg">
          {type === "like" ? "Like" : "Comment"}
        </Text>
      </div>
    </button>
  );
}
