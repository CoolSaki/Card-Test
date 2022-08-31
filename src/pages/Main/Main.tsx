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
        <div className={classes.dashboard}>
          <span className={classes.resultHeader}>Result</span>
          <div className={classes.column}>
            <div className={classes.item}>A</div>
            <span className={classes.divDot}>:</span>
            <div className={classes.item}>B</div>
          </div>
          <div className={classes.column}>
            <div className={classes.item}>13</div>
            <div className={classes.item}>15</div>
          </div>
          <div className={classes.column}>
            <div className={classes.item}>TOTAL : 100</div>
            <div className={classes.item}>TOTAL : 200</div>
          </div>
        </div>
        <div className={classes.dashboardDown}>
          <span className={classes.resultHeader}>Result</span>
          <div className={classes.dashboardTitle}>
            <div className={classes.itemDown}>A</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>B</div>
          </div>
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>15</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>17</div>
          </div>
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>15</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>17</div>
          </div>
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>15</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>17</div>
          </div>
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>15</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>17</div>
          </div>
          <div className={classes.dashboardDownBody}>
            <div className={classes.itemDown}>TOTAL : 15</div>
            <div className={classes.itemDiv}></div>
            <div className={classes.itemDown}>TOTAL : 17</div>
          </div>
        </div>
      </div>
    </>
  );
};
