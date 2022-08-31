import { useStyles } from "./TableStyle";
import avatar1 from "../../../../assets/image/avatar1.png";
import { CARD, Card_back, Card_div_time } from "config/constant";
import { useEffect, useState } from "react";
import clsx from "clsx";
import RoundButton from "components/RoundButton";

export const Table = () => {
  const classes = useStyles();
  const [firstC, setFirstC] = useState<any>();
  const [secondC, setSecondC] = useState<any>();
  const [thirdC, setThirdC] = useState<any>();
  const [fourthC, setFourthC] = useState<any>();
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

    await setFirstC([...first].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setSecondC([...second].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setThirdC([...third].sort((a, b) => (a.index > b.index ? 1 : -1)));
    await setFourthC([...fourth].sort((a, b) => (a.index > b.index ? 1 : -1)));
    setTimeout(() => {
      setComplex(false);
      diving();
    }, 3000);
  };
  console.log(complex);

  return (
    <>
      <div className={classes.table}>
        <div className={classes.btnRoot}>
          <RoundButton type="redo" action={startCard} />
          <RoundButton action={startCard} className={classes.playBtn} />
        </div>
        <div className={classes.avatar1Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
        </div>
        <div className={classes.avatar2Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
        </div>
        <div className={classes.avatar3Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
        </div>
        <div className={classes.avatar4Root}>
          <img src={avatar1} className={classes.avatar} alt="avatar1" />
        </div>
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
