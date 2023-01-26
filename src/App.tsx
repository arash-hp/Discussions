import React from "react";
import HomePage from "./pages/HomePage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//       info: {
//           main: '#757f7a'
//       }
//     },
// });


function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    // </ThemeProvider>
  );
}

export default App;
