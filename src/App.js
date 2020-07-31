import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">       
      </header>
      <section className="mainDisplay">
        <list className="flowersOwned listBoxShared">
          <h2 className="title">Flowers on my island:</h2>
        </list>
        <list className="flowerCombos listBoxShared">
          <h2 className="title">Colors available by flower type:</h2>
        </list>
        <form className="formShared addFlower"></form>
        <form className="formShared choseCombo"></form>
      </section>
    </div>
  );
}

export default App;
