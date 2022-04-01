import React, { Component } from 'react'

interface Iprops{
  typeOfDisplay:(type:string)=>void;
}
export default class Action extends Component<Iprops> {
  constructor(props:Iprops) {
    super(props);
  }
  render() {
        const {typeOfDisplay} =this.props;
    return (
          <div>
              <button onClick={()=>{typeOfDisplay('all')}}>All</button>
              <button onClick={()=>{typeOfDisplay('completed')}}>Completed</button>
              <button onClick={()=>{typeOfDisplay('notCompleted')}}>Pending</button>
          </div>
    )
  }
}
