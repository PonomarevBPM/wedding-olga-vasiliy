import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
    children: ReactNode;
}

const useStyles = createUseStyles(() => ({
  workArea: {
    padding: [0, 100],
    overflowX: 'hidden',
  },
}));

export function WorkArea({ children }: Props) {
  const classes = useStyles();

  return <main className={classes.workArea}>{children}</main>;
}
