//? Can declare imports from libraries or local files
import "./App.css";

//? Import counter component
import Counter from "./components/Counter/Counter";

//? Import a hook from React, in this useState
import { useState } from "react";

//? [ FILE AND FOLDER STRUCTURAL PATTERN ]
//?   - Components and their css are usually tucked away in their own folders
//?     - src/components/Form/Form.js + Form.css

//? [ STYLING ]
//?  - Can use CSS
//?  - Can reference Objs
//?  - Can use in-line
//?  - Can use styling libraries (styled-components, tailwind, react-strap, material)
//?  - JSX styling overrules CSS

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    marginInline: "2em",
  },
};

//? [ COMPONENTS ]
//?   - How React establishes its UI. Anywhere from full pages, and smaller pieces that can populate a web app/doc. Generally reusable and dynamic HTML elements.

//? Functional Component
//?   - Returning JSX - JavaScript XML
//?   - Two types of components, functional and class. Functional are a bit more standardized and newer
//?   - Pascal case your component names
//?   - Has access to hooks

function App() {
  //? Setting up state with the useState hook
  //? [ variable, functionToUpdateVariable ]
  const [showCounter, setShowCounter] = useState(false);

  let myName = "Amit Mangat";

  // Setup an array of values that represent delay times (for box animation)
  let boxCount = [0.2, 0.4, 0.6, 0.8, 1];

  // Setup helper function to get random vals for RGB
  const randomRGBColor = () => {
    const randomNum = () => Math.floor(Math.random() * 256);
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  };

  console.log("App component remounted");
  return (
    <div className="App">
      {/* Inline styling */}
      <h1 style={{ marginTop: 0 }}>Text from App, Parent Component</h1>
      {/* Access JS with {} in the JSX area/ the return  */}

      {showCounter ? <Counter /> : null}
      <button onClick={() => setShowCounter(!showCounter)}>
        Show/Hide Counter
      </button>

      {/* <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button> */}

      {/* Style, referencing the obj above  */}
      <div style={styles.div}>
        <MyComponentInApp myName={myName} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/*//? Map is great in JSX to render multiple items. Array of HTML */}
          {/* {[1, 2, 3, 4, 5].map((i) => {
            return <p>hi </p>;
          })} */}
          {boxCount.map((i, idx) => {
            return (
              <Box
                key={idx}
                // Pass the function of randomRGB as a prop.
                randomRGBColor={randomRGBColor}
                delay={i}
                num={idx + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Another component
const MyComponentInApp = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          padding: "1em",
        }}
      >
        <h1>MyComponentInApp</h1>

        <h3>My component, written in App.js </h3>
        <p>{props.myName}</p>
      </div>
    </>
  );
};

// Another component
const Box = (props) => {
  return (
    <div
      style={{
        minWidth: "200px",
        minHeight: "200px",
        margin: "1em",
        backgroundColor: props.randomRGBColor(),
        animationDelay: `${props.delay}s`,
      }}
      className="box"
    >
      <h1
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          margin: 0,
        }}
      >
        Box {props.num}
      </h1>
    </div>
  );
};

export default App;
