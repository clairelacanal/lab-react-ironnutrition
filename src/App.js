import React from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import 'bulma/css/bulma.css';
import data from './foods.json';
import './App.css';

class App extends React.Component {

  state = {
    foods: data,
    showForm: false,
    query: ''
  }

  addFoodHandler = (food) => {

    this.setState({
      foods: [...this.state.foods, food],
      showForm: false
    })
  }


  render() {
    const filteredFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.query));
    return(
      <div className="App">
          <input className="input is-focused" type="text" value={this.state.query} placeholder="Focused input" onChange={(e) => this.setState({query: e.target.value})}/>
        
        {this.state.showForm?
        <AddFood addfood = {this.addFoodHandler} />
        :
        <button onClick={(e) => this.setState({showForm:true})}>ADD FOOD</button>}
        {filteredFoods.map((food, index) => {
          return (<FoodBox {...food} key={index} />)
        })}
      </div>
    );
  } 
}

export default App;
