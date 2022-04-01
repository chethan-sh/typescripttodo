import React, { Component, useState } from 'react'
import Input from './input'
import Action from './action'
import arr from '../todoArr'
import Display from './display'

interface Item{
  task: string;
  isTaskComplete: boolean;
}
interface IstateTs {
  todo: Item[];
  typee: string;
}

export default class Container extends React.Component<{}, IstateTs> {
  constructor(props: {}) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.typeOfDisplay = this.typeOfDisplay.bind(this);
    this.state = {
      todo: [],
      typee: "all",
    }
  }

  addTask(todotask: string, isTaskComplete: boolean,update:boolean) {
    if (update) {
      arr.push({
        ['task']: todotask,
        ['isTaskComplete']: isTaskComplete,
      });
    }
    this.setState({ todo: [...arr,] });
  }

  typeOfDisplay(typee: string) {
    this.setState({ typee: typee })
  }

  render() {
    return (

      <div>
        <Input onclick={this.addTask}></Input>
        <Display call={this.addTask} typee={this.state.typee} todo={this.state.todo}></Display>
        <Action typeOfDisplay={this.typeOfDisplay} ></Action>
      </div>
    )
  }
}
