import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body"></div>


      <Sidebar />

      <Feed />

    </div>
  );
}

export default App;
