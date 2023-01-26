import { Grid, List, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addDiscussion } from "../../redux/discussions";
import { RootState } from "../../redux/store";
import AddReply, { AddReplyProps } from "./components/AddReply";
import Discussion from "./components/Discussion";

const Discussions = () => {
  const dispatch = useDispatch();
  const discussions = useSelector(
    (state: RootState) => state.discussions.discussions
  );

  const handleDiscussion:AddReplyProps['onAdd'] = (text,user) => {
    dispatch(addDiscussion({text,user}))
  };
  return (
    <Grid>
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
            // border: "4px solid #e7ebef",
            borderTop:"4px solid #e7ebef",
            borderRight:"4px solid #e7ebef",
            borderLeft:"4px solid #e7ebef",
            padding: 0,
          }}
        >
          <AddReply onAdd={handleDiscussion} />
        </List>
      </Paper>

      {discussions.map((item) => {
        return <Discussion key={item.id} item={item} />;
      })}
    </Grid>
  );
};
export default Discussions;
