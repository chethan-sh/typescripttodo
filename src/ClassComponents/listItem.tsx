import React, { Component } from 'react'
import arr from '../todoArr'

type Iprops={
        isTaskComplete:boolean;
        todotask:String;
        name:string;
        showPop:(name:string)=>void;
        refresh:()=>void;
}
export default class ListItem extends Component<Iprops,{}> {
    constructor(props:Iprops) {
        super(props);
        this.setStatus=this.setStatus.bind(this);
    }
    setStatus(e:React.FormEvent<HTMLInputElement>) {
      let check:boolean=e.currentTarget.checked;
      let index:number=+this.props.name
      if(check) {
          arr[index]['isTaskComplete']=check;
          e.currentTarget.checked=true;
          alert("task complete");
         

      }  else {
        arr[+this.props.name]['isTaskComplete']=check;
        e.currentTarget.checked=false;
        alert("task not completed yet");
      }
    }
    deleteTask() {
      let index:number=(+this.props.name);
      if(arr[index]['task']) {
          arr.splice(index,1);
          this.props.refresh();
          alert("task deleted suscessfully");
      }
    }
  render() {   
                       
    const {todotask,isTaskComplete,showPop} = this.props;
    return (
      <div>
          <p>{todotask}</p>
          <button onClick={()=>{this.deleteTask()}}>Del</button>
          <button name={this.props.name} onClick={(e:React.MouseEvent<HTMLButtonElement>)=>showPop(e.currentTarget.name)}>edit</button>
          <input onChange={(e:React.FormEvent<HTMLInputElement>)=>this.setStatus(e)} checked={isTaskComplete} defaultChecked={isTaskComplete} type="checkbox" />
      </div>
    )
  }
}
