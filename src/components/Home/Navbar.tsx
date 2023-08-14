import {
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import { KeyboardEvent, useState } from "react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import type { UserInfo } from "../../store/api/auth";
import { Link, useNavigate } from "react-router-dom";
import { clearToken } from "../../store/slice/auth";
import { useDispatch } from "react-redux";
type NavbarProps = {
  user: UserInfo | undefined;
  error: any;
  isLoading: boolean;
  value?: string | null;
};

export default function Navbar({ value, user, error, isLoading }: NavbarProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const redirectHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchValue}`);
    }
  };

  const logoutHandler = () => {
    dispatch(clearToken());
    navigate("/");
  };

  return (
    <nav className="w-full sticky z-10 top-0 bg-white shadow-md  px-5 py-2 flex justify-between items-center">
      <Tooltip label="Memories">
        <Link to="/home" className="font-bold text-3xl md:text-4xl xl:text-3xl">
          Memories
        </Link>
      </Tooltip>
      <div>
        <Tooltip label="Search bar">
          <InputGroup onKeyUp={redirectHandler}>
            <InputLeftElement>
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              value={searchValue}
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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <div className="transition-colors duration-150 cursor-pointer flex justify-center items-center p-2 gap-4 hover:bg-gray-hover rounded-md ">
                <p className="font-bold text-lg">
                  {isLoading ? "Loading..." : user?.userInfo.userName}
                </p>
              </div>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logoutHandler}>
                <Text>Log out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Tooltip>
      </div>
    </nav>
  );
}
