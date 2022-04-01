import React, { Component, HtmlHTMLAttributes } from 'react'


type Iprops={
  onclick:(task:string,isTaskComplete:boolean,update:boolean)=>void;
}
export default class Input extends Component<Iprops> {
    constructor(props:Iprops)
    {
        super(props);

    }
    updateArray() {
        let task=(document.getElementById('textEntered') as HTMLInputElement).value;
        this.props.onclick(task,false,true);
    }
  render() {
    return (
      <div>
        <input id='textEntered' defaultValue='' type="text"/>
        <button onClick={()=>this.updateArray()}>Add</button>
      </div>
    )
  }
}
