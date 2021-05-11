import React, { useState, useEffect } from 'react';
import { flows, ProductIds } from './flows';
import './Buyflow.css';

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
  useEffect(() => () => flow.reset(), [flow])
  return <>
    <h4>
      Buying {flow.name}
    </h4>
    <div role="form" className="form">
      {error && <div role="alert" className="error">{error}</div>}
      <CurrentStep onNext={handleNext} store={flow.store}/>
    </div>
  </>;
};

export default Buyflow;
