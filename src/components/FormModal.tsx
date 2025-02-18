import Modal from 'react-modal';
import ClipLoader from 'react-spinners/ClipLoader';
import { theme } from '../styles/theme';
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import cross from '/imgs/crosshair.svg?url';

const customStyles: Modal.Styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '35px 25px 40px',
        border: 'none',
        borderRadius: 15,
        backgroundColor: theme.color.red,
        color: 'white',
        height: '35vh',
        minHeight: 270,
        maxHeight: 400,
        width: '78%',
        maxWidth: 500,
        position: 'relative',
        overflow: 'visible',
        fontFamily: theme.font.kudryashevHeadline,
        fontSize: 20,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 4px 0px rgba(129, 3, 3, 0.25)'
    },
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'none',
        backdropFilter: 'blur(2px)'
    }
};

const override: React.CSSProperties = {
    display: 'block',
    margin: 'auto auto'
};

const useStyles = createUseStyles(() => ({
    closeButton: {
        all: 'unset',
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: theme.color.white,
        border: `1px solid ${theme.color.red}`,
        position: 'absolute',
        top: '-4%',
        right: '-4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    helperText: {
        fontSize: 16,
        animation: 'horizontal-shaking 0.35s 1',
        position: 'absolute',
        width: '150%',
        top: '75%',
        left: '-25%'
    },
    input: {
        boxSizing: 'border-box',
        color: 'rgba(255, 255, 255, 0.58) !important',
        backgroundColor: 'rgba(243, 243, 243, 0)',
        border: '1px solid rgba(255, 255, 255, 0.58)',
        borderRadius: 25,
        padding: 15,
        fontSize: 20,
        width: '100%',
        maxWidth: 320,
        '&:focus': {
            outline: 0
        },
        '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.58) !important'
        }
    },
    button: {
        all: 'unset',
        color: theme.color.black,
        backgroundColor: theme.color.white,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 22px',
        marginBottom: 25
    },
    wrapper: {
        position: 'relative'
    }
}));

type Props = {
    isOpen: boolean;
    onClose: () => void;
    visit: 'Да' | 'Нет' | null;
};

const sendNoSheets = (name: string, visit: string) => {
    return fetch('https://sheetdb.io/api/v1/09rphfl0twr00', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Гости: name,
            Присутствие: visit
        })
    });
};

export const FormModal = ({ isOpen, onClose, visit }: Props) => {
    const classes = useStyles();
    const [names, setNames] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(
        Boolean(localStorage.getItem('Submited'))
    );
    const [isError, setError] = useState({
        error: false,
        message: ''
    });

    useEffect(() => {
        if (!isOpen) {
            setError({
                error: false,
                message: ''
            });
            setNames('');
        }
    }, [isOpen]);

    const handleSubmit = () => {
        if (!names) {
            setError({
                error: true,
                message: 'ВВЕДИТЕ ДАННЫЕ'
            });
            return;
        }
        setIsLoading(true);
        sendNoSheets(names, visit as string)
            .then((response) => {
                if (response.status !== 201) {
                    throw 'Ошибка';
                }
                setIsLoading(false);
                localStorage.setItem('Submited', 'true');
                setIsSuccess(true);
                setError({
                    error: false,
                    message: ''
                });
            })
            .catch(() => {
                setError({
                    error: true,
                    message: 'ПРОИЗОШЛА ОШИБКА, ПОВТОРИТЕ ОТПРАВКУ'
                });
                setIsLoading(false);
            });
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
            {isLoading ? (
                <ClipLoader
                    loading={isLoading}
                    color="white"
                    cssOverride={override}
                    size={75}
                />
            ) : (
                <>
                    <span>НАПИШИТЕ, ПОЖАЛУЙСТА, ВАШИ ДАННЫЕ В ПОЛЕ НИЖЕ</span>
                    <input
                        className={classes.input}
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                        placeholder="Имя и фамилия"
                    />
                    {isSuccess ? (
                        <span>ВЫ УСПЕШНО ОТПРАВИЛИ ДАННЫЕ!</span>
                    ) : (
                        <div className={classes.wrapper}>
                            <button
                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                ОТПРАВИТЬ
                            </button>
                            {isError.error && (
                                <span
                                    key={isError.message}
                                    className={classes.helperText}
                                >
                                    {isError.message}
                                </span>
                            )}
                        </div>
                    )}
                    <button className={classes.closeButton} onClick={onClose}>
                        <img src={cross} />
                    </button>
                </>
            )}
        </Modal>
    );
};
