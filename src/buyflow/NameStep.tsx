import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent } from './types';

interface Values {
  firstName: string,
  lastName: string
}

interface Store extends Values {
  setFirstName: (value: string) => void,
  setLastName: (value: string) => void
}

const EmailStep: StepComponent<Store> = ({ onNext, store }) => {
  return <>
    <div>
      First Name:
      <input
        onChange={({ target: { value } }) => {store.setFirstName(value);}}
        value={store.firstName}
      />
    </div>
    <div>
      Last Name:
      <input
        onChange={({ target: { value } }) => {store.setLastName(value);}}
        value={store.lastName}
      />
    </div>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(EmailStep);

export const validate = (values: Values) => (
  (!values.firstName && 'Enter First Name')
  || (!values.lastName && 'Enter Last Name')
);
