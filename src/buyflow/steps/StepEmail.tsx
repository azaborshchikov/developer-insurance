import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent, Store } from '../types';
import { compose, notEmpty, email } from '../validators';

export interface IStoreEmail extends Store {
  email: string,
  setEmail: (value: string) => void
}

const StepEmail: StepComponent<IStoreEmail> = ({ onNext, store }) => {
  return <>
    <label>
      Email:
      <input
        type="email"
        onChange={({ target: { value } }) => {store.setEmail(value);}}
        value={store.email}
      />
    </label>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(StepEmail);

export const validate = (values: IStoreEmail) => compose(
  notEmpty('Enter Email'),
  email()
)(values.email);

export const store: IStoreEmail = {
  email: '',
  setEmail (email) {
    this.email = email;
  }
};
