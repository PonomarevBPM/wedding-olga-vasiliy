import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useFormContext } from 'react-hook-form';
import { Theme } from '../styles/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  checkbox: {
    display: 'flex',
    userSelect: 'none',
    fontFamily: theme.font.commons,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 30,
    width: '100%',
  },
  checkboxClass: {
    margin: [0, 15, 0, 55],
    appearance: 'none',
    backgroundColor: '#fff',
    font: 'inherit',
    color: 'currentColor',
    width: '18px',
    height: '18px',
    border: '1px solid currentColor',
    transform: 'translateY(-0.075em)',
    display: 'grid',
    placeContent: 'center',
    '&:before': {
      content: '""',
      width: '8px',
      height: '8px',
      transform: 'scale(0)',
      transition: '120ms transform ease-in-out',
      backgroundColor: 'black',
    },
    '&:checked::before': {
      transform: 'scale(1)',
    },
  },
}));

type Props = {
    options: string[];
    name: string;
};

export function CheckBoxGroup({ options, name }: Props) {
  const classes = useStyles();
  const { setValue } = useFormContext();

  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false),
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    let value = '';
    checkedState.forEach((checkbox, index) => {
      if (checkbox) {
        value += ` ${options[index]}`;
      }
    });
    setValue(name, value);
  }, [checkedState]);

  return (
    <div className={classes.wrapper}>
      {options.map((option, index) => (
        <div
          key={index}
          className={classes.checkbox}
          onClick={() => handleOnChange(index)}
        >
          <input
            className={classes.checkboxClass}
            type="checkbox"
            name={option}
            value={option}
            checked={checkedState[index]}
          />
          <label htmlFor={`custom-checkbox-${index}`}>
            {options[index]}
          </label>
        </div>
      ))}
    </div>
  );
}
