import React, { Component } from "react";

class Counter extends Component {
 
  

  render() {
    return (
        <>
           
           
            <ul>
               <span class="badge bg-secondary">{this.props.value}</span>
               <div class="btn-group">
                <button onClick={()=>this.props.onIncrement(this.props.id)} type="button" class="btn btn-secondary m-2">+</button>
                <button onClick={()=>this.props.onDecrement(this.props.id)} type="button" class="btn btn-secondary m-2">-</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} type="button" class="btn btn-danger m-2">Delete</button>
                </div>
               
            </ul>
        </>
    );
  }
}

export default Counter;
