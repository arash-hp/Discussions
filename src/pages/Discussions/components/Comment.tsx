import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Badge, Grid, IconButton, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { likeReply } from "../../../redux/discussions";
import { IComment, IDiscussion } from "../../../types";

interface CommentProps {
  item: IComment;
  discussionId: IDiscussion["id"];
}

const Comment: FC<CommentProps> = ({ item, discussionId }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeReply({ id: item.id, discussionId }));
  };
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        boxShadow: 0,
      }}
    >
      <List
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 500,
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
            <Typography
              color="#757f7a"
              sx={{
                wordBreak: "break-word",
                fontSize: 14
              }}
            >
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
            </Grid>
          </Grid>
        </Grid>
      </List>
    </Paper>
  );
};
export default Comment;
