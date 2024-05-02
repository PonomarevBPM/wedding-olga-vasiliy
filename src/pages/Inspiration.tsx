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
}));

export function Inspiration() {
  const classes = useStyles();

  return (
    <div className={classes.inspirationContainer}>
      <span className={classes.inspirationText}>INSPIRATION</span>
      <video
        src="\src\assets\video\IMG_2083.MOV"
        id="vid"
        className={classes.inspirationVideo}
        autoPlay
        controls
        preload="auto"
      />
    </div>
  );
}
