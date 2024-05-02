import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.color.black,
    height: '100svh',
    color: theme.color.white,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  letterA: {
    marginTop: '-8vh',
    fontFamily: theme.font.brownSugar,
    lineHeight: '35vh',
    fontSize: '35vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '&::after': {
      content: '""',
      borderLeft: '1px solid white',
      height: '10vh',
    },
  },
  letterV: {
    fontFamily: theme.font.brownSugar,
    marginBottom: '-9vh',
    lineHeight: '35vh',
    fontSize: '35vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '&::before': {
      content: '""',
      borderLeft: '1px solid white',
      height: '10vh',
    },
  },
  invite: {
    fontFamily: theme.font.rammillas,
    fontSize: 20,
  },
  date: {
    fontFamily: theme.font.brownSugar,
    fontSize: 30,
  },
  names: {
    fontFamily: theme.font.brownSugar,
    fontSize: 20,
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.letterA}>A</div>
      <div className={classes.headerContent}>
        <span className={classes.invite}>ПРИГЛАШЕНИЕ НА СВАДЬБУ</span>
        <span className={classes.date}>04.08.2024</span>
        <span className={classes.names}>valeriya & Andrey</span>
      </div>
      <div className={classes.letterV}>V</div>
    </header>
  );
}
