import React from 'react'
import Highlight from 'react-highlight.js'
import '../demo.css'

const JavaDelivery = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{margin: 0, marginBottom: 10}}>Final Delivery Package</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <div className="container-xs">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <Highlight className="pre-formatting" language="diff">
              {`--- Calculator_client.java	2020-06-30 14:24:22.000000000 -0500
+++ Calculator_fmay.java	2020-06-30 14:24:33.000000000 -0500
@@ -2,7 +2,7 @@
     public int evaluate(String expression) {
         int sum = 0;
         for (String summand : expression.split("\\+"))
-            sum -= Integer.valueOf(summand);
+            sum += Integer.valueOf(summand);
         return sum;
     }
 }
`}
            </Highlight>
          </div>
        </div>
        <div className="container-xs">
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

.
Time: 0,006

OK (1 test)
`}
          </Highlight>
        </div>
      </div>
    </div>
  )
}

export default JavaDelivery
