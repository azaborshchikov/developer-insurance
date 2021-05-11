import React from 'react';
import { observer } from 'mobx-react-lite';
import { StepComponent, Store } from '../types';
import { compose, min, max } from '../validators';

export interface IStoreAge extends Store {
  age: number
  setAge: (value: number) => void
}

const StepAge: StepComponent<IStoreAge> = ({ onNext, store }) => {
  return <>
    <label>
      Age:
      <input
        type="number"
        onChange={({ target: { value } }) => {store.setAge(Number(value));}}
        value={store.age}
      />
    </label>
    <button onClick={onNext}>
      Next
    </button>
  </>;
};

export const component = observer(StepAge);

export const validate = (values: IStoreAge) => compose(
  min(18, 'Too young'),
  max(100, 'Too old')
)(values.age);

export const store: IStoreAge = {
  age: 0,
  setAge (age: number) {
    this.age = age;
  }
};
