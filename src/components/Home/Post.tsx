import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Author, Comment } from "../../type";
import PostContainer from "./Container";
import fallbackImage from "/public/fallback.jpg";
import ImageModal from "./ImageModal";
import Counter from "./Counter";
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
import ActionButton from "./ActionButton";
import PostHeader from "./PostHeader";

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
  comments,
  id,
}: PostProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const commentsNumber = comments.reduce((accumulator) => accumulator + 1, 0);

  return (
    <div className="w-full p-1">
      <PostHeader authorName={author.userName} />
      <p className="w-full my-4">{description}</p>
      <div className="w-full cursor-pointer my-3" onClick={onOpen}>
        <Image
          className="w-full aspect-video object-contain"
          src={`http://localhost:8080/${imageUrl}`}
          fallbackSrc={fallbackImage}
        />
        <ImageModal imageSrc={imageUrl} onClose={onClose} isOpen={isOpen} />
      </div>
      <Counter likeNumber={reactions} commentNumber={commentsNumber} />
      <div className="w-full my-3 p-2 flex justify-center">
        <ActionButton
          type="like"
          userId={author.id}
          postId={id}
          handler={() => {}}
        />
        <ActionButton
          type="comment"
          userId={author.id}
          postId={id}
          handler={() => {}}
        />
      </div>
    </div>
  );
}
//TODO: CREATE A ACTION COMPONENT FOR LIKE EITHER A COMMENT
