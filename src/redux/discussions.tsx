import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IDiscussion, IUser } from "../types";

const initialState: { discussions: IDiscussion[] } = {
  discussions: [
    {
      id: 3,
      date: 1672576574000,
      user: {
        name: "Bessie Cooper",
        avatar:
          "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
      },
      text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
      likes: 2,
      iLikedIt: false,
      replies: [
        {
          id: 5,
          date: 1672581014000,
          user: {
            name: "Marvin McKinney",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          },
          text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
          likes: 3,
          iLikedIt: true,
        },
        {
          id: 6,
          date: 1672581614000,
          user: {
            name: "Bessie Cooper",
            avatar:
              "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
          },
          text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
          likes: 0,
          iLikedIt: false,
        },
      ],
    },

    {
      id: 2,
      date: 1672232414000,
      user: {
        name: "Marvin McKinney",
        avatar:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
      text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
      likes: 2,
      iLikedIt: false,
      replies: [],
    },

    {
      id: 1,
      date: 1671886814000,
      user: {
        name: "Savannah Nguyen",
      },
      text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
      likes: 50,
      iLikedIt: true,
      replies: [],
    },
  ],
};

export const discussionsSlice = createSlice({
  name: "discussion",
  initialState,
  reducers: {
    likeDiscussion: (state, action) => {
      const { id } = action.payload;
      const discussion = state.discussions.find((item) => item.id === id);
      if (!discussion) {
        return;
      }
      if (discussion.iLikedIt) {
        discussion.iLikedIt = false;
        discussion.likes -= 1;
      } else {
        discussion.iLikedIt = true;
        discussion.likes += 1;
      }
    },

    likeReply: (state, action) => {
      const { discussionId, id } = action.payload;

      const discussion = state.discussions.find(
        (item) => item.id === discussionId
      );
      const comment = discussion?.replies.find((item) => item.id === id);

      if (!comment) {
        return;
      }
      if (comment.iLikedIt) {
        comment.iLikedIt = false;
        comment.likes -= 1;
      } else {
        comment.iLikedIt = true;
        comment.likes += 1;
      }
    },

    addReply: (state, action) => {
      const { text, discussionId, user } = action.payload;
      const discussion = state.discussions.find(
        (item) => item.id === discussionId
      );
      if (!discussion) {
        return;
      }
      const reply: IComment = {
        text,
        user,
        date: Date.now(),
        id: Date.now(),
        iLikedIt: false,
        likes: 0,
      };

      discussion.replies.push(reply);
    },

    addDiscussion: (
      state,
      action: PayloadAction<{ text: string; user: IUser }>
    ) => {
      const { text, user } = action.payload;

      const discussion: IDiscussion = {
        text,
        user,
        date: Date.now(),
        id: Date.now(),
        iLikedIt: false,
        likes: 0,
        replies: [],
      };

      state.discussions.push(discussion);
    },
  },
});

export const { addReply, likeDiscussion, likeReply, addDiscussion } =
  discussionsSlice.actions;
// Action creators are generated for each case reducer function

export default discussionsSlice.reducer;
