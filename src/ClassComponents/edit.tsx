import React, { Component } from 'react'
import arr from '../todoArr'

interface Iprops{
  call:(task:string,isTaskComplete:boolean,update:boolean)=>void;
  clearEditCompo:()=>void;
  name:string;
}
export default class Edit extends Component<Iprops> {
  constructor(props:Iprops){
    super(props)

  }
  render() {
    const{name,call,clearEditCompo}=this.props;
    return (
    <div className='popUp'>
        <input id='updateText'  defaultValue={arr[+name]['task']} type="text"/>
        <button onClick={()=>updateTask(name,call,clearEditCompo)}>Update</button>
    </div>
    )
  }
}

function updateTask(name:string,call:(task:string,isTaskComplete:boolean,update:boolean)=>void,clearEditCompo:()=>void){
  let index = +name
  let value=(document.getElementById('updateText') as HTMLInputElement).value;
  if(arr[index]['task']===value) {
      alert("no change in task")
  } else {
      arr[index]['task']=value;
      alert("Task Upadated Sucessdully");
  }
  clearEditCompo();
  call("update",false,false);
}
