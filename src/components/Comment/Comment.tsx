import { Avatar, Text } from "@chakra-ui/react";

export default function Comment() {
  return (
    <article className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex justify-between">
        <div>
          <Avatar size="sm" />
          <Text size="sm">Username</Text>
          <time dateTime="2023-06-20"></time>
        </div>
      </div>
    </article>
  );
}
