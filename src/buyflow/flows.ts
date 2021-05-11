import { observable } from 'mobx';
import { Flow, IStep } from './types';

import * as StepName from './steps/StepName';
import * as StepEmail from './steps/StepEmail';
import * as StepAge from './steps/StepAge';
import StepSummary from './steps/StepSummary';

export enum ProductIds {
  devIns = 'dev_ins',
  qaIns = 'qa_ins'
}

const devIns: Flow = {
  name: 'Developer Insurance',
  ...createFlowSteps(
    StepName,
    StepEmail,
    StepAge,
    { component: StepSummary }
  ),
};

const qaIns: Flow = {
  name: 'Quality Assurance Specialist Insurance',
  ...createFlowSteps(
    StepEmail,
    StepAge,
    { component: StepSummary }
  )
};

export const flows: Record<ProductIds, Flow> = {
  [ProductIds.devIns]: devIns,
  [ProductIds.qaIns]: qaIns
};

function createFlowSteps (...steps: Array<IStep>) {
  return {
    steps,
    store: composeStore(...steps),
    reset: function () {
      this.store = composeStore(...steps)
    }
  };
}

function composeStore (...steps: Array<IStep>) {
  return observable(Object.assign(
    {},
    ...steps.map(({ store }) => store || {})
  ));
}
