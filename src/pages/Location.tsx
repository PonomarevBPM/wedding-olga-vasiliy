import { createUseStyles } from 'react-jss';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';
import { Theme } from '../styles/theme';
import { LocationText } from './constants';

const useStyles = createUseStyles((theme: Theme) => ({
    locationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    locationHeading: {
        fontFamily: theme.font.rammillas,
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 30,
        marginTop: 15
    },
    locationText: {
        fontFamily: theme.font.rammillas,
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 30
    },
    img: {
        width: '185px'
    },
    imgContainer: {
        display: 'flex',
        gap: 8
    }
}));

export function Location() {
    const classes = useStyles();

    return (
        <AnimatedBaseLayout>
            <div className={classes.locationContainer}>
                <span className={classes.locationHeading}>
                    Место проведения
                </span>
                <span className={classes.locationText}>
                    <LocationText />
                </span>
                <div className={classes.imgContainer}>
                    <img
                        className={classes.img}
                        src={`${import.meta.env.BASE_URL}imgs/location/Loft_1.jpg`}
                    />
                    <img
                        className={classes.img}
                        src={`${import.meta.env.BASE_URL}imgs/location/Loft_2.JPG`}
                    />
                </div>
            </div>
        </AnimatedBaseLayout>
    );
}
