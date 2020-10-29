import React from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import 'bulma/css/bulma.css';
import data from './foods.json';
import './App.css';

class App extends React.Component {

  state = {
    foods: data,
    showForm: false
  }

  addFoodHandler = (food) => {

    this.setState({
      foods: [...this.state.foods, food],
      showForm: false
    })
  }


  render() {
    return(
      <div className="App">
        {this.state.showForm?
        <AddFood addfood = {this.addFoodHandler} />
        :
        <button onClick={(e) => this.setState({showForm:true})}>ADD FOOD</button>}
        {this.state.foods.map((food, index) => {
          return (<FoodBox {...food} key={index} />)
        })}
      </div>
    );
  } 
}

export default App;
