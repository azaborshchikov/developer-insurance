import React from 'react';
import { observable } from 'mobx';
import { render, fireEvent } from '@testing-library/react';
import { component as StepName } from '../StepName';

const FIRST_NAME = 'John';
const LAST_NAME = 'Doe';

const handleNext = jest.fn();
const store = observable({
  firstName: '',
  lastName: '',
  setFirstName (firstName: string) {
    this.firstName = firstName;
  },
  setLastName (lastName: string) {
    this.lastName = lastName;
  }
});

const setup = () => {
  const utils = render(
    <StepName onNext={handleNext} store={store}/>
  );
  return {
    inputFirst: utils.getByLabelText(/First Name/i),
    inputLast: utils.getByLabelText(/Last Name/i),
    button: utils.getByRole('button'),
    ...utils
  };
};

describe('checks name step', () => {

  test('render name step component', () => {
    const { inputFirst, inputLast, button } = setup();
    expect(inputFirst).toBeInTheDocument();
    expect(inputLast).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('change inputs value', async () => {
    const { inputFirst, inputLast } = setup();
    expect(inputFirst).toHaveValue('');
    fireEvent.change(inputFirst, { target: { value: FIRST_NAME } });
    expect(store.firstName).toBe(FIRST_NAME);
    expect(inputFirst).toHaveValue(FIRST_NAME);

    expect(inputLast).toHaveValue('');
    fireEvent.change(inputLast, { target: { value: LAST_NAME } });
    expect(store.lastName).toBe(LAST_NAME);
    expect(inputLast).toHaveValue(LAST_NAME);
  });

  test('click next button', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(handleNext).toBeCalledTimes(1);
  });
});
