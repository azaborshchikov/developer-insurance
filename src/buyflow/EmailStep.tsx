import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent } from './types';

interface Values {
  email: string
}

interface Store extends Values {
  setEmail: (value: string) => void
}

const EmailStep: StepComponent<Store> = ({ onNext, store }) => {
  return <>
    <div>
      Email:
      <input
        type="email"
        onChange={({ target: { value } }) => {store.setEmail(value);}}
        value={store.email}
      />
    </div>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(EmailStep);

export const validate = (values: Values) => !values.email && 'Enter email';
