import React from 'react'
import Highlight from 'react-highlight.js'
import '../demo.css'

const JavaDemo = (props) => {
  return (
    <div
      className="demostration_area"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <div>
        <p style={{margin: 0, marginBottom: 10}}>Your Code</p>
        <div className="code_area">
          <Highlight className="pre-formatting" language="java">
            {`public class Calculator {
  public int evaluate(String expression) {
    int sum = 0;
    for (String summand: expression.split("\\+"))
      sum -= Integer.valueOf(summand);
    return sum;
  }
}`}
          </Highlight>
        </div>
      </div>
      <div>
        <p style={{margin: 0, marginBottom: 10}}>Our Test, first delivery</p>
        <div className="code_area">
          <Highlight className="pre-formatting" language="java">
            {`import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}

.E
Time: 0,007
There was 1 failure:
1) evaluatesExpression(CalculatorTest)
java.lang.AssertionError: expected:<6> but was:<-6>
  at org.junit.Assert.fail(Assert.java:88)
  ...

FAILURES!!!
Tests run: 1,  Failures: 1
`}
          </Highlight>
        </div>
      </div>
    </div>
  )
}

export default JavaDemo
