import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { StepComponent, Store } from '../types';

interface IStepSummary extends Store {
  firstName?: string,
  lastName?: string,
  email: string,
  age: number
}

const StepSummary: StepComponent<IStepSummary> = ({ store }) => {
  return <>
    {store.firstName && (
      <div>
        First Name: {store.firstName}
      </div>
    )}
    {store.lastName && (
      <div>
        Last Name: {store.lastName}
      </div>
    )}
    <div>
      Email: {store.email}
    </div>
    <div>
      Age: {store.age}
    </div>
    <div>
      <Link to="/?purchased=dev_ins">
        Purchase
      </Link>
    </div>
  </>;
};

export default observer(StepSummary);
