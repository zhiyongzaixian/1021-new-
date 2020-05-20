import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component  {
  state = {
    num: 1
  }
  constructor(props){
    super(props);
  }
  
  componentWillMount(){
    // debugger
  
    console.log('-------- componentWillMount ------');
  }
  
  componentDidMount() {
    console.log('-------- componentDidMount 组件挂载完毕------');
    // React修改状态的时候在自身的钩子函数中修改是异步的，非自身的钩子函数中是同步的
    
    // this.setState,   小程序： this.setData
    // this.setState({
    //   num: 2
    // }, () => {
    //   console.log(this.state.num); // 2
    // })
    // console.log(this.state.num); // 1
    
    // setTimeout(() => {
    //   this.setState({
    //     num: 2
    //   })
    //   console.log(this.state.num); // 2
    // }, 2000)
    
    
    this.intervalId = setInterval(() => {
      console.log('---------- setInterval() ------');
      this.setState({
        num: ++this.state.num
      })
    }, 1000)
    
    // 销毁组件
    // React销毁组件是直接将之前插入页面的真实dom对象片段直接从页面容器中删除
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 4000)
    
  }
  componentWillUpdate(){
    console.log('-------- componentWillUpdate ------');
  
  }
  
  componentDidUpdate() {
    console.log('-------- componentDidUpdate 组件更新完毕------');
    
  }
  
  componentWillUnmount(){
    console.log('-------- componentWillUnmount 组件即将要卸载------');
    clearInterval(this.intervalId)
  }
  render(){
    return (
      <div>
        <h1>App 组件</h1>
        <p>{this.state.num}</p>
      </div>
    )
  }
}


export default  App
