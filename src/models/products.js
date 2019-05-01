
export default{
  namespace:'products', // namespace 表示在全局 state 上的 key
  state:[], 
  reducers:{  // reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    'delete'(state,{payload:id}){
      return state.filter(item => item.id!==id)
    }
  }
}


// 通过 dispatch 发起一个 action 触发 state 中的数据改变
// 如果是同步行为会直接通过 Reducers 改变 State
// 如果是异步行为会先触发 Effects 然后流向 Reducers 最终改变 State
