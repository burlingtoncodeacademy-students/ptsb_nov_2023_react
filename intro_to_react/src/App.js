//? Can declare imports from libraries or local files
import "./App.css";

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

  const [count, setCount] = useState(0);

  let myName = "Amit Mangat";

  console.log("App component remounted");
  return (
    <div className="App">
      {/* Inline styling */}
      <h1 style={{ marginTop: 0 }}>Text from App, Parent Component</h1>
      {/* Access JS with {} in the JSX area/ the return  */}
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>

      {/* Style, referencing the obj above  */}
      <div style={styles.div}>
        <MyComponentInApp myName={myName} />
      </div>
    </div>
  );
}

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

export default App;
