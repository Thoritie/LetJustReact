import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Show} from './Show';



class App extends Component {
  
  state = {
    value:'',
    hello:[]
  };
  
  
  handleChange =(event) => {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  
  handleSubmit =(event) =>{
    this.setState({hello: [...this.state.hello,this.state.value] })
    this.setState({value:''})
  }

  render() {
    console.log(this.state.hello)
    return (
      <div className="App">
         <div className="Input">
            <label>
              Name:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button type="submit" onClick={this.handleSubmit}>enter</button>
          </div>
        
          <Show list={this.state.hello}/>
          
      </div>
    );
  }
}

export default App;
