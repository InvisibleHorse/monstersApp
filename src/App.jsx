import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import MonstersContainer from './containers/monsters/MonstersContainer';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MonstersContainer />} />
            </Routes>
        </div>
    );
}

export default App;
