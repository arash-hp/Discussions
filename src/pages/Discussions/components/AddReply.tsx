import { Textarea } from "@mui/joy";
import { Avatar, Card, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IUser } from "../../../types";

export interface AddReplyProps {
  onAdd: (text: string, user: IUser) => void;
}
const AddReply: FC<AddReplyProps> = ({ onAdd }) => {
  const [replyText, setReplyText] = useState("");

  const user = useSelector((state: RootState) => state.user.user);

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.key === "Enter" && !e.shiftKey && replyText.trim()) {
      e.preventDefault();
      onAdd(replyText, user);
      setReplyText("");
    }
  };

  return (
    <Card sx={{boxShadow:0, flexGrow:1}}>
      <Box sx={{ p: "15px" }}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Avatar variant="rounded" alt="user-avatar" sx={{borderRadius:'50%'}} />
          <Textarea
            sx={{ flexGrow: 1 }}
            minRows={1}
            placeholder="Type ..."
            value={replyText}
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </Stack>
      </Box>
    </Card>
  );
};

export default AddReply;
