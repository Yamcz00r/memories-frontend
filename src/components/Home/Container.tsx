import { ReactNode } from "react";

interface PostContainerProps {
  children?: ReactNode;
  className?: string;
}

export default function PostContainer({
  children,
  className,
}: PostContainerProps) {
  return (
    <article
      className={`mx-auto w-2/5 rounded-md shadow-2xl my-10 bg-white  ${className}`}
    >
      {children}
    </article>
  );
}
