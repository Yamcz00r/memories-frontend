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
    <div
      className={`mx-auto w-2/5 rounded-md shadow-lg my-10 bg-white p-2 ${className}`}
    >
      {children}
    </div>
  );
}
