import React from 'react';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';

function App() {
  return(
    <div className="App">
      {foods.map((food, index) => {
        return (<FoodBox {...food} key={index} />)
      })}
    </div>
  );
}

export default App;
