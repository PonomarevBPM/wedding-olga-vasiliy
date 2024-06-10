import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.headerBG,
    height: '100svh',
    color: theme.color.headerMain,
    position: 'relative',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    '&::after': {
      content: '""',
      borderLeft: `1px solid ${theme.color.headerMain}`,
      height: '10svh',
    },
    '&::before': {
      content: '""',
      borderLeft: `1px solid ${theme.color.headerMain}`,
      height: '10svh',
    },
  },
  letterA: {
    // marginTop: '-8svh',
    fontFamily: theme.font.brownSugar,
    lineHeight: '35svh',
    fontSize: '35svh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
  },
  letterV: {
    fontFamily: theme.font.brownSugar,
    // marginBottom: '-9svh',
    lineHeight: '35svh',
    fontSize: '35svh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    bottom: '-5%',
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
      <div className={classes.letterA}>D</div>
      <div className={classes.headerContent}>
        <span className={classes.invite}>ПРИГЛАШЕНИЕ НА СВАДЬБУ</span>
        <span className={classes.date}>31.08.2024</span>
        <span className={classes.names}>Vera & Dmitry</span>
      </div>
      <div className={classes.letterV}>V</div>
    </header>
  );
}
