import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const MainStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    playField: {
      padding: "100px",
      minWidth: "960px",
    },
    dashboard: {
      flexGrow: 1,
    },
  })
);
