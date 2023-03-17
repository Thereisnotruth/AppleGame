import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import GameContainer from './containers/GameContainer';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/game" element={<GameContainer />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
