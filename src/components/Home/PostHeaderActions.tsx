import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeletePostMutation } from "../../store/api/posts";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slice/auth";
import { BsThreeDots } from "react-icons/bs";

interface PostHeaderActionsProps {
  postId: string;
}

export default function PostHeaderActions({ postId }: PostHeaderActionsProps) {
  const [deletePost] = useDeletePostMutation();
  const token = useAppSelector(selectToken);
  const toast = useToast();
  const handlePostDelete = async (id: string) => {
    await deletePost({
      token,
      postId: postId,
    });
    toast({
      status: "success",
      title: "All good!",
      description: "Successfully deleted a post!",
      isClosable: true,
      position: "bottom-right",
      duration: 1000,
    });
  };

  return (
    <Menu>
      <MenuButton
        background="transparent"
        as={IconButton}
        icon={<BsThreeDots />}
      />
      <MenuList>
        <MenuItem
          onClick={() => handlePostDelete(postId)}
          icon={<DeleteIcon />}
        >
          Delete
        </MenuItem>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
      </MenuList>
    </Menu>
  );
}
