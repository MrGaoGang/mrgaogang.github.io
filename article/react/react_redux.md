图片参考于这里

### Action的理解:

1、action是用来触发reducer修改state的，触发的方式是使用dispatch;
2、dispatch修改方式为{type:"唯一的type",...你的数据}
3、默认情况只能使用同步方式dispatch，如果需要异步方式则需要引入第三方库redux-thunk;
4、我们可以在react的component中调用action，来更新或者获取数据。

```
//举个例子：global.js
export const setDemo = demo => (dispatch, state) => {
  dispatch({
    type: "GLOABLE_DEMO",
    demo: demo
  });
};

//home.js中使用异步方式请求
const receiveInfo = response => ({
  type: 'RECEIVE_HOME',
  homeInfo: response
});

export const getInfo = () => async (dispatch, getState) => {
  try {
    const response = await new Promise((resolve, reject) => {
      /* 模拟异步操作成功，这样可以通过fetch调接口获取数据 */
      setTimeout(() => {
        resolve({ title: 'React App' });
      }, 1000);
    });
    await dispatch(receiveHome(response));
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
};
```
### Reducer的理解

1、Reducer是一个纯函数，其作用就是通过返回一个新的state来达到修改state的目的；
2、Reducer函数入参有两个：state，action；切记不要直接修改state和action；
3、如果需要在一个对象中添加/修改一个key可以使用Object.assign()函数，但是此函数在部分浏览器中不支持；需要安装babel-polifill;
4、Reducer中根据action的type不同来更新不同的state，所以建议将type抽离成一个单独的js文件，利于维护;

```
//一个例子 global.js
const initState = {
  userInfo: {},
  demo:"我是demo"
  
};

export const global = (state = initState, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        userInfo: action.userInfo
      };
    case 'GLOABLE_DEMO':
    return{
      ...state,
      demo:action.demo//action.demo就是上面action使用dispatch传递的demo数据
    }
    default:
      return state;
  }
};

//Reducer可以拆分成多个模块，可以使用统一入口
import { home } from './home';
import { global } from './global';
const rootReducer = {
  home,
  global
};
export default rootReducer;

```
### 全局共享store
> 使用Reducer 创建全局唯一的store：将各个Reducer返回的state通过combineReducer合并在在一起（这就是下面【 如何在react中使用state和action】） //为什么使用@connect的第一参数可以使用...state.home来获取home的reducer的state；

> combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数;
```
const store = createStore( combineReducers({ routing: routerReducer, ...rootReducer }), composeWithDevTools(applyMiddleware(...middlewares)) );


import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import rootReducer from './reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history);

const middlewares = [thunk, middleware];

//使用Reducer 创建全局唯一的store：将各个Reducer返回的state通过combineReducer合并在在一起（这就是下面【 如何在react中使用state和action】）
//为什么使用@connect的第一参数可以使用...state.home来获取home的reducer的state；
const store = createStore(
    //combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数;
  combineReducers({ routing: routerReducer, ...rootReducer }),
  composeWithDevTools(applyMiddleware(...middlewares))
);
//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法
const render = Component => ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>
  document.getElementById('root')
);
render(App);
```
### 如何在react中使用state和action？
使用之前需要引入第三方库react-redux；
```
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as home from "../actions/home";
import * as global from "../actions/global";

import "./index.less";

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])其作用为连接 React 组件与 Redux store；

@connect(
  //1、store 中的数据作为 props 绑定到组件上 ，...state.home是当前页面的状态管理，global则是全局state，如果需要多个
  //组件共享一些state，那么可以将state放在global中，比如demo
  //2、只有定义了此参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，
  //mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
  //3、state.home从哪里来？其实是上述总的reducer中的{home,global}中的home
  state => ({ ...state.home,...state.global }),
  //将 action 作为 props 绑定到组件上
  dispatch => bindActionCreators({ ...home, ...global }, dispatch)
)

//再获取传递给当前组件的state
//demo为全局global中的state，setDemo为全局的action
var {demo,setDemo,getInfo}=this.props;

<span>{demo}</span>
//调用action 修改state
<button onClick={()=>{ setDemo("我是新的demo"+(new Date()))}}>点击我修改state</button>
//获取数据
getInfo().then(res=>res.json()).then(da=>{
    
})
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
```
1、mapStateToProps（state, ownProps）

> mapStateToProps是一个函数，用于建立组件跟 store 的 state 的映射关系 作为一个函数，它可以传入两个参数，结果一定要返回一个 object
传入mapStateToProps之后，会订阅store的状态改变，在每次 store 的 state 发生变化的时候，都会被调用
ownProps代表组件本身的props，如果写了第二个参数ownProps，那么当prop发生变化的时候，mapStateToProps也会被调用。例如，当 props接收到来自父组件一个小小的改动，那么你所使用的 ownProps 参数，mapStateToProps 都会被重新计算）。
mapStateToProps可以不传，如果不传，组件不会监听store的变化，也就是说Store的更新不会引起UI的更新
