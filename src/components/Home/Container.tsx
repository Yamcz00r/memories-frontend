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
      className={`mx-auto w-2/5 rounded-md shadow-lg bg-white p-5 ${className}`}
    >
      {children}
    </div>
  );
}
