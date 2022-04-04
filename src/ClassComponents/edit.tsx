import React, { Component } from 'react'
import arr from '../todoArr'

interface Iprops{
  clearEditCompo:()=>void;
  taskid:string;
}
export default class Edit extends Component<Iprops> {
  constructor(props:Iprops){
    super(props)
  }
  render() {
    const{taskid,clearEditCompo}=this.props;
    return (
    <div className='popUp'>
        <input id='updateText'  defaultValue={arr[+taskid]['task']} type="text"/>
        <button onClick={()=>updateTask(taskid,clearEditCompo)}>Update</button>
    </div>
    )
  }
}

function updateTask(taskid:string,clearEditCompo:()=>void){

  let value=(document.getElementById('updateText') as HTMLInputElement).value;
  let paraElement=document.getElementById(taskid)?.children[0] as HTMLParagraphElement;
  let task=arr[+taskid]['task'];

  if(task===value) {
      alert("no change in task")
  } else {
      arr[+taskid]['task']=value;
      paraElement.innerHTML=value;
      alert("Task Upadated Sucessdully");
  }
  clearEditCompo();
}
