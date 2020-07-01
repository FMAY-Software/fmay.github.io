import React from "react";
import DemoWizard from "../DemoWizard";
import JavaTest from "./JavaTest";
import JavaDelivery from "./JavaDelivery";

const JavaWizard = (props) => {
  return (
    <DemoWizard>
      <JavaTest />
      <JavaDelivery />
    </DemoWizard>
  );
};

export default JavaWizard;
