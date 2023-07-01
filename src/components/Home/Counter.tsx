import { AiFillLike } from "react-icons/ai";
import { Icon, Text } from "@chakra-ui/react";

interface CounterProps {
  likeNumber: number | null;
  commentNumber: number;
}

export default function Counter({ likeNumber, commentNumber }: CounterProps) {
  return (
    <div className="w-5/6 mx-auto flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <Icon as={AiFillLike} />
        <Text fontSize="lg">{likeNumber === null ? "0" : likeNumber}</Text>
      </div>
      <Text>{commentNumber} comments</Text>
    </div>
  );
}
