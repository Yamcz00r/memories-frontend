import {
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
} from "@chakra-ui/react";
import { KeyboardEvent, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import type { UserInfo } from "../../store/api/auth";
import { Link, useNavigate } from "react-router-dom";

type NavbarProps = {
  user: UserInfo | undefined;
  error: any;
  isLoading: boolean;
};

export default function Navbar({ user, error, isLoading }: NavbarProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const redirectHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchValue}`);
    }
  };

  return (
    <nav className="w-full sticky z-10 top-0 bg-white shadow-md  px-5 py-2 flex justify-between items-center">
      <Tooltip label="Memories">
        <div className="font-bold text-3xl md:text-4xl xl:text-3xl">
          Memories
        </div>
      </Tooltip>
      <div>
        <Tooltip label="Search bar">
          <InputGroup onKeyUp={redirectHandler}>
            <InputLeftElement>
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              onChange={(e) => setSearchValue(e.target.value)}
              size="md"
              width="xl"
              placeholder="Search on memories"
            />
          </InputGroup>
        </Tooltip>
      </div>
      <div>
        <Tooltip label="Account">
          <Link
            to="/profile"
            className="transition-colors duration-150 cursor-pointer flex justify-center items-center p-2 gap-4 hover:bg-gray-hover rounded-md "
          >
            <p className="font-bold text-lg">
              {isLoading ? "Loading..." : user?.userInfo.userName}
            </p>
            <Avatar size="xs" />
          </Link>
        </Tooltip>
      </div>
    </nav>
  );
}
