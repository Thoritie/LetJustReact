import React, { Component } from 'react';

export class Input extends Component{
   state = {
       value: '',
       
    };


    handleChange =(event) => {
        console.log(event.target.value)
        this.setState({value: event.target.value})
      }
    
    render(){
        return (
            <div className="Input">
                <form>
                    <label>
                     Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

