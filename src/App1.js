import { useState } from 'react';
import { StepperConterxt } from './Customer/components/Contexts/StepperContext';
import React from 'react';
import './App.css';
import Order from './Customer/components/Components/Steps/Order';
import Address from './Customer/components/Components/Steps/Address'
import Payment from './Customer/components/Components/Steps/Payment'
import Stepper from './Customer/components/Components/Stepper';
import {StepperControl} from './Customer/components/Components/StepperControl'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Order Details",
    "Address",
    "Payment"
  ];
  const displaystep = (step) =>{
    switch(step) {
      case 1:
        return <Order />
      case 2:
        return <Address />
      case 3:
        return <Payment />
      default:
    }
  }
  const handleClick = (direction) => {
     let newStep = currentStep;
     direction == "next"? newStep++ : newStep--;
     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
      <Stepper
      steps = {steps}
      currentStep={currentStep} 
      />
      <div className="my-10 p-10">
        <StepperConterxt.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displaystep(currentStep)}
        </StepperConterxt.Provider>
      </div>
      </div>      
        <StepperControl 
        handleClick = {handleClick}
        currentStep = {currentStep}
        steps = {steps}
        />
      
    </div>
  );
}

export default App;
