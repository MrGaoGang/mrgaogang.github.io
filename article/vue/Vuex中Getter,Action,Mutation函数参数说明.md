vuex 状态管理库在不同的条件下，`getter/mutation/action `的`入参及调用方式`其实是`有所差别的`。下面主要针对三种情况简单讲述`不同条件下入参和调用方式是什么`。

- 非 modules Store
- 启动 Store 的 modules
- 启动 Store 的 modules+namespace

## 一、非 modules Store

### 1. getters

> 入参为 `(state,otherGetter)`

```js
let getters = {
  doneTodos: state => {
    return state.todoList;
  },
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length;
  }
};
```

**组件中使用 getter 方式**

```js
import { mapGetters } from "vuex";

export default {
  // ...
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      "doneTodosCount",
      "anotherGetter"
      // ...
    ])
  }
};

//或者
mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: "doneTodosCount"
});
```

**给 getter 传递参数**

```js
//可以通过让 getter 返回一个函数，来实现给 getter 传参
let getters = {
  // ...
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
};
//使用时
store.getters.getTodoById(2); // -> { id: 2, text: '...', done: false }
```

### 2. mutations

> 入参为`(state,payload)`

```js
//payload是使用store.commit("increment",{id:"aaa"})中第二个参数
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}

```

**使用方式**

```js
// 1. 使用$store
this.$store.commit("increment",{id:"aaaa"})

// 2. 使用别名
 methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
```

### 3. actions

> 入参为 `(context,payload)`,其中 context 包含 **commit,state,getters,dispatch**

```js
let actions = {
  checkout({ commit, state, dispatch }, products) {
    // 把当前购物车的物品备份起来
    const savedCartItems = [...state.cart.added];
    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST);
    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失败操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    );
  },
  //触发另外一个action
  actionB({ dispatch, commit }) {
    return dispatch("actionA").then(() => {
      commit("someOtherMutation");
    });
  },

  //使用异步async和await
  async actionA({ commit }) {
    commit("gotData", await getData());
  },
  async actionB({ dispatch, commit }) {
    await dispatch("actionA"); // 等待 actionA 完成
    commit("gotOtherData", await getOtherData());
  }
};
```

**在组件中使用 action**

```js
import { mapActions } from "vuex";

//1. 直接使用store
//this.$store.dispatch("checkout",{id:"aaa})

//2. 使用mapActions方式

export default {
  // ...
  methods: {
    ...mapActions([
      "increment", // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      "incrementBy" // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: "increment" // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
};
```


## 二、 启动 Store 的 modules

**调用方式**

默认情况下，模块内部的 action、mutation 和 getter 是注册在**全局命名空间**的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

**所以调用方式和`非module情况是一样的`。但是如果是开启了namespace就不一样了**，后面会介绍


如何启动module?

```js

const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

```


### 1. getters

> 入参 `(state,otherGetters,rootState)`，**其中state是局部state对象，rootState为根节点状态**

```js
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

```



### 2. mutations


> 入参为`(state,payload)`**其中state为局部state对象** 参数个数和非module没有变化



### 3. actions

> 入参为 `(context,payload)`,其中 context 包含 **commit,state,getters,dispatch,rootState,rootGetters** 其中rootState和rootGetters为根节点的state和getters



## 三、启动 Store 的 modules+namespace

如何启动命名空间？

```js

const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      // 模块内容（module assets）
      state: { ... }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: { ... },
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,

          state: { ... },
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})

```

**请注意上面的三种情况**
- 启动命名空间
- 继承父模块的命名空间
- 进一步嵌套命名空间

**启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit**


### 1. getters

> 入参：`(state, getters, rootState, rootGetters)`

```js
modules: {
  foo: {
    namespaced: true,

    getters: {
      // 在这个模块的 getter 中，`getters` 被局部化了
      // 你可以使用 getter 的第四个参数来调用 `rootGetters`
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },
  }
}
```

**调用方式**

```js
//1. 使用store
this.$store.foo.someGetter

//使用mapGetters
computed: {
  ...mapGetters({
    a: "foo/someGetter",
    b: "some.nested.module.b"
  })
},

//或者将路径提出至第一个参数使用
computed: {
  ...mapGetters("some.nested.module",{
    b: "b"
  })
},

```

### 2. mutations

> 和非namespace:true情况是一样的，`(state,payload)`,state是局部的state


**调用方式**

```js
//1. 使用store
this.$store.commit("foo/someMutation",{})

//使用mapMutations
method: {
  ...mapMutations({
    a: "foo/someMutation",
    b: "some.nested.module.b"
  })
},

//或者将路径提出至第一个参数使用
method: {
  ...mapMutations("some.nested.module",{
    b: "b"
  })
},


```


### 3. actions

> 参数：参数个数和moduls情况是一样的`(context,payload)`，其中context包含`commit,state,getters,dispatch,rootGetters,rootState`
```js

actions: {
      // 在这个模块中， dispatch 和 commit 也被局部化了
      // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        //将第三个参数设置为{root:true}就可以访问全局命名空间中的actions
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }

```


**调用方式**

```js
//1. 使用store
this.$store.dispatch("foo/someActions",{})

//使用mapActions
method: {
  ...mapActions([
    'foo':"some/nested/module/foo", // -> this.foo()
    'bar':"some/nested/module/bar" // -> this.bar()
  ])
},

//或者将路径提出至第一个参数使用
method: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
},


```

### 4. state

在开启`namespace:true`的state获取方式为：

```js
computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  })
},
//或者将路径提出至第一个参数使用
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
```




## 四、总结


1. getters的函数入参为`(state, otherGetters, rootState, rootGetters)`
    - **非 modules Store**: 有用参数为state,otherGetters
    - **modules情况**: `rootState和rootGetters分别表示根节点的state和getters;此时的state和otherGetters为局部的状态和getters`。(**调用方式和非modules相同**)
    - **modules+namespace**:`参数和modules情况一致`，`只是调用commit,dispatch和获取state,getters,mutation,action需要加上模块路径`。


2. mutations的函数入参为`(state,payload)`
    - 在以上三种情况`state都只表示为局部状态的state`,payload为传递的额外参数。
    - 因为mutation的作用是同步修改当前state，那么也就肯定无需全局state。`如果需要在namespance:true`情况`使用commit`的时候更新全局mutation，`可加上{root:true}参数`。

3. actions的函数入参为`(context,payload)`
    - `let {state,dispatch,commit,getters,rootGetters,rootState}=context`;
    - **非 modules Store**: 有用参数为state,dispatch,commit
    - **modules情况**: `rootState和rootGetters分别表示根节点的state和getters;此时的state和otherGetters为局部的状态和getters`。(**调用方式和非modules相同**)

    - **modules+namespace**:`参数和modules情况一致`，`只是调用commit,dispatch和获取state,getters,mutation,action需要加上模块路径`。**若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可**
