import React from 'react';

// setter
// localStorage.setItem('myData', data);

// getter
// localStorage.getItem('myData');

// remove
// localStorage.removeItem('myData');

// remove all
// localStorage.clear();

const App = () => {

  // to manage state of our input field
  const [value, setValue] = React.useState(
    // Retrieves the stored value of state
    localStorage.getItem('myValueInLocalStorage') || '');

  // runs everytime value property is changed (state change)
  React.useEffect(() => {
    // Stores the recent value (state)
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);

  // set state to input value onChange
  const onChange = event => setValue(event.target.value);

  return (

    <div>

      <h1>Max's Local Storage Test!</h1>
      {/* state value starts empty, onChange setValue takes input value, and changes to new state */}
      <input value={value} type="text" onChange={onChange} />
      {/* result of new state shown as output in p tag */}
      <p>{value}</p>

    </div>
  );
};

export default App;