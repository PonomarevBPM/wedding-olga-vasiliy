import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  manRefWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  dressCodeSmallHeading: {
    display: 'block',
    fontFamily: theme.font.rammillas,
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    marginBottom: 15,
  },
  img: {
    width: 340,
  },
}));

export function RefsForMen() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.manRefWrapper}>
        <span className={classes.dressCodeSmallHeading}>for men</span>
        <img
          className={classes.img}
          src={`${import.meta.env.BASE_URL}imgs/wearRefs/manRef.JPG`}
        />
      </div>
    </AnimatedBaseLayout>
  );
}
