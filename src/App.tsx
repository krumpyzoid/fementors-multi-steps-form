import { useState } from 'react';
import { Formik } from 'formik';

import * as Styled from './styled';
import { FirstStep, SecondStep, ThirdStep, FourthStep } from './steps';
import { steps, initialValues } from './config';
import desktopMenuBg from './assets/bg-sidebar-desktop.svg';


const App = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const getStep = (step: number) => {
    switch (step) {
      case 4:
        return <FourthStep />
      case 3:
        return <ThirdStep />
      case 2:
        return <SecondStep />
      case 1:
      default:
        return <FirstStep />
    }
  }
  return (
    <Styled.Main>
      <Styled.Wrapper>
        <Styled.Menu>
          <Styled.MenuBg src={desktopMenuBg} />
          <Styled.MenuList>
            { steps
              .sort((a, b) => a.number > b.number ? 1 : -1)
              .map((step) => (
                <Styled.Step key={step.number}>
                  <Styled.CircledNumber isActive={currentStep === step.number}>
                    { step.number }
                  </Styled.CircledNumber>
                  <div>
                    <Styled.StepNumber>
                      STEP { step.number }
                    </Styled.StepNumber>
                    <Styled.StepTitle>
                      { step.title }
                    </Styled.StepTitle>
                  </div>
                </Styled.Step>
            ))}
          </Styled.MenuList>
        </Styled.Menu>
        <Styled.Form>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
          >
                <Styled.Formik>
                  <Styled.CurrentStep>
                    { getStep(currentStep) }
                  </Styled.CurrentStep>
                  <Styled.Steps>
                    {currentStep > 1 ? (
                      <Styled.Prev onClick={() => {setCurrentStep(prev => prev - 1)}}>
                        Go back
                      </Styled.Prev> ) : (
                      <div></div>
                    )}
                    {currentStep < steps.length ? (
                      <Styled.Next type="button" onClick={() => {setCurrentStep(prev => prev + 1)}}>
                        Next Step
                      </Styled.Next> ) : (
                      <Styled.Next type="submit">
                        Submit
                      </Styled.Next>
                    )}
                  </Styled.Steps>
                </Styled.Formik>
          </Formik>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Main>
  )
}

export default App
