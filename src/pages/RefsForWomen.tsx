import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  refsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: [45, 0],
  },
  dressCodeHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 35,
  },
  dressCodeSmallHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  img: {
    width: 340,
  },
}));

export function RefsForWomen() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.refsContainer}>
        <span className={classes.dressCodeHeading}>References</span>
        <span className={classes.dressCodeSmallHeading}>for women</span>
        <img
          className={classes.img}
          src={`${import.meta.env.BASE_URL}imgs/wearRefs/womanRefs.JPG`}
        />
      </div>
    </AnimatedBaseLayout>
  );
}
