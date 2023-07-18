import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import { usePostCommentMutation } from "../../store/api/posts";
import { BiSolidSend } from "react-icons/bi";
import { useState } from "react";

interface CommentWithInputProps {
  postId: string;
}

export default function CommentWithInput({ postId }: CommentWithInputProps) {
  const token = useAppSelector((state) => state.auth.token);
  const [postComment] = usePostCommentMutation();
  const [value, setValue] = useState<string>("");
  const toast = useToast();

  const postCommentHandler = async () => {
    if (value.length === 0) {
      toast({
        title: "Something went wrong",
        description: "Make sure the comment is not empty!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    await postComment({
      content: value,
      postId,
      token,
    });
    setValue("");
    toast({
      title: "All good!",
      description: "Successfully posted a comment",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div className="w-full flex justify-center items-center gap-3 bg-slate-200 p-2 rounded-md ">
      <Avatar
        size="md"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwBCQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQH/8QAKxABAQACAQIFAwMFAQAAAAAAAAECESEDMQQSQWFxBSJRFDKhI0OBsdET/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD8c0smjYCiFUXRCU2C1kAAT1BU9F2gAHbt3ApO65zDHO49PPzYztda3E4AVI1r7d7nwCAALE2sBdoACk7oCiALEXaAmhTV15u03rfuCeiaWmvaAzVKICxAFQFF2h87QF2JU2DUGZTdBpN8ogKbQBpfXbO12C7JWZTYNCRQXYgDU7ib0uOUkympd+vPHwAVAFEUDWuS9i1PQFNX8Eb2DlkzGsu6cIL6JVhQEBQ3pLSgKgaAEoAFSIKIsBRNkBqHCACmwBU3tVCd1RQApABFAKFAldOPz/LlO7e4g53mnYv7rFAEUELOF1RRmmmqzQUC0CsrsBCqAm/ZUAXSLLwACCCmwBexvaLrQKsZWKKGlgIAAG1svk82vt3qX3Bk863vwzqoFiRakBojKzsCobTai7DaAAACRdgbQEARQFRQSioC6IALpU2sUSNYpLy1MpJlJjjz62dvgEEAUQBThKXsAvlyI1z+Qc6yuW0iCw7cG1BNAiioAL6IACLUAAQFRQA2AQ7ACm0UBYaIoKhAUKAHYAChQSV11HJsHOhlxfgnKCwpIl7gRagoi6D0AAoJTSoAACUUQQ00gAAAKCbaSRewCjXT6XUzluHT6mUl1bjhbyoyHE7rcbh++XHfPM1wCUax6efU5w6eecvby427LLjvzY5TX5gMinltm9XX50DHqu7+BNIHU/flPcx16tdaa62fzf8AZ05u34AvZjbpZ9tvs5gGypVF2bSdiAptm9yUGtqyAoAAuizWWgTsqaNcAbNhZoBZeUUDa7S8Ux7z5BbXofSvG4+DniMc8up5c8ZrHH88b/iPOPnnnYPc6nj/AKdlnlljhjj9vGd6Pml57XHj09Vv1HwOW/8A06ctxxxnT30uf22Xf+dPCnF7RcvXXAPex+p+Cw1Onlenlcfu/pXy7sm+PmXsnV+qeC6k1vL7csvJep0/NretW/8APd4eHN1ewD2s/G/TLbP08nTsy/t87801z8bfD9U8R0Ot1Mf00kx192p5Zb8fD4rO3weiBbF17pYulH//2Q=="
        ignoreFallback
      />
      <InputGroup>
        <Input
          value={value}
          placeholder="Write a comment.."
          variant="unstyled"
          fontSize="lg"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <InputRightElement>
          <Tooltip label="Post comment">
            <IconButton
              onClick={postCommentHandler}
              size="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              aria-label="Post comment"
              variant="unstyled"
              icon={<BiSolidSend />}
            />
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
