import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
	
	state:{
		user:null,
		auth:false,
		data:null,
	},
	mutations:{
		SET_USER(state,user){
			state.user = user;
			state.auth = Boolean(user);
		},
		SET_DATA(state,data){
			state.data = data;
		}
	},
	actions:{
		async login({commit},user){
			console.log("user=>",user);
			commit('SET_USER',user)
			
		},
		logout({commit}){
			console.log('logout LOCO')
			sessionStorage.removeItem('loggedIn')
			sessionStorage.removeItem('token')
			commit('SET_USER',null)
		},
		async authUser({commit}){ 
			console.log("authUser");
			const token = sessionStorage.getItem('token')
			//console.log("authUser",token);
			try {
				let response = await axios.post('/api/auth',{token:token})
			 	console.log("authUser",response.data);
				commit('SET_USER',response.data)
			} catch (error) {
				
			}
			
			//commit('SET_USER',response.data.user)			 
		},
		async setData({commit},data){
			console.log("setData");
			commit('SET_DATA',data)
		}
	},
	getters:{
		isLoggedIn(){
			return Boolean(sessionStorage.getItem('loggedIn'))
		}
	}
  })

  export default store