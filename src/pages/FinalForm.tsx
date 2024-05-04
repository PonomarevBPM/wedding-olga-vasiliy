import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useForm, Form } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'uppercase',
    marginTop: 45,
  },
  formHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  formSmallHeading: {
    fontFamily: theme.font.rammillasBold,
    textAlign: 'center',
    marginBottom: 30,
  },
  formBye: {
    ontFamily: theme.font.rammillas,
    fontSize: 28,
    textTransform: 'uppercase',
    margin: [30, 0],
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  terxtInput: {
    border: 'none',
    color: 'black !important',
    borderRadius: '0 !important',
    backgroundColor: 'rgb(243, 243, 243)',
    borderBottom: '1px solid black',
    marginBottom: 30,
    height: 24,
    fontSize: 16,
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  radioInput: {
    height: 23,
  },
  radioInputCircle: {
    aspectRatio: 1,
    width: 15,
    margin: [0, 15, 0, 55],
    appearance: 'none',
    borderRadius: '50%',
    border: '3px solid #FFF',
    boxShadow: '0 0 0 1px #000',
    '&:checked': {
      background: theme.color.black,
    },
  },
  radioInputLabel: {
    fontFamily: theme.font.commons,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  radioLabel: {
    display: 'inline-block',
    fontFamily: theme.font.commons,
    fontSize: 16,
    height: 18,
    lineHeight: '18px',
    textAlign: 'center',
    verticalAlign: 'bottom',
  },
  readioOption: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginBottom: 30,
    width: '100%',
  },
  successMessage: {
    fontFamily: theme.font.commons,
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: '16px',
    padding: [10, 4, 8, 4],
    verticalAlign: 'middle',
    width: 310,
    color: 'black !important',
    textAlign: 'center',
  },
  submitButton: {
    appearance: 'none',
    border: '1px solid black',
    background: 'none',
    fontFamily: theme.font.commons,
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: '16px',
    padding: [10, 4, 8, 4],
    verticalAlign: 'middle',
    width: 310,
    color: 'black !important',
    '&:active': {
      backgroundColor: 'black',
      color: 'white',
    },
    '&:hover': {
      backgroundColor: 'black',
      color: 'white !important',
    },
  },
  error: {
    color: 'red',
    fontFamily: theme.font.commons,
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: -29,
  },
}));

const validationShema = yup.object({
  name: yup.string().required(),
  presence: yup.string().required(),
  registry: yup.string().required(),
});

export function FinalForm() {
  const classes = useStyles();

  const [success, setSuccess] = useState(false);

  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(validationShema) });

  return (
    <AnimatedBaseLayout>
      <div className={classes.formWrapper}>
        <span className={classes.formHeading}>анкета гостя</span>
        <span className={classes.formSmallHeading}>
          пожалуйста, заполните данную
          <br />
          форму до 30.06.2024
        </span>
        <Form
          onSubmit={async ({ formData }) => {
            await fetch('https://sheetdb.io/api/v1/96vey8ogze09t', {
              method: 'POST',
              body: formData,
            });
          }}
          onSubmitCapture={() => {
            localStorage.setItem('Submited', 'true');
            setSuccess(true);
          }}
          control={control}
          className={classes.formContainer}
          validateStatus={(status) => status === 201}
        >
          <input
            {...register('name')}
            className={classes.terxtInput}
            placeholder="ВАШЕ ИМЯ И ФАМИЛИЯ..."
          />

          <label className={classes.radioInputLabel}>
            Подтвердите свое присутствие:
          </label>
          <div className={classes.readioOption}>
            <div
              className={classes.radioInput}
              onClick={() => setValue('presence', 'я приду / мы придем')}
            >
              <input
                {...register('presence')}
                type="radio"
                value="я приду / мы придем"
                className={classes.radioInputCircle}
              />
              <label className={classes.radioLabel}>
                я приду / мы придем
              </label>
            </div>

            <div
              className={classes.radioInput}
              onClick={() => setValue('presence', 'скажем / скажу позже')}
            >
              <input
                {...register('presence')}
                type="radio"
                value="скажем / скажу позже"
                className={classes.radioInputCircle}
              />
              <label className={classes.radioLabel}>
                скажем / скажу позже
              </label>
            </div>

            <div
              className={classes.radioInput}
              onClick={() => setValue(
                'presence',
                'к сожалению, меня не будет',
              )}
            >
              <input
                {...register('presence')}
                type="radio"
                value="к сожалению, меня не будет"
                className={classes.radioInputCircle}
              />
              <label className={classes.radioLabel}>
                к сожалению, меня не будет
              </label>
            </div>
          </div>

          <label className={classes.radioInputLabel}>
            Вы сможете приоединиться:
            {' '}
          </label>
          <div className={classes.readioOption}>
            <div
              className={classes.radioInput}
              onClick={() => setValue('registry', 'в загс и на ужине')}
            >
              <input
                {...register('registry')}
                type="radio"
                value="в загс и на ужине"
                className={classes.radioInputCircle}
              />
              <label className={classes.radioLabel}>
                в загс и на ужине
              </label>
            </div>
            <div
              className={classes.radioInput}
              onClick={() => setValue('registry', 'Только на ужин')}
            >
              <input
                {...register('registry')}
                type="radio"
                value="Только на ужин"
                className={classes.radioInputCircle}
              />
              <label className={classes.radioLabel}>
                Только на ужин
              </label>
            </div>
          </div>

          {success || localStorage.getItem('Submited') === 'true' ? (
            <span className={classes.successMessage}>
              Анкета отправлена успешно!
            </span>
          ) : (
            <button className={classes.submitButton}>
              Отправить
            </button>
          )}
          {(errors.name || errors.registry || errors.presence) && (
            <p className={classes.error}>
              Необходимо ответить на все вопросы!
            </p>
          )}
        </Form>
        <span className={classes.formBye}>до встречи! </span>
      </div>
    </AnimatedBaseLayout>
  );
}
