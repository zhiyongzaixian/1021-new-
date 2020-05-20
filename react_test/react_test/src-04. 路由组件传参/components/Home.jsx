import React from 'react'
import {Route, Link, Redirect} from 'react-router-dom'

import HomeChild from './HomeChild'
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <Link to='/home/homeChild?a=1'>HomeChild链接</Link>
        <Route path='/home/homeChild' component={HomeChild}></Route>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
