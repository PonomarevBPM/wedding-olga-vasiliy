import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { Theme } from '../styles/theme';
import { getGuestName } from '../utils/getGuestName';

const useStyles = createUseStyles((theme: Theme) => ({
  statementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 450,
    marginTop: 60,
  },
  statementNames: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  statementText: {
    fontFamily: theme.font.commons,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  timerHeading: {
    fontFamily: theme.font.rammillasBold,
    fontSize: 20,
    position: 'relative',
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

  return (
    <div className={classes.statementContainer}>
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
