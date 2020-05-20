import React from 'react'


class Personal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Personal 组件</h2>
        {/*<p>params传参： {this.props.match.params.id}</p>*/}
      </div>
    );
  }
}

export default Personal;
