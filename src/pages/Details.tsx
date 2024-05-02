import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  detailsHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  detailsText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export function Details() {
  const classes = useStyles();

  return (
    <div className={classes.detailsContainer}>
      <span className={classes.detailsHeading}>детали</span>
      <span className={classes.detailsText}>
        сразу после ужина мы улетаем в
        <br />
        путешествие, поэтому самым лучшим
        <br />
        подарком будет ”подарок в конвертике”
      </span>
      <img src="\imgs\IMG_5431.JPG" style={{ width: 100 }} />
      <span className={classes.detailsText}>
        приятным КОМПЛИМЕНТОМ для нас
        <br />
        вместо цветов будет вкусняшка или
        <br />
        игрушка для купера
      </span>
      <img
        src="\imgs\IMG_5426.JPG"
        style={{ aspectRatio: 1, width: 100, margin: 5 }}
      />
      <span className={classes.detailsText}>
        будем благодарны, если вы
        <br />
        воздержитесь от криков “ Горько”, ведь
        <br />
        поцелуй - это знак выражения чувств,
        <br />
        он не может быть по заказу!
      </span>
    </div>
  );
}
