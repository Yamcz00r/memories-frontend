import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Text,
  Image,
} from "@chakra-ui/react";

import fallbackImage from "../../../public/fallback.jpg";

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  imageSrc,
  onClose,
}: ImageModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Your Image</Text>
        </ModalHeader>
        <ModalCloseButton />
        <div>
          <Image
            fallbackSrc={fallbackImage}
            src={`http://localhost:8080/${imageSrc}`}
            className="w-full p-3"
          />
        </div>
      </ModalContent>
    </Modal>
  );
}
