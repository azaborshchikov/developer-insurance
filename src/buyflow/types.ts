import { FC } from 'react';

export type Values = any
export type Store = any

export type StepComponent<S = Store> = FC<{
  onNext: () => void,
  store: S
}>

export interface Product<T = Values, S = Store> {
  name: string,
  steps: Array<{
    component: StepComponent,
    validate?: (values: T) => false | string
  }>,
  store: S
}

