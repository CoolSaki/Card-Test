import { Table } from "./components/Table/Table";
import { MainStyle } from "./MainStyle";

export const Main = () => {
  const classes = MainStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.playField}>
          <Table />
        </div>
        <div className={classes.dashboard}></div>
      </div>
    </>
  );
};
