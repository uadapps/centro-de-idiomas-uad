<template>
    <div id="">				
        <div class="app-page-title">
            <div class="page-title-wrapper">
                
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="fa fa-file-alt icon-gradient bg-light"></i>
                    </div>
                    <div>
                        <h4>Grupos</h4>
                        <div class="page-title-subheading"></div>
                    </div>
                </div>
                
                <div class="page-title-actions">
                    <button type="button" data-toggle="modal" title="Agregar RVOE" data-target="#modal_crear" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>

            </div>
        </div>

        <div class="main-card mb-3 card">
            <div class="card-body">
                

                 <table style="width: 100%;" class="table table-hover table-striped table-bordered" id="tabla_rvoes"  >

                    <thead class="table-header">
                        <tr align="center">
                            <th>Materia</th>
							<th>Grupo</th>
							<th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(grupo) in grupos" :key="grupo.ID_Grupo">
                           <td>{{grupo.DescripcionMateria}}</td>
						   <td>{{grupo.Gpo}}</td>
						   <td>
							   <button type="button" class="btn btn-primary" @click="verGrupo(grupo)"><i class="lnr-eye"></i> </button>							   
						   </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
       
        
</div>

</template>

<script>
export default {
	name: 'Grupos',
	data: function () {
		return {
			grupos: [],
		}
	},
	mounted: function () {
		this.getGrupos()
	},
	methods:{
		getGrupos(){
		 
			axios.post('/api/grupos',{userid:this.$store.state.user.id}).then(response => {
				this.grupos = response.data;
				console.log(this.grupos);
			});
		},
		verGrupo(grupo){
			var slug = this.sluging(grupo.DescripcionMateria);
			this.$store.dispatch('setData',grupo);
			this.$router.push({name: 'grupo-alumnos', params: {slug:slug}}).catch(err => {});
		},
		sluging(texto){
			var txt = texto.toLowerCase();
			var t = txt.replaceAll(' ','-')
			var sinAcentos = t.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
			return sinAcentos;
		}, 
			
	},
	computed: {
		
	}
}
</script>