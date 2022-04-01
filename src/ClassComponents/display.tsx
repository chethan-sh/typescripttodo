import React, { Component } from 'react'
import ListItem from './listItem';
import Edit from './edit';
import arr from '../todoArr'

interface Item {
        task:string;
        isTaskComplete:boolean;
}
type PropsTs={
    call:(task:string,isTaskComplete:boolean,update:boolean)=>void;
    typee:string;
    todo:Item[];
    refresh:()=>void;
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

    showPop(name:string) {
        let index:string=name;

        if(arr[+index]['isTaskComplete']) {
            alert("Task Already completed cant edit");
        } else {
            this.setState((prevState)=>{
                console.log(prevState);
                if (this.state.showPopup) {
                    return {
                        showPopup:false,
                        name:name
                    }
                }
                else {
                    return {
                        showPopup:true,
                        name:name
                    }
                }
            })
        }

    }
    clearEditCompo() {
        this.setState({showPopup:false})
    }

  render() {
    const persons = new Array(this.props.todo);
    let arr=persons[0];
      
    const{typee} =this.props;
    
    let items=arr?.map(({task,isTaskComplete},index)=>{
        return <ListItem refresh={this.props.refresh} isTaskComplete={isTaskComplete} name={String(index)} showPop={this.showPop} todotask={task}></ListItem>
    });

    let completedTasks:{}[]=[];
    let notCompletedTasks:{}[]=[];
    items?.forEach((listitem,index) => {
        if(arr[index]['isTaskComplete']) {
            completedTasks.push(listitem);
        } else {
            notCompletedTasks.push(listitem);
        }
    });

    return (
        <div className='display'>
            {(typee==='all')?items:(typee==='completed')?completedTasks:notCompletedTasks}
            {(this.state.showPopup)?<Edit clearEditCompo={this.clearEditCompo} call={this.props.call} name={this.state.name}></Edit>:""}
     </div>
    )
  }
}






