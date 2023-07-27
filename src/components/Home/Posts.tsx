import PostContainer from "./Container";
import Post from "./Post";
import type { PostType } from "../../type";
import {
  Center,
  Spinner,
  ModalOverlay,
  Modal,
  ModalContent,
  Text,
} from "@chakra-ui/react";

interface PostsProps {
  posts: PostType[] | undefined;
  isLoading: boolean;
  loggedInUserId: string;
}

export default function Posts({ posts, isLoading }: PostsProps) {
  return (
    <>
      {!posts && !isLoading && (
        <Center>
          <Text as="b" fontSize="3xl">
            No posts found...
          </Text>
        </Center>
      )}
      {isLoading ? (
        <Modal isOpen={isLoading} onClose={() => {}}>
          <ModalOverlay />
          <ModalContent className="flex justify-center items-center p-10">
            <Spinner size="xl" thickness="5px" />
            <Text className="font-bold text-xl">Loading</Text>
          </ModalContent>
        </Modal>
      ) : (
        posts?.map((post) => (
          <PostContainer key={post.id}>
            <Post
              author={post.author}
              comments={post.comments}
              imageUrl={post.imageUrl}
              createdAt={post.createdAt}
              description={post.description}
              id={post.id}
              reactions={post.reactions}
              key={post.id}
            ></Post>
          </PostContainer>
        ))
      )}
    </>
  );
}
