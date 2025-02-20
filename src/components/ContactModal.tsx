import Modal from 'react-modal';
import { theme } from '../styles/theme';
import { createUseStyles } from 'react-jss';
import cross from '/imgs/crosshair.svg?url';
import phoneMini from '/imgs/phoneMini.svg?url';
import telegramMini from '/imgs/telegramMini.svg?url';
import whatsappMini from '/imgs/whatsappMini.svg?url';

const customStyles: Modal.Styles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '45px 25px 40px',
        border: 'none',
        borderRadius: 15,
        backgroundColor: theme.color.darkRed,
        color: 'white',
        height: '20vh',
        minHeight: 200,
        maxHeight: 400,
        width: '78%',
        maxWidth: 500,
        position: 'relative',
        overflow: 'visible',
        fontFamily: theme.font.kudryashevHeadline,
        fontSize: 15,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '0px 4px 4px 0px rgba(129, 3, 3, 0.25)',
        filter: 'none'
    },
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(2px)'
    }
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    phoneNumber: string;
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

    button: {
        all: 'unset',
        boxSizing: 'border-box',
        color: theme.color.black,
        backgroundColor: theme.color.white,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px 39px',
        marginBottom: 25,
        minWidth: 175
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    miniIcon: {
        width: 16,
        marginRight: '0.3rem'
    }
}));

export const ContactModal = ({ isOpen, onClose, phoneNumber }: Props) => {
    const classes = useStyles();

    return (
        <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
            <div className={classes.wrapper}>
                <button
                    className={classes.button}
                    onClick={() => {
                        window.open(`tel:${phoneNumber}`)?.focus();
                    }}
                >
                    <img className={classes.miniIcon} src={phoneMini} />
                    Позвонить
                </button>
                <button
                    className={classes.button}
                    onClick={() => {
                        window
                            .open(`https://t.me/${phoneNumber}`, '_blank')
                            ?.focus();
                    }}
                >
                    <img
                        className={classes.miniIcon}
                        style={{ width: 18 }}
                        src={telegramMini}
                    />
                    Telegram
                </button>
                <button
                    className={classes.button}
                    onClick={() => {
                        window
                            .open(`https://wa.me/${phoneNumber}`, '_blank')
                            ?.focus();
                    }}
                >
                    <img className={classes.miniIcon} src={whatsappMini} />
                    WhatsApp
                </button>
            </div>
            <button className={classes.closeButton} onClick={onClose}>
                <img src={cross} />
            </button>
        </Modal>
    );
};
