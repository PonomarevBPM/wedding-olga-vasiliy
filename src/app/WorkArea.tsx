import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
    children: ReactNode;
}

const useStyles = createUseStyles(() => ({
  workArea: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '100dvh',
    width: '100vw',
    scrollSnapType: 'y mandatory',
    userSelect: 'none',
  },
}));

export function WorkArea({ children }: Props) {
  const classes = useStyles();

  return <main className={classes.workArea}>{children}</main>;
}
