import React, { useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

export function ThemeProvider(props : any) {
  const cache = useMemo(
    () =>
      createCache({
        key: "muirtl",
        prepend: true,
      }),
    [props.theme.direction]
  );

  return (
    <CacheProvider value={cache}>
      <CssBaseline />
      <MuiThemeProvider theme={props.theme}>{props.children}</MuiThemeProvider>
    </CacheProvider>
  );
}
