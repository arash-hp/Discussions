import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Badge, Button, Grid, IconButton, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReply, likeDiscussion } from "../../../redux/discussions";
import { RootState } from "../../../redux/store";
import { IDiscussion } from "../../../types";
import AddReply, { AddReplyProps } from "./AddReply";
import Comment from "./Comment";

interface DiscussionProps {
  item: IDiscussion;
}

const Discussion: FC<DiscussionProps> = ({ item }) => {
  const [showReply, setShowReply] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const handleComment: AddReplyProps["onAdd"] = (newComment) => {
    dispatch(addReply({ text: newComment, discussionId: item.id, user: user }));
    setShowReply(false);
  };

  const handleLike = () => {
    dispatch(likeDiscussion({ id: item.id }));
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <List
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          borderTop: "4px solid #e7ebef",
          borderRight: "4px solid #e7ebef",
          borderLeft: "4px solid #e7ebef",
          padding: 0,
        }}
      >
        <Grid
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={item.user.avatar} />
          {item.replies.length ?
            <Paper
              sx={{
                height: "100%",
                width: ".5px",
                backgroundColor: "#f5f5f5",
                mt: 2,
              }}
            />:
            null
          }
        </Grid>

        <Grid>
          <Grid p={2} pl={0}>
            <Grid display="flex">
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  paddingRight: 2,
                  color: "black",
                }}
              >
                {item.user.name}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#adb3b0" }}>
                {moment(item.date).fromNow()}
              </Typography>
            </Grid>
          </Grid>

          <Grid>
            <Typography color="#757f7a" sx={{ fontSize: 14 }}>
              {item.text}
            </Typography>
            <Grid>
              <IconButton
                onClick={handleLike}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge
                  badgeContent={item.likes}
                  // color={(like && idItem === item.id ) ? 'primary' : 'info'}
                  sx={{
                    ".MuiBadge-badge ": {
                      top: 12,
                      left: 20,
                    },
                  }}
                >
                  {/* <ThumbUpIcon sx={{'color': likeIt ? idComment === item.id ? '#1976d2' : '#757f7a' :'#757f7a' }} /> */}
                  <ThumbUpIcon
                    sx={{
                      color: item.iLikedIt ? "#1976d2" : "#757f7a",
                    }}
                  />
                </Badge>
              </IconButton>
              <Button
                variant="text"
                sx={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  color: "custom.moderateBlue",
                  paddingLeft: 4,
                }}
                onClick={() => setShowReply(true)}
              >
                Reply
              </Button>
            </Grid>
          </Grid>

          <Grid>
            {item.replies.map((reply) => {
              return (
                <Comment key={reply.id} item={reply} discussionId={item.id} />
              );
            })}
          </Grid>
          {showReply && <AddReply onAdd={handleComment} />}
        </Grid>
      </List>
    </Paper>
  );
};
export default Discussion;
