import { createUseStyles } from 'react-jss';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  programmContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 450,
    justifyContent: 'space-around',
    marginTop: 30,
    opacity: 0,
    transition: 'all 1s',
  },
  op: {
    opacity: 1,
  },
  programmHeading: {
    fontFamily: theme.font.rammillas,
    textTransform: 'uppercase',
    fontSize: 36,
  },
  programmTime: {
    fontFamily: theme.font.brownSugar,
    fontSize: 35,
  },
  programmText: {
    fontFamily: theme.font.rammillas,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  programmBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  programmDate: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: theme.font.brownSugar,
    '&::before': {
      display: 'block',
      content: '""',
      borderTop: 'solid 1px black',
      width: 40,
      marginRight: 15,
    },
    '&::after': {
      display: 'block',
      content: '""',
      borderTop: 'solid 1px black',
      width: 40,
      marginLeft: 15,
    },
  },
}));

export function Programm() {
  const classes = useStyles();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  return (
    <div
      className={clsx(
        classes.programmContainer,
        inView ? classes.op : '',
      )}
      ref={ref}
    >
      <span className={classes.programmHeading}>Программа Дня</span>
      <div className={classes.programmBlock}>
        <span className={classes.programmTime}>16:40</span>
        <span className={classes.programmText}>
          РОСПИСЬ В ОСОБНЯКЕ “РОЯЛ”
          <br />
          {' '}
          Малая Ордынка ул., 14
        </span>
      </div>
      <div className={classes.programmBlock}>
        <span className={classes.programmTime}>17:40</span>
        <span className={classes.programmText}>
          УЖИН В РЕСТОРАНЕ “КАРЛСОН”
          <br />
          {' '}
          Овчинниковская наб., 20/1
        </span>
      </div>

      <span className={classes.programmDate}>04.08.24</span>
    </div>
  );
}
