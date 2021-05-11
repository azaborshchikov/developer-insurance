import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent, Store } from '../types';
import { compose, notEmpty } from '../validators';

export interface IStoreName extends Store {
  firstName: string
  lastName: string
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
}

const StepName: StepComponent<IStoreName> = ({ onNext, store }) => {
  return <>
    <label>
      First Name:
      <input
        onChange={({ target: { value } }) => {store.setFirstName(value);}}
        value={store.firstName}
      />
    </label>
    <label>
      Last Name:
      <input
        onChange={({ target: { value } }) => {store.setLastName(value);}}
        value={store.lastName}
      />
    </label>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(StepName);

export const validate = (values: IStoreName) => (
  compose(notEmpty('Enter First Name'))(values.firstName)
  || compose(notEmpty('Enter Last Name'))(values.lastName)
);

export const store: IStoreName = {
  firstName: '',
  lastName: '',
  setFirstName (firstName: string) {
    this.firstName = firstName;
  },
  setLastName(lastName: string) {
    this.lastName = lastName
  }
};
