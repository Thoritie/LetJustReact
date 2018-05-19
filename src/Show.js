import React, { Component } from 'react';

export class Show extends Component{
    render(){
        
        return (
            <div className="Show">
             {
                this.props.list.map((item, i) => { 
                return <li key={i}> {item} </li>
            })
            }

            </div>
        );
    }
}

