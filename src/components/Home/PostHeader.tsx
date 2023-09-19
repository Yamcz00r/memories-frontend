import { Avatar, Text, Tooltip } from "@chakra-ui/react";
import getDate from "../../utils/getDate";
import PostHeaderActions from "./PostHeaderActions";
import { useAppSelector } from "../../store/hooks";
import { selectUserId } from "../../store/slice/auth";
interface PostHeaderProps {
  authorName: string;
  createdAt: string;
  postId: string;
  authorId: string;
}

export default function PostHeader({
  authorName,
  createdAt,
  postId,
  authorId,
}: PostHeaderProps) {
  const loggedInUserId = useAppSelector(selectUserId);
  const createdDate = new Date(createdAt);
  const now = new Date();
  // @ts-ignore
  const timeDifference: any = now - createdDate;
  const differenceInDays: any = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const dateLabel = getDate(createdDate);
  return (
    <header className="mb-5 w-full flex justify-between items-center gap-4">
      <div className="flex gap-3">
        <div>
          <Avatar
            size="md"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwBCQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQH/8QAKxABAQACAQIFAwMFAQAAAAAAAAECESEDMQQSQWFxBSJRFDKhI0OBsdET/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD8c0smjYCiFUXRCU2C1kAAT1BU9F2gAHbt3ApO65zDHO49PPzYztda3E4AVI1r7d7nwCAALE2sBdoACk7oCiALEXaAmhTV15u03rfuCeiaWmvaAzVKICxAFQFF2h87QF2JU2DUGZTdBpN8ogKbQBpfXbO12C7JWZTYNCRQXYgDU7ib0uOUkympd+vPHwAVAFEUDWuS9i1PQFNX8Eb2DlkzGsu6cIL6JVhQEBQ3pLSgKgaAEoAFSIKIsBRNkBqHCACmwBU3tVCd1RQApABFAKFAldOPz/LlO7e4g53mnYv7rFAEUELOF1RRmmmqzQUC0CsrsBCqAm/ZUAXSLLwACCCmwBexvaLrQKsZWKKGlgIAAG1svk82vt3qX3Bk863vwzqoFiRakBojKzsCobTai7DaAAACRdgbQEARQFRQSioC6IALpU2sUSNYpLy1MpJlJjjz62dvgEEAUQBThKXsAvlyI1z+Qc6yuW0iCw7cG1BNAiioAL6IACLUAAQFRQA2AQ7ACm0UBYaIoKhAUKAHYAChQSV11HJsHOhlxfgnKCwpIl7gRagoi6D0AAoJTSoAACUUQQ00gAAAKCbaSRewCjXT6XUzluHT6mUl1bjhbyoyHE7rcbh++XHfPM1wCUax6efU5w6eecvby427LLjvzY5TX5gMinltm9XX50DHqu7+BNIHU/flPcx16tdaa62fzf8AZ05u34AvZjbpZ9tvs5gGypVF2bSdiAptm9yUGtqyAoAAuizWWgTsqaNcAbNhZoBZeUUDa7S8Ux7z5BbXofSvG4+DniMc8up5c8ZrHH88b/iPOPnnnYPc6nj/AKdlnlljhjj9vGd6Pml57XHj09Vv1HwOW/8A06ctxxxnT30uf22Xf+dPCnF7RcvXXAPex+p+Cw1Onlenlcfu/pXy7sm+PmXsnV+qeC6k1vL7csvJep0/NretW/8APd4eHN1ewD2s/G/TLbP08nTsy/t87801z8bfD9U8R0Ot1Mf00kx192p5Zb8fD4rO3weiBbF17pYulH//2Q=="
            ignoreFallback
          />
        </div>
        <div className="flex flex-col items-center justify-center w-min mt-1">
          <Text className="text-md cursor-pointer hover:underline" as="b">
            {authorName}
          </Text>
          <Tooltip label={dateLabel}>
            <Text className="text-sm self-start text-gray-400">
              {Math.abs(differenceInDays) > 0
                ? `${Math.abs(differenceInDays)} days ago`
                : "Today"}
            </Text>
          </Tooltip>
        </div>
      </div>
      <div>
        {authorId === loggedInUserId && <PostHeaderActions postId={postId} />}
      </div>
    </header>
  );
}
