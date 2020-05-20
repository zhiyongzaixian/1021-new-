const state = {
  arr: [],
  initData: '初始化测试数据'
}



const mutations = {
  changeArr(state, arr) {
    // 异步处理数据的时候数据可以被更新 ，但是Vue的devTools开发工具无法追踪状态
    // why??? 为什么这样设计
    // 因为状态数据是可以被多个组件共享的，也就是说可以被多个组件修改，异步容器数据改变不可控
    // setTimeout(() => {
    //   state.arr = arr;
    // }, 2000)
    state.arr = arr;
  }
}



export default {
  state,
  mutations
}
