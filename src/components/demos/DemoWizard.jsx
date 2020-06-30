import React from 'react'
import StepWizard from 'react-step-wizard'
import JavaTest from './java/JavaTest'
import JavaDelivery from './java/JavaDelivery'

const DemoWizard = (props) => {
  return (
    <StepWizard>
      <JavaTest />
      <JavaDelivery />
    </StepWizard>
  )
}

export default DemoWizard
