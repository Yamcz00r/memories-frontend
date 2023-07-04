import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function CommentMenuDropdown() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<BiDotsHorizontalRounded />}
        variant="ghost"
      />
    </Menu>
  );
}
