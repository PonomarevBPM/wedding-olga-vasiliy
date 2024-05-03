import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  inspirationContainer: {
    backgroundColor: theme.color.white,
    color: theme.color.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 60,
    marginBottom: 30,
  },
  inspirationText: {
    fontFamily: theme.font.brownSugar,
    fontSize: 45,
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
  },
  inspirationVideo: {
    height: 600,
  },
  '@media not all and (min-resolution:.001dpcm)': {
    inspirationText: {
      fontSize: 56,
    },
  },
  '@supports (-webkit-touch-callout: none)': {
    inspirationText: {
      fontSize: 56,
    },
  },
}));

export function Inspiration() {
  const classes = useStyles();

  return (
    <div className={classes.inspirationContainer}>
      <span className={classes.inspirationText}>INSPIRATION</span>
      <video
        src="\video\IMG_2083.MOV"
        id="vid"
        className={classes.inspirationVideo}
        autoPlay
        controls
        preload="auto"
      />
    </div>
  );
}
