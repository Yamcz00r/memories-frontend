import CommentModal from "./CommentModal";
import { Text, useDisclosure } from "@chakra-ui/react";
import { ComponentType, ReactElement } from "react";
interface ActionButtonProps {
  type: string;
  postId: string;
  userId: string;
  handler: any;
  Icon: ComponentType;
}

export default function ActionButton({
  type,
  postId,
  userId,
  handler,
  Icon,
}: ActionButtonProps) {
  return (
    <>
      <button
        onClick={async () => {
          await handler(postId);
        }}
        className="w-full outline-none bg-transparent transition-colors duration-150 hover:bg-gray-hover rounded-md"
      >
        <div className="flex justify-center items-center gap-4 p-3">
          <Icon />
          <Text as="b" fontSize="lg">
            {type}
          </Text>
        </div>
      </button>
    </>
  );
}
