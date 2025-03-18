import { clsx } from 'clsx';
import { createUseStyles } from 'react-jss';
import { ReactNode } from 'react';
import { Theme } from '../styles/theme';

interface Props {
    imgSrc: string;
    children: ReactNode;
    className?: string;
    innerClasses?: {
        imgClass?: string;
        labelClass?: string;
    };
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
    fontFamily: theme.font.kudryashevHeadline,
    textTransform: 'uppercase',
    marginTop: 12,
  },
}));

export function ColorRef({
  imgSrc, className, children, innerClasses,
}: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className)}>
      <img
        src={imgSrc}
        className={clsx(classes.img, innerClasses?.imgClass)}
      />
      <span className={clsx(classes.colorName, innerClasses?.labelClass)}>
        {children}
      </span>
    </div>
  );
}
