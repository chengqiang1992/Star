// 如果在模块化构建系统中，请确保开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count++
		}
	}
})