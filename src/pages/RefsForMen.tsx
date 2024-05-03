import { createUseStyles } from 'react-jss';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  dressCodeSmallHeading: {
    display: 'block',
    fontFamily: theme.font.rammillas,
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
  refsContainerMen: {
    opacity: 0,
    transition: 'all 1s',
  },
  op: {
    opacity: 1,
  },
  refsGridForMenContainer: {
    display: 'grid',
    gridTemplateRows: '3fr 2fr 1fr 4fr',
    gridTemplateColumns: '30fr 10fr 15fr 30fr',
    padding: [12, 12],
    margin: 'auto',
    marginBottom: 15,
    aspectRatio: 9 / 10,
  },
  grayscale: {
    filter: 'grayscale(100%)',
  },
  imgAsIs: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
  },
  imgcover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  item1: {
    gridArea: '1/1/3/2',
    padding: [24, 0, 0, 6],
  },
  item2: {
    gridArea: '1/2/2/4',
    padding: [16, 12, 8, 12],
  },
  item3: {
    gridArea: '2/2/4/4',
    marginBottom: 24,
    marginLeft: 34,
  },
  item4: {
    gridArea: '1/4/4/5',
  },
  item5: {
    gridArea: '3/1/5/3',
  },
  item6: {
    gridArea: '4/3/5/5',
    padding: [0, 14, 24, 14],
  },

  '@media (min-width: 750px)': {
    refsGridForMenContainer: {
      width: '60vw',
      aspectRatio: 1 / 1,
      maxWidth: 800,
    },
  },
}));

export function RefsForMen() {
  const classes = useStyles();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div
      className={clsx(classes.refsContainerMen, inView ? classes.op : '')}
      ref={ref}
    >
      <span className={classes.dressCodeSmallHeading}>for men</span>
      <div className={classes.refsGridForMenContainer}>
        <div className={classes.item1}>
          <img
            src="\imgs\wearRefsMen\IMG_4964.JPG"
            className={clsx(classes.imgAsIs, classes.grayscale)}
          />
        </div>
        <div className={classes.item2}>
          <img
            src="\imgs\wearRefsMen\IMG_4969.JPG"
            className={classes.imgAsIs}
          />
        </div>
        <div className={classes.item3}>
          <img
            src="\imgs\wearRefsMen\IMG_4973.JPG"
            className={classes.imgAsIs}
          />
        </div>
        <div className={classes.item4}>
          <img
            src="\imgs\wearRefsMen\IMG_4972.JPG"
            className={classes.imgAsIs}
          />
        </div>
        <div className={classes.item5}>
          <img
            src="\imgs\wearRefsMen\IMG_4977.JPG"
            className={classes.imgAsIs}
          />
        </div>
        <div className={classes.item6}>
          <img
            src="\imgs\wearRefsMen\IMG_4966.JPG"
            className={clsx(classes.imgAsIs, classes.grayscale)}
          />
        </div>
      </div>
    </div>
  );
}
