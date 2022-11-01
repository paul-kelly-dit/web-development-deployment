import React, { useContext } from 'react';

// using useContext - we do not have to pass props to all the child components

const AccountContext = React.createContext({});

const ContextExample = () => {

  return (
    <div>
      <p>Parent Component</p>
      <ChildComponent />
    </div>
  );
};

function ChildComponent() {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent() {
  return (
    <div>
      <h2>This is SubChild Component</h2>
      <hr />
      <SubSubChildComponent />
    </div>
  );
}

function SubSubChildComponent() {
  var accountData = React.useContext(AccountContext);
  return (
    <div>
      <h3>This is Sub Sub Child Component</h3>
      <p>Name: {accountData.name}</p>
      <p>Role: {accountData.role}</p>
     </div>
  );
}

const App = () => (
  <AccountContext.Provider value={{ name: 'Manuel', role: 'admin' }}>
    <ContextExample />
  </AccountContext.Provider>
);

export default App;
