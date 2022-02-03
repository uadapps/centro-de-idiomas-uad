import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
	
	state:{
		user:null,
		auth:false,
	},
	mutations:{
		SET_USER(state,user){
			state.user = user;
			state.auth = Boolean(user);
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
			console.log("authUser",token);
			try {
				let response = await axios.post('/api/auth',token)
				console.log("authUser",response.data.user);
				commit('SET_USER',response.data.user)
			} catch (error) {
				
			}
			
			//commit('SET_USER',response.data.user)			 
		}
	}
  })