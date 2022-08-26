import Reflux from 'reflux'
import Action from './action'

const Store = Reflux.createStore({
  init () {
    this.demoStore = {
      count: 0,
      name: 'zwt'
    }
    this.listenables = Action
  },
  onAddCount () {
    this.demoStore.count += 1
    this.trigger(this.demoStore)
  },
  onMinCount () {
    this.demoStore.count -= 1
    this.trigger(this.demoStore)
  },
  onGetCount () {
    this.trigger(this.demoStore)
  },
  onChangeName (name) {
    this.demoStore.name = name
    this.trigger(this.demoStore)
  }
})

export default Store
