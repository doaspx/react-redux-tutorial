import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import inputApp from './reducers'  // 引入 reducers

let store = createStore(inputApp); //创建store (需要用到Redux 的createStore 参数 reducer)
                                                                    ////Provider 是React-redux 的内置对象，需要将创建的
                                    //store 当做参数进行传递到子层
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);