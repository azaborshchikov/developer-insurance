import React, { useState } from 'react';
import { flows, ProductIds } from './flows';

interface BuyflowProps {
  productId: ProductIds,
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState(0);
  const [error, setError] = useState('');
  const flow = flows[props.productId];
  const { component: CurrentStep, validate } = flow.steps[currentStep];
  const handleNext = () => {
    const stepError = validate && validate(flow.store);
    if (stepError) {
      setError(stepError);
    } else {
      setStep(currentStep + 1);
      setError('');
    }
  };
  return <>
    <h4>
      Buying {flow.name}
    </h4>
    {error && <span>{error}</span>}
    <CurrentStep onNext={handleNext} store={flow.store}/>
  </>;
};

export default Buyflow;
