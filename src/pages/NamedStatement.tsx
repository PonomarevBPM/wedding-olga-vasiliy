import { createUseStyles } from 'react-jss';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Timer } from '../components/Timer';
import { Theme } from '../styles/theme';
import { getGuestName } from '../utils/getGuestName';

const useStyles = createUseStyles((theme: Theme) => ({
  statementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
    opacity: 0,
    transition: 'all 1s',
  },
  op: {
    opacity: 1,
  },
  statementNames: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  statementText: {
    fontFamily: theme.font.commons,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  timerHeading: {
    fontFamily: theme.font.rammillasBold,
    fontSize: 20,
    position: 'relative',
    marginBottom: 60,
  },
  pin: {
    aspectRatio: 1,
    width: 110,
    position: 'absolute',
    top: '-65%',
    left: '75%',
    zIndex: -1,
    transform: 'rotate(-25deg)',
  },
}));

export function NamedStatement() {
  const classes = useStyles();

  const { guestsName } = useParams();
  const localizedGuestNames = getGuestName(guestsName);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div
      className={clsx(
        classes.statementContainer,
        inView ? classes.op : '',
      )}
      ref={ref}
    >
      <span className={classes.statementNames}>
        {localizedGuestNames}
      </span>
      <span className={classes.statementText}>
        В нашей жизни предстоит важный для нас
        <br />
        день. Мы хотим, чтоб в этот момент рядом с
        <br />
        нами были самые близкие и дорогие для нас
        <br />
        люди. Будем рады видеть вас в день нашей
        <br />
        росписи!
      </span>
      <span className={classes.timerHeading}>
        ДО СВАДЬБЫ ОСТАЛОСЬ
        <img
          src="\imgs\photo_2024-04-24_15-13-49.jpg"
          className={classes.pin}
        />
      </span>
      <Timer />
    </div>
  );
}
