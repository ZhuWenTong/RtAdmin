import Reflux from 'reflux'
import Action from './action'

const Store = Reflux.createStore({
  init () {
    this.todoStore = {
      listData: []
    }
    this.listenables = Action
  },
  onAddItem (item) {
    this.todoStore.listData.unshift(item)
    this.trigger(this.todoStore)
  },
  onDelItem (index) {
    this.todoStore.listData.splice(index, 1)
    this.trigger(this.todoStore)
  },
  onGetTodoList () {
    this.trigger(this.todoStore)
  }
})

export default Store
