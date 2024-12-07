import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import MonstersContainer from './containers/monsters/MonstersContainer';
import MonsterContainer from './containers/monster/MonsterContainer';
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<MonstersContainer />} />
                <Route path="/:id" element={<MonsterContainer />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
