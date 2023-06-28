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
  title;
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
  author: Author;
}

//TODO: UPDATE A POST INTERFACE
