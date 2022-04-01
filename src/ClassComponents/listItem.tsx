import React, { Component } from 'react'
import arr from '../todoArr'

type Iprops={
        isTaskComplete:boolean;
        todotask:String;
        name:string;
        showPop:(name:string)=>void;
}
export default class ListItem extends Component<Iprops,{}> {
    constructor(props:Iprops) {
        super(props);
        this.setStatus=this.setStatus.bind(this);
    }
    setStatus(e:React.FormEvent<HTMLInputElement>) {
      let check=e.currentTarget.checked;
      if(check) {
        if(window.confirm("Are you sure task complete")) {
          arr[+this.props.name]['isTaskComplete']=check;
        }
      }  else {
        alert("task already completed");
        e.currentTarget.checked=true;
      }
    }
  render() {   
                       
    const {todotask,isTaskComplete,showPop} = this.props;
    return (
      <div>
          <p>{todotask}</p>
          <button>Del</button>
          <button name={this.props.name} onClick={(e:React.MouseEvent<HTMLButtonElement>)=>showPop(e.currentTarget.name)}>edit</button>
          <input onChange={(e:React.FormEvent<HTMLInputElement>)=>this.setStatus(e)} defaultChecked={isTaskComplete} type="checkbox" />
      </div>
    )
  }
}
