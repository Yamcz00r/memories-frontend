export type ErrorState = {
  isError: boolean;
  message: string;
};
export type TokenResponse = {
  message: string;
  token: string;
};

export interface Post {
  id: string;
  description: string;
  tag: string[];
  imageUrl: string;
  reactions: number | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  author: Pick<Author, "userName" | "id">;
}

export interface Author {
  id: string;
  userName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  authorId: string;
  content: string;
  postId: string;
  author: Pick<Author, "userName" | "id">;
}

//TODO: UPDATE A POST INTERFACE
