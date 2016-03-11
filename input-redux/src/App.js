import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {        //创建 一个App 组件 继承 react 中的内置组件 Commponent
                                      //创建的input 需要定义value 绑定的是属性， onChange 绑定该对象的方法，同时定义一个ref
                                      //方便查询Dom
  render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        {this.props.propsValue}
      </div>
    );
  }
  changeHandle(){
    //查询组件，查询组件的Value值，调用属性中的Action 方法
    const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();
    this.props.change(value);
  }
}

//定义State指定值映射在Props上
//这里 state.value 为reducers 中定义的state
function mapStateToProps(state) {
  return {
    propsValue: state.value
  }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(App);