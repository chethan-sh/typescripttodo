import React, { Component } from 'react'
import ListItem from './listItem';
import Edit from './edit';
import arr from '../todoArr'

interface Item {
        task:string;
        isTaskComplete:boolean;
}
type PropsTs={
    typeofDisplay:string;
    todo:Item[];
}

interface IstateTs {
    showPopup:boolean;
    name:string;
}


export default class Display extends Component<PropsTs,IstateTs> {
    constructor(props:PropsTs) {
        super(props);
        this.showPop=this.showPop.bind(this);
        this.clearEditCompo=this.clearEditCompo.bind(this);
        this.state ={
            showPopup:false,
            name:'',
        };
    }

    showPop(e:React.MouseEvent<HTMLButtonElement>) {
        const taskid:string=String(e.currentTarget.parentElement?.id);
        const index:number=+taskid;

        if(arr[index]['isTaskComplete']) {
            alert('Task Already completed cant edit');
        } else {
            this.setState(()=>{
                if (this.state.showPopup) {
                    return {
                        showPopup:false,
                        name:taskid
                    }
                }
                else {
                    return {
                        showPopup:true,
                        name:taskid
                    }
                }
            })
        }

    }
    clearEditCompo() {
        this.setState({showPopup:false})
    }

  render() {
    const{typeofDisplay} =this.props;
    
    const completedTasks:{}[]=[];
    const notCompletedTasks:{}[]=[];
    const items:{}[]=[];

    arr&&arr.forEach(({task,isTaskComplete},index)=>{
        let listitem=<ListItem key={index} isTaskComplete={isTaskComplete} taskid={String(index)} showPop={this.showPop} todotask={task}></ListItem>
        if(isTaskComplete) {
            completedTasks.push(listitem);
        } else {
            notCompletedTasks.push(listitem);
        }
        items.push(listitem);
    })

    return (
        <div className='display'>
            {(typeofDisplay==='all')?items:(typeofDisplay==='completed')?completedTasks:notCompletedTasks}
            {(this.state.showPopup)?<Edit clearEditCompo={this.clearEditCompo}  taskid={this.state.name}></Edit>:""}
     </div>
    )
  }
}






