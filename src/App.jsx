import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import MonstersContainer from './containers/monsters/MonstersContainer';
import MonsterContainer from './containers/monster/MonsterContainer';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MonstersContainer />} />
                <Route path="/:id" element={<MonsterContainer />} />
            </Routes>
        </div>
    );
}

export default App;
