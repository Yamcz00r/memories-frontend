import { Avatar, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import type { UserInfo } from "../../store/api/auth";
type NavbarProps = {
  user: UserInfo | undefined;
  error: any;
  isLoading: boolean;
};

export default function Navbar({ user, error, isLoading }: NavbarProps) {
  console.log(user, error, isLoading);

  return (
    <nav className="w-full sticky top-0 bg-white shadow-md px-5 py-2 flex justify-between items-center">
      <div className="font-bold text-3xl md:text-4xl xl:text-3xl">Memories</div>
      <div>
        <InputGroup onClick={(e) => console.log(e)}>
          <InputLeftElement>
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input size="md" width="xl" placeholder="Search on memories" />
        </InputGroup>
      </div>
      <div>
        <div className="transition-colors duration-150 cursor-pointer flex justify-center items-center p-2 gap-4 hover:bg-gray-hover rounded-md ">
          <p className="font-bold text-lg">
            {isLoading ? "Loading..." : user?.userInfo.userName}
          </p>
          <Avatar size="xs" />
        </div>
      </div>
    </nav>
  );
}
