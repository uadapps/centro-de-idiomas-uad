<template>
     <div v-if="$store.state.user.rol == 'DOCENTE'">

		<div class="row">
			<div class="col">
				 <grupos></grupos>
			</div>
		</div>
		
    </div>

</template>
<script>
import Grupos from './docentes/Grupos/Grupos.vue';
export default {
	name: 'Home',
	data: function () {
		return {
		   
		}
	}, 
	components: {
		Grupos
	},
	mounted: function () {
		 console.log("HOME",this.$store.state.auth)
		if(this.$store.state.auth)
			this.$router.push("/").catch(err => {});
	},
	methods:{
	   
	},
	computed: {
	   
	}
}
</script>