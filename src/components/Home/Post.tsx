import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Author, Comment } from "../../type";
import PostContainer from "./Container";

import {
  Avatar,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
  Text,
  Divider,
} from "@chakra-ui/react";

interface PostProps {
  author: Pick<Author, "userName" | "id">;
  imageUrl: string;
  reactions: number | null;
  description: string;
  createdAt: string;
  comments: Comment[];
  id: string;
  tag: string[];
}

export default function Post({
  author,
  imageUrl,
  reactions,
  description,
  createdAt,
}: PostProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="w-full p-1">
      <div className="flex justify-start items-center gap-4 mb-5 cursor-pointer w-min">
        <Avatar size="md" />
        <p className="font-bold text-xl cursor-pointer hover:underline">
          {author.userName}
        </p>
      </div>
      <p className="w-full my-4">{description}</p>
      <div className="w-full cursor-pointer my-3" onClick={onOpen}>
        <img
          className="w-full aspect-video object-contain"
          src={`http://localhost:8080/${imageUrl}`}
        />
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text>Your Image</Text>
            </ModalHeader>
            <ModalCloseButton />
            <div>
              <img
                src={`http://localhost:8080/${imageUrl}`}
                className="w-full p-3"
              />
            </div>
          </ModalContent>
        </Modal>
      </div>
      <Divider colorScheme="gray" color="gray.600" />
      <div className="w-full flex justify-center items-center">
        <button></button>
      </div>
      <Divider colorScheme="gray" color="gray.600" />
    </div>
  );
}
//TODO: CREATE A ACTION COMPONENT FOR LIKE EITHER A COMMENT
