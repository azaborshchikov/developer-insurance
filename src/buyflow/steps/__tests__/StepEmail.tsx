import React from 'react';
import { observable } from 'mobx';
import { render, fireEvent } from '@testing-library/react';
import { component as StepEmail } from '../StepEmail';

const EMAIL = 'a@b.c';

const handleNext = jest.fn();
const store = observable({
  email: '',
  setEmail (email: string) {
    this.email = email
  }
});

const setup = () => {
  const utils = render(
    <StepEmail onNext={handleNext} store={store}/>
  );
  return {
    input: utils.getByLabelText(/Email/i),
    button: utils.getByRole('button'),
    ...utils
  };
}

describe('checks email step', () => {

  test('render email step component', () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('change input value', async () => {
    const { input } = setup()
    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: EMAIL } });
    expect(store.email).toBe(EMAIL);
    expect(input).toHaveValue(EMAIL);
  });

  test('click next button', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(handleNext).toBeCalledTimes(1);
  });
});
