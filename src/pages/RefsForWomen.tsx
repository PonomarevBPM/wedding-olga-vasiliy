import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const horizontal = 750;

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
  refsGridContainer: {
    display: 'grid',
    gridTemplateRows: '15vh 15vh 17vh 4vh 18vh 15vh 15vh',
    gridTemplateColumns: '5fr 4fr 4fr 5fr',
    padding: [0, 12],
    position: 'relative',
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
    gridArea: '1/1/3/5',
    marginBottom: 15,
  },
  item2: {
    gridArea: '3/1/4/2',
    paddingBottom: 4,
  },
  item3: {
    gridArea: '3/2/4/3',
    padding: [0, 4],
  },
  item4: {
    gridArea: '4/1/6/3',
  },
  item5: {
    gridArea: '3/3/5/5',
  },
  item6: {
    gridArea: '5/3/6/4',
    padding: [0, 4],
  },
  item7: {
    gridArea: '5/4/6/5',
    paddingTop: 4,
  },
  item8: {
    gridArea: '6/1/8/5',
    marginTop: 15,
  },
  refsContainerHeading: {
    position: 'absolute',
    fontFamily: theme.font.rammillas,
    fontSize: '4vh',
    whiteSpace: 'nowrap',
    top: '50%',
    left: '50%',
    transform: 'translate(-34%, -62%)',
  },
  [`@media (min-width: ${horizontal}px)`]: {
    refsGridContainer: {
      display: 'grid',
      gridTemplateRows: '5fr 1fr 5fr',
      gridTemplateColumns: '4fr 4fr 3fr 3fr 4fr 4fr',
      padding: 12,
      position: 'relative',
      maxWidth: 800,
    },
    item1: {
      gridArea: '1/1/4/2',
      marginRight: 15,
    },
    item2: {
      gridArea: '1/2/2/3',
      paddingBottom: 4,
    },
    item3: {
      gridArea: '1/3/2/4',
      padding: [0, 4],
    },
    item4: {
      gridArea: '2/2/4/4',
    },
    item5: {
      gridArea: '1/4/3/6',
    },
    item6: {
      gridArea: '3/4/4/5',
      padding: [0, 4],
    },
    item7: {
      gridArea: '3/5/4/6',
      paddingTop: 6,
    },
    item8: {
      gridArea: '1/6/4/7',
      marginLeft: 15,
    },
  },
}));

export function RefsForWomen() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.refsContainer}>
        <span className={classes.dressCodeHeading}>References</span>
        <span className={classes.dressCodeSmallHeading}>for women</span>
        <div className={classes.refsGridContainer}>
          <div className={classes.item1}>
            <img
              src="\imgs\wearRefs\IMG_4963.JPG"
              className={classes.imgAsIs}
            />
          </div>
          <div className={classes.item2}>
            <img
              src="\imgs\wearRefs\IMG_4945.JPG"
              className={classes.imgcover}
            />
          </div>
          <div className={classes.item3}>
            <img
              src="\imgs\wearRefs\IMG_4971.JPG"
              className={classes.imgAsIs}
            />
          </div>
          <div className={classes.item4}>
            <img
              src="\imgs\wearRefs\IMG_4962.JPG"
              className={classes.imgcover}
            />
          </div>
          <div className={classes.item5}>
            <img
              src="\imgs\wearRefs\IMG_4950.JPG"
              className={classes.imgcover}
            />
          </div>
          <div className={classes.item6}>
            <img
              src="\imgs\wearRefs\IMG_4949.JPG"
              className={classes.imgAsIs}
            />
          </div>
          <div className={classes.item7}>
            <img
              src="\imgs\wearRefs\IMG_4948.JPG"
              className={classes.imgcover}
            />
          </div>
          <div className={classes.item8}>
            <img
              src="\imgs\wearRefs\IMG_4967.JPG"
              className={classes.imgAsIs}
            />
          </div>
        </div>
      </div>
    </AnimatedBaseLayout>
  );
}
