import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card_div_time } from "config/constant";
import table from "../../../../assets/image/table.png";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      width: "760px",
      height: "360px",
      margin: "auto",
      backgroundImage: `url(${table})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    btnRoot: {
      position: "absolute",
      top: -50,
      right: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    playBtn: {
      marginLeft: "10px",
    },
    avatar1Root: {
      position: "absolute",
      top: "-60px",
      left: "44%",
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      overflow: "hidden",
      padding: "3px",
      background: "#eee",
    },
    avatar2Root: {
      position: "absolute",
      top: "40%",
      left: "-60px",
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      overflow: "hidden",
      padding: "3px",
      background: "#eee",
    },
    avatar3Root: {
      position: "absolute",
      bottom: "-60px",
      left: "44%",
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      overflow: "hidden",
      padding: "3px",
      background: "#eee",
    },
    avatar4Root: {
      position: "absolute",
      top: "40%",
      right: "-60px",
      width: "50px",
      height: "50px",
      borderRadius: "50px",
      overflow: "hidden",
      padding: "3px",
      background: "#eee",
    },
    field1: {
      position: "absolute",
      top: "20px",
      left: "32%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(180deg)",
    },
    field2: {
      position: "absolute",
      top: "46%",
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(90deg)",
    },
    field3: {
      position: "absolute",
      bottom: "20px",
      left: "33%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    field4: {
      position: "absolute",
      top: "44%",
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(-90deg)",
    },
    avatar: {
      width: "100%",
      height: "100%",
      borderRadius: "50px",
    },
    card: {
      width: "30px",
      marginLeft: "-10px",
      cursor: "pointer",
      "&:hover": {
        transform: "translate(0, -5px)",
      },
    },
    centerRoot: {
      position: "absolute",
      top: "46%",
      left: "48%",
    },
    animationComplexLeft: {
      animation: `$leftRight 300ms infinite ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes leftRight": {
      "0%": {
        transform: "translate(15px,0)",
      },
      "100%": {
        transform: "none",
      },
    },
    animationComplexRight: {
      animation: `$rightLeft 300ms infinite ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes rightLeft": {
      "0%": {
        transform: "translate(-15px,0)",
      },
      "100%": {
        transform: "none",
      },
    },
    animationDivTop: {
      animation: `$divTop ${Card_div_time}ms 1 ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes divTop": {
      "0%": {
        transform: "none",
      },
      "100%": {
        transform: "translate(0, -130px) rotate(180deg)",
      },
    },
    animationDivLeft: {
      animation: `$divLeft ${Card_div_time}ms 1 ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes divLeft": {
      "0%": {
        transform: "none",
      },
      "100%": {
        transform: "translate(-250px, 0) rotate(90deg)",
      },
    },
    animationDivDown: {
      animation: `$divDown ${Card_div_time}ms 1 ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes divDown": {
      "0%": {
        transform: "none",
      },
      "100%": {
        transform: "translate(0, 130px) rotate(180deg)",
      },
    },
    animationDivRight: {
      animation: `$divRight ${Card_div_time}ms 1 ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes divRight": {
      "0%": {
        transform: "none",
      },
      "100%": {
        transform: "translate(250px, 0) rotate(90deg)",
      },
    },
    putRoot1: {
      position: "absolute",
      top: "20px",
      left: "48%",
    },
    putRoot2: {
      position: "absolute",
      top: "46%",
      left: "100px",
      transform: "rotate(90deg)",
    },
    putRoot3: {
      position: "absolute",
      bottom: "20px",
      left: "48%",
    },
    putRoot4: {
      position: "absolute",
      top: "46%",
      right: "100px",
      transform: "rotate(90deg)",
    },
    cardBack: {
      width: "30px",
    },
  })
);
