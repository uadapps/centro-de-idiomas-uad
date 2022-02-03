<template>
    <div>
        HOME
    </div>

</template>
<script>
export default {
	name: 'Home',
	data: function () {
		return {
		   
		}
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