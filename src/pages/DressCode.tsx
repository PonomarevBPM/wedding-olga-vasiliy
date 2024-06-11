import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { ColorRef } from '../components/ColodrRef';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const horizontal = 750;

const useStyles = createUseStyles((theme: Theme) => ({
  dressCodeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  dressCodeHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
    marginTop: 15,
  },
  dressCodeText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  colorsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  whiteColor: {
    marginLeft: 60,
  },
  blackColor: {
    marginRight: 60,
  },
  [`@media (min-width: ${horizontal}px)`]: {
    colorsContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    whiteColor: {
      marginTop: 45,
      marginLeft: 0,
    },
    blackColor: {
      margin: 0,
    },
  },
}));

export function DressCode() {
  const classes = useStyles();

  return (
    <AnimatedBaseLayout>
      <div className={classes.dressCodeContainer}>
        <span className={classes.dressCodeHeading}>Dress code</span>
        <span className={classes.dressCodeText}>
          мы очень старались сделать наш праздник
          <br />
          красивым, поэтому для нас важно видеть
          <br />
          гостей в цветовой ПАЛИТРЕ нашего
          <br />
          мероприятия
        </span>
        <div className={classes.colorsContainer}>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/red.JPG`}
            className={classes.blackColor}
          >
            винный
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/orange.JPG`}
            className={classes.whiteColor}
          >
            насыщенный ораньжевый
          </ColorRef>
          <ColorRef
            imgSrc={`${import.meta.env.BASE_URL}imgs/colorRef/coffee.JPG`}
            className={classes.blackColor}
          >
            кофе с молоком
          </ColorRef>
        </div>
      </div>
    </AnimatedBaseLayout>
  );
}
