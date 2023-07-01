import { Avatar } from "@chakra-ui/react";

interface PostHeaderProps {
  authorName: string;
}

export default function PostHeader({ authorName }: PostHeaderProps) {
  return (
    <div className="flex justify-start items-center gap-4 mb-5 cursor-pointer w-min">
      <Avatar size="md" />
      <p className="font-bold text-xl cursor-pointer hover:underline">
        {authorName}
      </p>
    </div>
  );
}
