export type ErrorState = {
  isError: boolean;
  message: string;
};
export type TokenResponse = {
  message: string;
  token: string;
};

export interface PostType {
  id: string;
  description: string;

  imageUrl: string;
  reactions: number | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  author: Pick<Author, "userName" | "id">;
}

export interface PostDeleteResponse {
  id: string;
  description: string;

  imageUrl: string;
  reactions: number | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  userName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentType {
  id: string;
  authorId: string;
  content: string;
  postId: string;
  author: Pick<Author, "userName" | "id">;
}

//TODO: UPDATE A POST INTERFACE
