import { FC } from 'react';

export type Store = any;
export type Validate = (values: Store) => false | string;

export type StepComponent<S = Store> = FC<{
  onNext: () => void,
  store: S
}>

export interface Flow {
  name: string
  steps: Array<{
    component: StepComponent
    validate?: Validate
  }>,
  store: Store,
  reset: () => void
}

export interface IStep {
  component: StepComponent
  validate?: Validate
  store?: Store
}
