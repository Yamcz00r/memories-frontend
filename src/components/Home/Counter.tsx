import likeImg from "/public/563_facebook_like.jpg";
import { Icon, Image, Text } from "@chakra-ui/react";

interface CounterProps {
  likeNumber: number | null;
  commentNumber: number;
}

export default function Counter({ likeNumber, commentNumber }: CounterProps) {
  return (
    <div className="w-full px-2 mx-auto flex justify-between items-center">
      <div className="flex justify-center items-center ">
        <img src={likeImg} width={40} height={40} />
        <Text fontSize="lg" className="text-gray-500">
          {likeNumber === null ? "0" : likeNumber}
        </Text>
      </div>
      <Text fontSize="lg" className="text-gray-500">
        {commentNumber} comments
      </Text>
    </div>
  );
}
