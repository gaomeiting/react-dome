import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'
class App extends Component {
  render() {
    
    return (
      <div>
        <p>现在有机关枪的数量:{this.props.num}</p>
        <Button onClick={() => this.props.addGun()}>加机关枪</Button>
        <Button onClick={() => this.props.addGunAsync()}>隔两天加机关枪</Button>
        <Button onClick={() => this.props.removeGun()}>减机关枪</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { num : state }
}
const actionCreaters = { addGun, removeGun, addGunAsync }

App = connect(mapStateToProps, actionCreaters)(App)
export default App;





