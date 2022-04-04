import React, { Component } from 'react'
import arr from '../todoArr'

type Iprops={
        isTaskComplete:boolean;
        todotask:String;
        taskid:string;
        showPop:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}
export default class ListItem extends Component<Iprops,{}> {
    constructor(props:Iprops) {
        super(props);
        this.setStatus=this.setStatus.bind(this);
    }

    setStatus(e:React.FormEvent<HTMLInputElement>) {
      let isTaskComplete:boolean=e.currentTarget.checked;
      let index:number=+this.props.taskid
      if(isTaskComplete) {
          arr[index]['isTaskComplete']=isTaskComplete;
          e.currentTarget.checked=true;
          alert('task complete');
      }  else {
        arr[index]['isTaskComplete']=isTaskComplete;
        e.currentTarget.checked=false;
        alert('task not completed yet');
      }
    }

    deleteTask(e:React.MouseEvent<HTMLButtonElement>) {
      let index:number=(+this.props.taskid);
      if(arr[index]['task']) {
          arr.splice(index,1);
          e.currentTarget.parentElement?.remove();
          alert('task deleted suscessfully');
      }
    }
  render() {   
                       
    const {todotask,isTaskComplete,showPop,taskid} = this.props;
    return (
      <div>
        <div id={taskid}>
          <p>{todotask}</p>
          <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{this.deleteTask(e)}}>Del</button>
          <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>showPop(e)}>edit</button>
          <input onChange={(e:React.FormEvent<HTMLInputElement>)=>this.setStatus(e)} defaultChecked={isTaskComplete} type="checkbox" />
        </div>
      </div>
      
    )
  }
}
