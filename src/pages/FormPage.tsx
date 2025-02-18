import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import telegramLogo from '/imgs/telegramLogo.svg?url';
import { useState } from 'react';
import { FormModal } from '../components/FormModal';

const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        boxSizing: 'border-box',
        height: '100dvh',
        scrollSnapAlign: 'center',
        backgroundImage: `url(${import.meta.env.BASE_URL}imgs/bc.jpg)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: theme.font.kudryashevHeadline,
        fontWeight: 400,
        fontSize: 15,
        textAlign: 'center'
    },
    mainText: {},
    date: {
        fontFamily: theme.font.kudryashevDisplay
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24
    },
    buttonsCOntainer: {
        display: 'flex',
        gap: 56
    },
    button: {
        all: 'unset',
        color: theme.color.white,
        backgroundColor: theme.color.red,
        minWidth: 115,
        minHeight: 53,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contacts: {
        fontSize: 11
    },
    logocontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24
    },
    logo: {
        width: 60,
        height: 60
    },
    // dresscode: { marginTop: '10vh' },
    [`@media only screen and (max-height: 575.98px) and (orientation: landscape)`]:
        {
            button: {
                minHeight: 30
            },
            logocontainer: {
                gap: 12
            },
            formContainer: {
                gap: 12
            },
            contacts: {
                marginBottom: '2vh'
            },
            dresscode: {
                marginTop: '2vh'
            }
        }
}));

export const FormPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [willCome, setWillCome] = useState<'Да' | 'Нет' | null>(null);

    const classes = useStyles();

    const handleYesClick = () => {
        setIsModalOpen(true);
        setWillCome('Да');
    };

    const handleNoClick = () => {
        setIsModalOpen(true);
        setWillCome('Нет');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <FormModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                visit={willCome}
            />
            <div className={classes.container}>
                <span>
                    ДРЕСС КОД
                    <br />
                    TOTAL BLACK
                </span>
                <div className={classes.formContainer}>
                    <span>
                        ПОДТВЕРДИТЕ, ПОЖАЛУЙСТА,
                        <br />
                        ВАШЕ ПРИСУТСТВИЕ ДО
                        <br />
                        <span className={classes.date}>25 МАЯ 2025</span>
                    </span>
                    <div className={classes.buttonsCOntainer}>
                        <button
                            className={classes.button}
                            onClick={handleYesClick}
                        >
                            ПРИДУ
                        </button>
                        <button
                            className={classes.button}
                            onClick={handleNoClick}
                        >
                            НЕ ПРИДУ
                        </button>
                    </div>
                </div>
                <span>18+</span>
                <div className={classes.logocontainer}>
                    <span>ЧАТ ГОСТЕЙ</span>
                    <img
                        className={classes.logo}
                        src={telegramLogo}
                        onClick={() => {
                            window
                                .open(
                                    'https://t.me/+RtxrQBY8VQZjZjUy',
                                    '_blank'
                                )
                                ?.focus();
                        }}
                    />
                </div>
                <span className={classes.contacts}>
                    ПО ВСЕМ ВОПРОСАМ ВЫ МОЖЕТЕ
                    <br />
                    ОБРАЩАТЬСЯ К НАШИМ ОРГАНИЗАТОРАМ
                    <br />
                    ВАЛЕРИЯ 8 (909) 660-79-72
                    <br />
                    ДАРИНА 8 (966) 045-44-49
                </span>
                {/* <span>18+</span> */}
            </div>
        </>
    );
};
