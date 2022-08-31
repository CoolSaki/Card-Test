import { useStyles } from "./TableStyle";
import avatar1 from "../../../../assets/image/avatar1.png";
import avatar2 from "../../../../assets/image/avatar2.png";
import avatar3 from "../../../../assets/image/avatar3.png";
import avatar4 from "../../../../assets/image/avatar4.png";
import { CARD, Card_back, Card_div_time } from "config/constant";
import { useState } from "react";
import clsx from "clsx";
import RoundButton from "components/RoundButton";
import winner from "../../../../assets/image/winner.png";

interface TableProps {
  result: (e: any) => void;
}

export const Table = ({ result }: TableProps) => {
  const classes = useStyles();
  const [firstC, setFirstC] = useState<any>();
  const [secondC, setSecondC] = useState<any>();
  const [thirdC, setThirdC] = useState<any>();
  const [fourthC, setFourthC] = useState<any>();
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  const [thirdScore, setThirdScore] = useState(0);
  const [fourthScore, setFourthScore] = useState(0);
  const [complex, setComplex] = useState<boolean>();
  const [animationDiv, setAnimationDiv] = useState<number>();
  const [status, setStatus] = useState<boolean>();
  const [endStatus, setEndStatus] = useState<boolean>();

  const diving = async () => {
    let index: number = 0;
    await setStatus(true);
    await setInterval(() => {
      index++;
      if (index < 12) {
        setAnimationDiv(index % 4);
      } else {
        setStatus(false);
        setEndStatus(true);
      }
    }, Card_div_time);
  };

  const refresh = () => {
    window.location.reload();
  };

  const startCard = async () => {
    setComplex(false);
    setStatus(false);
    setEndStatus(false);
    setAnimationDiv(0);
    const first: any = [];
    const second: any = [];
    const third: any = [];
    const fourth: any = [];
    const all: any = [];
    await setComplex(true);
    await CARD.map((item: any) => {
      item.map((index: any) => {
        all.push(index);
      });
    });
    for (let i = 0; i < 13; i++) {
      await first.push(
        all.splice(Math.floor(Math.random() * all.length), 1)[0]
      );
      await second.push(
        all.splice(Math.floor(Math.random() * all.length), 1)[0]
      );
      await third.push(
        all.splice(Math.floor(Math.random() * all.length), 1)[0]
      );
      await fourth.push(
        all.splice(Math.floor(Math.random() * all.length), 1)[0]
      );
    }
    let Ttotal: number = 0;
    let Ltotal: number = 0;
    let Btotal: number = 0;
    let Rtotal: number = 0;
    first?.map((item: any) => {
      if (item?.index < 17) {
        Ttotal += 5 - Math.ceil(item?.index / 4);
      }
    });
    second?.map((item: any) => {
      if (item?.index < 17) {
        Ltotal += 5 - Math.ceil(item?.index / 4);
      }
    });
    third?.map((item: any) => {
      if (item?.index < 17) {
        Btotal += 5 - Math.ceil(item?.index / 4);
      }
    });
    fourth?.map((item: any) => {
      if (item?.index < 17) {
        Rtotal += 5 - Math.ceil(item?.index / 4);
      }
    });
    result({
      a: Ttotal + Btotal,
      b: Ltotal + Rtotal,
    });
    setFirstScore(Ttotal);
    setSecondScore(Ltotal);
    setThirdScore(Btotal);
    setFourthScore(Rtotal);
    await setFirstC([...first].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setSecondC([...second].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setThirdC([...third].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setFourthC([...fourth].sort((a, b) => (a.index > b.index ? 1 : -1)));
    setTimeout(() => {
      setComplex(false);
      diving();
    }, 3000);
  };

  return (
    <>
      <div className={classes.table}>
        <div className={classes.btnRoot}>
          <RoundButton type="redo" action={refresh} />
          <RoundButton action={startCard} className={classes.playBtn} />
        </div>
        {endStatus && (
          <>
            {firstScore + thirdScore > secondScore + fourthScore ? (
              <img src={winner} className={classes.winnerA} alt="winner" />
            ) : (
              <img src={winner} className={classes.winnerB} alt="winner" />
            )}
          </>
        )}
        <div className={classes.avatar1Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
          North
        </div>
        <div className={classes.avatar2Root}>
          <img src={avatar2} className={classes.avatar} alt="avatar1" />
          East
        </div>
        <div className={classes.avatar3Root}>
          <img src={avatar3} className={classes.avatar} alt="avatar1" />
          South
        </div>
        <div className={classes.avatar4Root}>
          <img src={avatar4} className={classes.avatar} alt="avatar1" />
          West
        </div>
        {endStatus && (
          <>
            <div className={classes.score1}>{firstScore}</div>
            <div className={classes.score2}>{secondScore}</div>
            <div className={classes.score3}>{thirdScore}</div>
            <div className={classes.score4}>{fourthScore}</div>
          </>
        )}
        <>
          {complex && !status && !endStatus ? (
            <>
              <div className={classes.centerRoot}>
                <img
                  src={Card_back}
                  className={clsx(
                    classes.animationComplexLeft,
                    classes.cardBack
                  )}
                  alt="back"
                />
              </div>
              <div className={classes.centerRoot}>
                <img
                  src={Card_back}
                  className={clsx(
                    classes.animationComplexRight,
                    classes.cardBack
                  )}
                  alt="back"
                />
              </div>
            </>
          ) : (
            <></>
          )}
          {endStatus ? (
            <></>
          ) : (
            <div className={classes.centerRoot}>
              <img src={Card_back} className={classes.cardBack} alt="back" />
            </div>
          )}
          {status && !endStatus && (
            <div className={classes.centerRoot}>
              <img
                src={Card_back}
                className={clsx(classes.cardBack, {
                  [classes.animationDivTop]: animationDiv === 0,
                  [classes.animationDivLeft]: animationDiv === 1,
                  [classes.animationDivDown]: animationDiv === 2,
                  [classes.animationDivRight]: animationDiv === 3,
                })}
                alt="back"
              />
            </div>
          )}
          {status && !endStatus ? (
            <>
              <div className={classes.putRoot1}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot2}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot3}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
              <div className={classes.putRoot4}>
                <img
                  src={Card_back}
                  className={classes.cardBack}
                  alt="card"
                ></img>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
        {endStatus ? (
          <>
            <div className={classes.field1}>
              {firstC?.map((item: any, key: any) => {
                return (
                  <img
                    key={key}
                    src={item?.card}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field2}>
              {secondC?.map((item: any, key: any) => {
                return (
                  <img
                    key={key}
                    src={item?.card}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field3}>
              {thirdC?.map((item: any, key: any) => {
                return (
                  <img
                    key={key}
                    src={item?.card}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
            <div className={classes.field4}>
              {fourthC?.map((item: any, key: any) => {
                return (
                  <img
                    key={key}
                    src={item?.card}
                    className={classes.card}
                    alt="card"
                  ></img>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
