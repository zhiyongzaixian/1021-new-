import React from 'react'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.getHomeData('home数据')
    // 子组件是否能够修改父组件传递的props数据
    // this.props.msg = 234 // 修改基本数据类型直接报错
    this.props.person.name = 'wade' // 修改引用数据类型，不报错，但是页面不更新
   
  }
  
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <p>{this.props.msg}</p>
        <p>{this.props.person.name}</p>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
