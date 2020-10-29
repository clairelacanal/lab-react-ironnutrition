import React from 'react';

const initialState = {
    name: '',
    calories: '',
    image:''
}

class AddFood extends React.Component {
    //this.state
    state = {
        initialState,
        showForm: false // j'initialise mon bouton à FALSE (mon formulaire n'apparaît pas)
    } 

    handleChange = (e) => {
        let value = e.target.value
        const name = e.target.name
    
        this.setState({
            [name] : value
        })
    }    

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.props.food(this.state)

        this.setState(initialState)
    }

    showForm = () => {
        return (
          <div> 
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="NAME" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="calories" placeholder="CALORIES" value={this.state.calories} onChange={this.handleChange} />
                <input type="text" name="name" placeholder="IMAGE" value={this.state.image} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
          </div>
          );
      }

    render() {
        return (
            <button  onClick={() => this.setState({showForm: true}) }>Add New Food</button> // QUand je clique sur le bouton, ça change ma state
        )
    }
}

export default AddFood;