import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  Input,
  ModalBody,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { usePostCommentMutation } from "../../store/api/posts";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
interface CommentModalProps {
  onClose: () => void;
  isOpen: boolean;
  postId: string;
}

export default function CommentModal({
  onClose,
  isOpen,
  postId,
}: CommentModalProps) {
  const [postComment] = usePostCommentMutation();
  const [val, setVal] = useState("");
  const [uploadErr, setUploadErr] = useState(false);

  const token = useAppSelector((state) => state.auth.token);

  const handleUpload = async () => {
    if (val.length === 0) {
      setUploadErr(true);
      return;
    } else {
      setUploadErr(false);
    }

    try {
      await postComment({
        content: val,
        postId,
        token,
      });

      onClose();
      setVal("");
    } catch (error) {}
  };

  return (
    <Modal onClose={onClose} closeOnEsc isCentered isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Upload a comment</ModalHeader>
        <ModalBody className="flex flex-col">
          {uploadErr && (
            <Alert status="error">
              <AlertIcon />
              There was an error with your request!
            </Alert>
          )}
          <Input
            value={val}
            className="my-4"
            placeholder="Write your comment"
            onChange={(event) => setVal(event.target.value)}
            type="text"
          />
          <button
            onClick={handleUpload}
            className="px-3 py-1 self-end w-min-content border outline-none bg-transparent transition-colors duration-150 hover:bg-gray-hover rounded-md focus:bg-black focus:text-white"
          >
            Upload
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
