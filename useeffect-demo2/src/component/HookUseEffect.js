import React, { useState, useEffect } from "react";

const HookUseEffect = () => {
  //? useEffect
  //? - Takes in a callback function
  //? - By default, it runs on every render. (note: state updates cause a render)
  //? - Access to the main React lifecycle methods. (Component => Mounted, Unmounted, Updated)
  // Syntax
  //* useEffect(() => {},[])

  /*
    The second argument is an optional []
        - If provided, the callback will execute only  on initial mount of component 
        - If dependencies are provided, will execute on initial mount, and if any of the values of the deps change
  */

  const [count, setCount] = useState(0);

  // Do some type of action on initial mount of component and if state has changed
  //   useEffect(() => {
  //     console.log("COMPONENT MOUNTED, OR STATE CHANGED");
  //   });

  // Do some type of action on initial component mount
  //   useEffect(() => {
  //     console.log("WILL SHOW ON INITIAL MOUNT OF COMPONENT ONLY!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("COMPONENT MOUNTED OR COUNT HAS CHANGED!");
  //   }, [count]);

  //! Be cautious of infinite loops, add dep array if state is being update in useEffect
  //   useEffect(() => {
  //     console.log("I am rendering or re-rendering");
  //     setCount(count + 1);
  //   });
  //! Example of setinterval in useEffect
  //   useEffect(() => {
  //     let interval = setInterval(() => setCount((prev) => prev + 1), 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button> */}

      <UseEffectFetch />
    </div>
  );
};

const UseEffectFetch = () => {
  const [selectedOption, setSelectedOption] = useState("films");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = ["films", "people", "locations", "species", "vehicles"];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchResults = async () => {
      setLoading(true);
      try {
        let json = await (
          await fetch(`https://ghibliapi.vercel.app/${selectedOption}`, {
            signal,
          })
        ).json();

        // console.log(json);
        setResults(json);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchResults();

    return () => controller.abort();
  }, [selectedOption]);

  const displayResults = () =>
    results.map((i) => (
      <div key={i.id} style={{ border: "1px solid lightblue" }}>
        <img style={{ maxWidth: "200px" }} src={i.image} alt="poster" />
        <h3>{i.title}</h3>
        <h3>{i.name}</h3>
        <h4>{i.description}</h4>
      </div>
    ));

  return (
    <>
      <h2>Studio Ghibli</h2>

      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>

      {loading ? <h3>⌛ Loading</h3> : displayResults()}
    </>
  );
};

export default HookUseEffect;
