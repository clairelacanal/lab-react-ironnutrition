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
    } 

    handleChange = (e) => {
        let value = e.target.value
        const name = e.target.name
        
    
        this.setState({
            [name] : value
        })
    }    

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.props.addfood(this.state);

        this.setState({initialState});
    }

    render() {
        return (
            <div> 
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="NAME" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="calories" placeholder="CALORIES" value={this.state.calories} onChange={this.handleChange} />
                <input type="text" name="image" placeholder="IMAGE" value={this.state.image} onChange={this.handleChange} />
                <button>Submit</button>
            </form>
          </div>
        )
    }
}

export default AddFood;