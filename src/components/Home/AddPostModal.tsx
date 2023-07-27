import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slice/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCreatePostMutation } from "../../store/api/posts";

interface AddPostModalProps {
  onClose: () => void;
  isOpen: boolean;
  userName: string | undefined;
}

export default function AddPostModal({ onClose, isOpen }: AddPostModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const token = useAppSelector(selectToken);
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", text);
    try {
      const response = await fetch("http://localhost:8080/content/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text className="font-bold text-center text-2xl">Create a post</Text>
          <ModalCloseButton />
          <hr className="my-1" />
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              placeholder="What are you thinking"
              className="w-full outline-none resize-none"
            />
            <div className="flex items-center justify-center w-full">
              {!file ? (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              ) : (
                <div className="relative">
                  <img src={URL.createObjectURL(file)}></img>
                  <button
                    onClick={() => setFile(undefined)}
                    style={{ position: "absolute", top: "3px", left: "3px" }}
                    className="bg-white font-bold px-3 py-1 text-black rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <button className="w-full my-3 p-2 rounded-md bg-slate-200 text-gray-700 cursor-pointer">
              Upload
            </button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
