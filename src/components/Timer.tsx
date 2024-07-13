import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { deadline } from '../pages/constants';

const useStyle = createUseStyles(() => ({
  number: {
    fontFamily: 'BrownSugar',
    fontSize: 26,
  },
  timerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid black',
    padding: [0, 16],
    '&:last-child': {
      border: 'none',
    },
  },
  timer: {
    display: 'flex',
  },
  details: {
    fontFamily: 'TTRamillas',
    fontSize: 14,
  },
  warning: {
    fontFamily: 'BrownSugar',
    fontSize: 26,
    textTransform: 'uppercase',
  },
}));

export function Timer() {
  const classes = useStyle();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const zeroPad = (num: number) => String(num).padStart(2, '0');

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return seconds < 0 ? (
    <span className={classes.warning}>Мы вас уже ждем, поторопись!</span>
  ) : (
    <div className={classes.timer}>
      <div className={classes.timerItem}>
        <span className={classes.number}>{zeroPad(days)}</span>
        <span className={classes.details}>дней</span>
      </div>
      <div className={classes.timerItem}>
        <span className={classes.number}>{zeroPad(hours)}</span>
        <span className={classes.details}>часов</span>
      </div>
      <div className={classes.timerItem}>
        <span className={classes.number}>{zeroPad(minutes)}</span>
        <span className={classes.details}>минут</span>
      </div>
      <div className={classes.timerItem}>
        <span className={classes.number}>{zeroPad(seconds)}</span>
        <span className={classes.details}>секунд</span>
      </div>
    </div>
  );
}
