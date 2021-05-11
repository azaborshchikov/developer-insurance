import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import StepSummary from '../StepSummary';

const FIRST_NAME = 'John';
const LAST_NAME = 'Doe';
const EMAIL = 'a@b.c';
const AGE = 25;

const handleNext = jest.fn();
const store = {
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  email: EMAIL,
  age: AGE
};

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <StepSummary onNext={handleNext} store={store}/>
    </BrowserRouter>
  );
  return {
    link: utils.getByRole('link'),
    ...utils
  }
};

describe('checks summary step', () => {
  test('render', () => {
    const { container, link } = setup();
    expect(link).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
