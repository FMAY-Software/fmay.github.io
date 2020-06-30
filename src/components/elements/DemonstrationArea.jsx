import React from 'react'
import Typing from 'react-typing-animation'
import Highlight from 'react-highlight'

const DemonstrationArea = (props) => {
  return (
    <div
      className="demostration_area"
      style={{display: 'flex', flexDirection: 'row', margin: 10}}
    >
      <Typing speed={1}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p style={{margin: 0, marginBottom: 10}}>Your Code</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              minWidth: 350,
              minHeight: 250,
            }}
          >
            <Highlight language="java">
              {`public class Calculator {
  public int evaluate(String expression) {
    int sum = 0;
    for (String summand: expression.split("\\+"))
      sum += Integer.valueOf(summand);
    return sum;
  }
}`}
            </Highlight>
          </div>
        </div>
      </Typing>
      <Typing speed={1}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p style={{margin: 0, marginBottom: 10}}>Our Test</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              minWidth: 350,
              minHeight: 250,
            }}
          >
            <Highlight language="java">
              {`import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}`}
            </Highlight>
          </div>
        </div>
      </Typing>
    </div>
  )
}

export default DemonstrationArea
