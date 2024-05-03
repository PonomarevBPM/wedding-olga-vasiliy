import { createUseStyles } from 'react-jss';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
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
    opacity: 0,
    transition: 'all 1s',
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
  op: {
    opacity: 1,
  },
}));

export function Inspiration() {
  const classes = useStyles();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  return (
    <div
      className={clsx(
        classes.inspirationContainer,
        inView ? classes.op : '',
      )}
      ref={ref}
    >
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
