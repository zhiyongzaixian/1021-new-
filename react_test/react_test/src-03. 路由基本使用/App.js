import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, Redirect,Switch, NavLink} from 'react-router-dom'

import Home from './components/Home'
import Personal from './components/Personal'
import Test from './components/test'
import HomeChild from './components/HomeChild'

class App extends React.Component  {
  constructor(props){
    super(props);
  }
  
  
  render(){
    return (
      <div>
        <h1>App 组件</h1>
        <Link to='/home'>home链接</Link> &nbsp;
        <NavLink to='/personal'>personal链接</NavLink>
        {/*当有二级路由的时候，父路由组件不使用精准匹配exact*/}
        {/*<Route path='/home' component={Home} exact></Route>*/}
        
        {/*Switch好处： 一旦匹配成功后，就停止匹配*/}
        <Switch>
          {/*<Route path='/' component={Test} ></Route>*/}
          <Route path='/home' component={Home} ></Route>
          {/*<Route path='/home/homeChild' component={HomeChild}></Route>*/}
          <Route path='/personal' component={Personal}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
       
      </div>
    )
  }
}


export default  App
