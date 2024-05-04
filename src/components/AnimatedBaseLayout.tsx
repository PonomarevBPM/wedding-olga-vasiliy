import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { createUseStyles } from 'react-jss';

interface Props {
    children: React.ReactNode;
}

const useStyles = createUseStyles(() => ({
  hidden: {
    opacity: 0,
    transition: 'all 1s',
  },
  shown: {
    opacity: 1,
  },
}));

export function AnimatedBaseLayout({ children }: Props) {
  const classes = useStyles();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <div
      className={clsx(classes.hidden, inView ? classes.shown : '')}
      ref={ref}
    >
      {children}
    </div>
  );
}
