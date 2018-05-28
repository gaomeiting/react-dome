import React, { Component } from 'react';
import { Button } from 'antd-mobile';
export default class App extends Component {
  render() {
    let boss = "李云龙"
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 boss="张大喵"></一营>
        <骑兵连 boss="张得胜"></骑兵连>
      </div>
    );
  }
}

function 骑兵连(props) {
  return <h3>骑兵连连张{props.boss},冲呀</h3>
}
class 一营 extends Component {
  constructor(props) {
    super(props)
    this.state= {
      solders: ['张三','王五', '李四']
    } 
  }
  addSolder() {
    this.setState({
      solders: [...this.state.solders, '张三'+Math.random()]
    })
  }
  render() {
    return (
      <div>
      <h2>一营营长，{this.props.boss}</h2>
      <Button type="primary" onClick={() => this.addSolder()}>添加成员</Button>
      <ul>
      {this.state.solders.map( v => {
              return <li key={v}> {v} </li>
            })}
      </ul>
      </div>
    )
  }
}



