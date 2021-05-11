import { Product } from './types';
import {
  DevInsStore,
  DevInsValues,
  QaInsStore,
  QaInsValues
} from './store';
import * as NameStep from './NameStep';
import * as EmailStep from './EmailStep';
import * as AgeStep from './AgeStep';
import SummaryStep from './SummaryStep';

export enum ProductIds {
  devIns = 'dev_ins',
  qaIns = 'qa_ins'
}

const devIns: Product<DevInsValues, DevInsStore> = {
  name: 'Developer Insurance',
  steps: [
    NameStep,
    EmailStep,
    AgeStep,
    { component: SummaryStep },
  ],
  store: new DevInsStore()
};

const qaIns: Product<QaInsValues, QaInsStore> = {
  name: 'Quality Assurance Specialist Insurance',
  steps: [
    EmailStep,
    AgeStep,
    { component: SummaryStep },
  ],
  store: new DevInsStore()
};

export const flows: Record<ProductIds, Product> = {
  [ProductIds.devIns]: devIns,
  [ProductIds.qaIns]: qaIns
};
