import React from 'react';
import './App.css';
import {Home} from './Pages/index';
import { SearchContext } from './utils/SearchContext';

function App() {
  return (
    <SearchContext.Provider>
      <Home/>
    </SearchContext.Provider>
  );
}

export default App;
