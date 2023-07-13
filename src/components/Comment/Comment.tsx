import { Avatar, Text } from "@chakra-ui/react";

export default function Comment() {
  return (
    <article className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex justify-between">
        <div className="flex items-center justify-between gap-1">
          <Avatar size="sm" />
          <Text size="sm" className="font-bold">
            Username
          </Text>
        </div>
        <time></time>
      </div>
    </article>
  );
}
