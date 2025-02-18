import { createUseStyles } from 'react-jss';
import hearth from '/imgs/hearth.svg?url';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        height: '100svh',
        position: 'relative',
        scrollSnapAlign: 'center',
        backgroundImage: `url(${import.meta.env.BASE_URL}imgs/bc.jpg)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10vh'
    },
    weddingBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40vh',
        gap: 10
    },
    weddingTitle: {
        fontFamily: theme.font.castoroTitling,
        fontWeight: 400,
        fontSize: 48
    },
    date: {
        fontFamily: theme.font.baskervilleRegular,
        fontSize: 20
    },
    location: {
        fontFamily: theme.font.allegrettoScriptTwo,
        fontWeight: 500,
        fontSize: 25,
        textAlign: 'center'
    },
    names: {
        fontFamily: theme.font.kudryashevHeadline,
        fontWeight: 500,
        fontSize: 15,
        textAlign: 'center'
    },
    detail: {
        position: 'absolute',
        top: 0,
        left: '0%'
    },
    [`@media (min-width: 1200px)`]: {
        detail: {
            position: 'absolute',
            top: 0,
            left: '40%'
        }
    },
    [`@media only screen and (max-height: 575.98px) and (orientation: landscape)`]:
        {
            weddingBlock: {
                marginTop: '10vh'
            }
        }
}));

export const MainPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img
                className={classes.detail}
                src={`${import.meta.env.BASE_URL}imgs/detail.png`}
            />
            <div className={classes.weddingBlock}>
                <span className={classes.weddingTitle}> WEDDING</span>
                <img src={hearth} style={{ height: 30 }} />
                <span className={classes.date}>12.06.2025</span>
            </div>
            <span className={classes.location}>
                Loc:
                <br />
                The Birch, Mahagany
                <br />
                15:00
            </span>
            <span className={classes.names}>ВАСИЛИЙ & ОЛЬГА</span>
        </div>
    );
};
