import React from 'react';
import { observable } from 'mobx';
import { render, fireEvent } from '@testing-library/react';
import { component as StepAge } from '../StepAge';

const AGE = 25;

const handleNext = jest.fn();
const store = observable({
  age: 0,
  setAge (age: number) {
    this.age = age;
  }
})

const setup = () => {
  const utils = render(
    <StepAge onNext={handleNext} store={store}/>
  );
  return {
    input: utils.getByLabelText(/Age/i),
    button: utils.getByRole('button'),
    ...utils
  };
}

describe('checks age step', () => {

  test('render age step', () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('change input value', async () => {
    const { input } = setup();
    expect(input).toHaveValue(0);
    fireEvent.change(input, { target: { value: `${AGE}` } });
    expect(store.age).toBe(AGE);
    expect(input).toHaveValue(AGE);
  });

  test('click next button', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(handleNext).toBeCalledTimes(1);
  });
});
