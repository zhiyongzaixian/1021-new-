import React, {lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, Redirect,Switch, NavLink} from 'react-router-dom'
//
// import Home from './components/Home'
// import Personal from './components/Personal'
// import Test from './components/test'
import HomeChild from './components/HomeChild'

const Home = lazy(() => import('./components/Home'))
const Personal = lazy(() => import('./components/Personal'))
const Test = lazy(() => import('./components/test'))


class App extends React.Component  {
  constructor(props){
    super(props);
  }
  
  
  render(){
    return (
      <div>
        <h1>App 组件</h1>
        <Link to='/home'>home链接</Link> &nbsp;
        {/*<NavLink to='/personal/123'>personal链接</NavLink>*/}
        <NavLink to='/personal'>personal链接</NavLink>
        {/*当有二级路由的时候，父路由组件不使用精准匹配exact*/}
        {/*<Route path='/home' component={Home} exact></Route>*/}
        
        {/*Switch好处： 一旦匹配成功后，就停止匹配*/}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/*<Route path='/' component={Test} ></Route>*/}
            <Route path='/home' component={Home} ></Route>
            {/*<Route path='/home/homeChild' component={HomeChild}></Route>*/}
            {/*<Route path='/personal/:id' component={Personal}></Route>*/}
            <Route path='/personal' render={() => <Personal num={123}/>}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
        </Suspense>
        
       
      </div>
    )
  }
}


export default  App
