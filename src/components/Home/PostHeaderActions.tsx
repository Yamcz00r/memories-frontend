import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { BsThreeDots } from "react-icons/bs";
export default function PostHeaderActions() {
  return (
    <Menu>
      <MenuButton
        background="transparent"
        as={IconButton}
        icon={<BsThreeDots />}
      />
      <MenuList>
        <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuList>
    </Menu>
  );
}
