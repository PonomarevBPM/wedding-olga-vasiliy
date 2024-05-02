import { clsx } from 'clsx';
import { createUseStyles } from 'react-jss';
import { ReactNode } from 'react';
import { Theme } from '../styles/theme';

interface Props {
    imgSrc: string;
    children: ReactNode;
    className?: string;
}

const useStyles = createUseStyles((theme: Theme) => ({
  img: {
    height: 175,
    objectFit: 'cover',
  },
  container: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
  },
  colorName: {
    fontFamily: theme.font.commons,
    textTransform: 'uppercase',
    marginTop: 12,
  },
}));

export function ColorRef({ imgSrc, className, children }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)}>
      <img src={imgSrc} className={classes.img} />
      <span className={classes.colorName}>{children}</span>
    </div>
  );
}
