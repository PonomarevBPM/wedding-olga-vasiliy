import { createUseStyles } from 'react-jss';
import { useForm, Form, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';
import { CheckBoxGroup } from '../components/CheckboxGroup';

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
  alcohol: yup.string().trim().required(),
});

export function FinalForm() {
  const classes = useStyles();

  const [success, setSuccess] = useState(false);

  const { ...methods } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationShema),
  });

  return (
    <AnimatedBaseLayout>
      <div className={classes.formWrapper}>
        <span className={classes.formHeading}>анкета гостя</span>
        <span className={classes.formSmallHeading}>
          пожалуйста, заполните данную
          <br />
          форму до 25.07.2024
        </span>
        <Form
          onSubmit={async ({ formData }) => {
            await fetch('https://sheetdb.io/api/v1/3x4iazcg30cum', {
              method: 'POST',
              body: formData,
            }).then(() => {
              localStorage.setItem('Submited', 'true');
              setSuccess(true);
            });
          }}
          control={methods.control}
          className={classes.formContainer}
          validateStatus={(status) => status === 201}
        >
          <input
            {...methods.register('name')}
            className={classes.terxtInput}
            placeholder="ВАШЕ ИМЯ И ФАМИЛИЯ..."
          />

          <label className={classes.radioInputLabel}>
            Подтвердите свое присутствие:
          </label>
          <div className={classes.readioOption}>
            <div
              className={classes.radioInput}
              onClick={() => methods.setValue(
                'presence',
                'я приду / мы придем',
              )}
            >
              <input
                {...methods.register('presence')}
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
              onClick={() => methods.setValue(
                'presence',
                'скажем / скажу позже',
              )}
            >
              <input
                {...methods.register('presence')}
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
              onClick={() => methods.setValue(
                'presence',
                'к сожалению, меня не будет',
              )}
            >
              <input
                {...methods.register('presence')}
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
            Предпочтения по напиткам
          </label>
          <FormProvider {...methods}>
            <CheckBoxGroup
              options={[
                'Игристое',
                'Вино',
                'Пиво',
                'Водка',
                'Виски',
                'Джин',
                'Ром',
                'Что-то безалкогольное',
              ]}
              {...methods.register('alcohol')}
              name="alcohol"
            />
          </FormProvider>

          {success || localStorage.getItem('Submited') === 'true' ? (
            <span className={classes.successMessage}>
              Анкета отправлена успешно!
            </span>
          ) : (
            <button className={classes.submitButton}>
              Отправить
            </button>
          )}
          {(methods.formState.errors.name
                        || methods.formState.errors.alcohol
                        || methods.formState.errors.presence) && (
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
