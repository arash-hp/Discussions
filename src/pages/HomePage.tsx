import { Grid } from "@mui/material";
import { FC } from "react";
import Discussions from "./Discussions/Discussions";
// import MyPro from "./MyPro/MyPro";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <Grid
    sx={{
      height: "100vh",
      width: "100vw",
    }}
  >
    <Discussions />
  </Grid>
);

export default HomePage;
