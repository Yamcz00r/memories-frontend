import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { CommentType } from "../../type";
interface CommentProps {
  data: CommentType;
}
export default function Comment({ data }: CommentProps) {
  return (
    <div className="w-full flex gap-3 bg-slate-200 p-2 rounded-md ">
      <Avatar
        size="md"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwBCQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQH/8QAKxABAQACAQIFAwMFAQAAAAAAAAECESEDMQQSQWFxBSJRFDKhI0OBsdET/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD8c0smjYCiFUXRCU2C1kAAT1BU9F2gAHbt3ApO65zDHO49PPzYztda3E4AVI1r7d7nwCAALE2sBdoACk7oCiALEXaAmhTV15u03rfuCeiaWmvaAzVKICxAFQFF2h87QF2JU2DUGZTdBpN8ogKbQBpfXbO12C7JWZTYNCRQXYgDU7ib0uOUkympd+vPHwAVAFEUDWuS9i1PQFNX8Eb2DlkzGsu6cIL6JVhQEBQ3pLSgKgaAEoAFSIKIsBRNkBqHCACmwBU3tVCd1RQApABFAKFAldOPz/LlO7e4g53mnYv7rFAEUELOF1RRmmmqzQUC0CsrsBCqAm/ZUAXSLLwACCCmwBexvaLrQKsZWKKGlgIAAG1svk82vt3qX3Bk863vwzqoFiRakBojKzsCobTai7DaAAACRdgbQEARQFRQSioC6IALpU2sUSNYpLy1MpJlJjjz62dvgEEAUQBThKXsAvlyI1z+Qc6yuW0iCw7cG1BNAiioAL6IACLUAAQFRQA2AQ7ACm0UBYaIoKhAUKAHYAChQSV11HJsHOhlxfgnKCwpIl7gRagoi6D0AAoJTSoAACUUQQ00gAAAKCbaSRewCjXT6XUzluHT6mUl1bjhbyoyHE7rcbh++XHfPM1wCUax6efU5w6eecvby427LLjvzY5TX5gMinltm9XX50DHqu7+BNIHU/flPcx16tdaa62fzf8AZ05u34AvZjbpZ9tvs5gGypVF2bSdiAptm9yUGtqyAoAAuizWWgTsqaNcAbNhZoBZeUUDa7S8Ux7z5BbXofSvG4+DniMc8up5c8ZrHH88b/iPOPnnnYPc6nj/AKdlnlljhjj9vGd6Pml57XHj09Vv1HwOW/8A06ctxxxnT30uf22Xf+dPCnF7RcvXXAPex+p+Cw1Onlenlcfu/pXy7sm+PmXsnV+qeC6k1vL7csvJep0/NretW/8APd4eHN1ewD2s/G/TLbP08nTsy/t87801z8bfD9U8R0Ot1Mf00kx192p5Zb8fD4rO3weiBbF17pYulH//2Q=="
        ignoreFallback
      />
      <section className="flex flex-col flex-1">
        <div className="w-full flex justify-start items-center gap-2">
          <Text className="text-md cursor-pointer hover:underline" as="b">
            {data.author.userName}
          </Text>
        </div>
        <div>{data.content}</div>
      </section>
    </div>
  );
}
