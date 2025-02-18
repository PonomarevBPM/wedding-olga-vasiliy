import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

interface Props {
    children: ReactNode;
}

const useStyles = createUseStyles(() => ({
    workArea: {
        overflowY: 'scroll',
        height: '100svh',
        scrollSnapType: 'y mandatory',
        userSelect: 'none'
    }
}));

export function WorkArea({ children }: Props) {
    const classes = useStyles();

    return <main className={classes.workArea}>{children}</main>;
}
