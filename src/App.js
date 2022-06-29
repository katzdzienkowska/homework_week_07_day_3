import React from 'react';
import ChartApp from "./containers/ChartApp";
import './App.css';

function App() {
  return (
    <section className='app'>
      <h1 className='title'>UK Top 20 Songs</h1>
      <ChartApp />
    </section>
  );
}

export default App;
