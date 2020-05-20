import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import Personal from './components/Personal'

class App extends React.Component  {
  state = {
    num: 1,
    msg: 123,
    person: {
      name: 'curry',
      age: 32
    }
  }
  constructor(props){
    super(props);
  }
  
  getHomeData(homeData){
    console.log('子组件home传递的数据： ', homeData);
  }
  
  render(){
    let {msg, person} = this.state;
    return (
      <div>
        <h1>App 组件</h1>
        <p>{msg}</p>
        <p>{person.name}</p>
  
        <br/>
        <br/>
        <br/>
        <Home msg={msg} person={person} getHomeData={this.getHomeData}></Home>
        <Personal></Personal>
        
      </div>
    )
  }
}


export default  App
