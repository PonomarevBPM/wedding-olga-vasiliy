import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  detailsHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  detailsText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export function Details() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.detailsContainer}>
        <span className={classes.detailsHeading}>детали</span>
        <span className={classes.detailsText}>
          Мы будем рады любому подарку,
          <br />
          но предпочтение отдадим конверту
        </span>
        <img src="\imgs\IMG_5431.JPG" style={{ width: 100 }} />
      </div>
    </AnimatedBaseLayout>
  );
}
