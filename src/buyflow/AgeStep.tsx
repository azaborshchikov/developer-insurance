import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent } from './types';

interface Values {
  age: number
}

interface Store extends Values {
  setAge: (value: number) => void
}

const AgeStep: StepComponent<Store> = ({ onNext, store }) => {
  return <>
    <div>
      Age:
      <input
        type="number"
        onChange={({ target: { value } }) => {store.setAge(Number(value));}}
        value={store.age}
      />
    </div>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(AgeStep);

export const validate = (values: Values) => (
  (values.age < 18 && 'Too young')
  || (values.age > 100 && 'Too old')
);
