import React from "react";
import { Wizard, Steps, Step } from "react-albus";

const DemoWizard = (props) => {
  const childLength = props.children.length;
  console.log({ childLength });
  return (
    <Wizard>
      <Steps>
        {props.children.map((currentStep, index) => {
          return (
            <Step
              id={`index ${index}`}
              key={index}
              render={({ next, previous, history }) => {
                console.log(!history.index);
                return (
                  <div>
                    {currentStep}
                    <button disabled={history.index === 0} onClick={previous}>
                      Previous
                    </button>
                    <button
                      disabled={!(history.index < childLength - 1)}
                      onClick={next}
                    >
                      Next
                    </button>
                  </div>
                );
              }}
            />
          );
        })}
      </Steps>
    </Wizard>
    // <Wizard>
    //   <Steps>
    //     <Step
    //       id="merlin"
    //       render={({ next }) => (
    //         <div>
    //           <h1>Merlin</h1>
    //           <button onClick={next}>Next</button>
    //         </div>
    //       )}
    //     />
    //     <Step
    //       id="gandalf"
    //       render={({ next, previous }) => (
    //         <div>
    //           <h1>Gandalf</h1>
    //           <button onClick={next}>Next</button>
    //           <button onClick={previous}>Previous</button>
    //         </div>
    //       )}
    //     />
    //     <Step
    //       id="dumbledore"
    //       render={({ previous }) => (
    //         <div>
    //           <h1>Dumbledore</h1>
    //           <button onClick={previous}>Previous</button>
    //         </div>
    //       )}
    //     />
    //   </Steps>
    // </Wizard>
  );
};

export default DemoWizard;
