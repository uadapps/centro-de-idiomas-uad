<template>
	    <div id="">				
        <div class="app-page-title">
            <div class="page-title-wrapper">
                
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="fa fa-file-alt icon-gradient bg-light"></i>
                    </div>
                    <div>
                        <h4>Captura Calificaciones | <span style="text-transform: uppercase;">{{$route.params.slug}} </span>  |  {{grupo}} </h4>
                        <div class="page-title-subheading"></div>
                    </div>
                </div>
                

            </div>
        </div>

        <div class="main-card mb-3 card">
            <div class="card-body">
                

                 <table style="width: 100%;" class="table table-hover table-striped table-bordered" id="tabla_rvoes"  >

                    <thead class="table-header">
                        <tr align="center">
							<th></th>
							<th>Matricula</th>
                            <th>Alumno</th>
							<th>Speaking 50%</th>
							<th>Written 40%</th>
							<th>homework/participation/attendance 10%</th>
							<th>Mid Grade</th>
							<th>Speaking 50%</th>
							<th>Written 40%</th>
							<th>homework/participation/attendance 10%</th>
							<th>Final Exam</th>
							<th>Final Grade</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(al,index) in alumnos" :key="al.id">
							<td>
								<img v-if="al.photo" :src="'data:image/jpeg;base64,'+al.photo" width="50" height="50" class="rounded-circle" />
								<img v-else src="https://fundaciongaem.org/wp-content/uploads/2016/05/no-foto.jpg" width="50" height="50" class="rounded-circle" />
								
							</td>
							<td>{{al.id_alumno}}</td>
                           <td>{{al.name}}</td>
						   <td>
							   <input type="text" class="form-control" maxlength="3" v-model="al.speaking1"  >
						   </td> 
						   <td>
							   <input type="text" class="form-control" maxlength="3"  v-model="al.written1">
						   </td> 
						   <td>
							   <input type="text" class="form-control" maxlength="3"  v-model="al.hpa1">
						   </td> 
						   <td class="text-center">
							   <div class="panel-custom" @click="getMidGrade(al.speaking1,al.written1,al.hpa1,index)">
 									{{getMidGrade(al.speaking1,al.written1,al.hpa1,index)}}
							   </div>
							  
						   </td> 
						   <td>
							   <input type="text" class="form-control" maxlength="3"  v-model="al.speaking2">
						   </td> 
						   <td>
							   <input type="text" class="form-control" maxlength="3"  v-model="al.written2">
						   </td> 
						   <td>
							   <input type="text" class="form-control" maxlength="3"  v-model="al.hpa2">
						   </td> 
						   <td>
							   <div class="panel-custom">
 									{{getFinalGrade(al.speaking2,al.written2,al.hpa2,index)}}
							   </div>
						   </td> 
						   <td>
							{{getFinal(al.midTerm,al.finalExam,index)}}
						   </td> 
						   
                        </tr>
                    </tbody>
					<tfoot>
						<tr>
							<td colspan="3" class="text-right">
								<button class="btn btn-primary" @click="saveGrades()">Guardar</button>
							</td>
						</tr>
					</tfoot>
                </table>
            </div>
        </div>
        
</div>
</template>
<script>
export default {
	name: 'GrupoAlumnos',
	data: function () {
		return {
			alumnos: [],	
			grupo:''
		}
	},
	mounted: function () {
		 this.getAlumnos()
	},
	methods:{
		getAlumnos(){
			 
			 var url = '/api/grupos/'+this.$route.params.grupo+'/alumnos'
			axios.get(url).then(response => {
				this.alumnos = response.data	
				console.log(this.alumnos)
				this.grupo = response.data[0].grupo	 
			}) 
		},
		getMidGrade(speaking1,written1,hpa1,index){
		 
			var spk1 = 0
			var wrt1= 0
			var h = 0 
		 	if(speaking1 !=0){
				 var spk1= (speaking1/100)*50;
			}
			if(written1!=0){
				wrt1= (written1/100)*40;
			}
			if(hpa1!=0){
				h= (hpa1/100)*10;
			}
			 
			var res = (spk1+wrt1+h).toFixed(2)
			this.alumnos[index].midTerm = res
			return res
		},
		getFinalGrade(speaking1,written1,hpa1,index){
			 
			var spk1 = 0
			var wrt1= 0
			var h = 0 
		 	if(speaking1 !=0){
				 var spk1= (speaking1/100)*50;
			}
			if(written1!=0){
				wrt1= (written1/100)*40;
			}
			if(hpa1!=0){
				h= (hpa1/100)*10;
			}
			  
			var res = (spk1+wrt1+h).toFixed(2)
			this.alumnos[index].finalExam = res
			return res
		},
		getFinal(midTerm,finalExam,index){
			
			var res = ((parseFloat(midTerm)+parseFloat(finalExam))/2) 
			this.alumnos[index].finalGrade = res
			//console.log(res)
			return res
		},
		saveGrades(){
			 
			var g = this.$route.params.grupo
			 var a = this.alumnos
			  console.log(a)
			a.forEach(function(alumno){
				 
				var url = '/api/grupos/'+g+'/alumnos/calificacion'
				axios.put(url,alumno).then(response => {
					console.log(response)
				})
			})
		},
		updateData(index){
			var url = '/api/grupos/'+this.$route.params.grupo+'/alumnos/calificacion'
			axios.put(url,this.alumnos[index]).then(response => {
				console.log(response)
			})
		}
	},
	computed: {
		
	}
}
</script>

<style scoped>
	.panel-custom{
		display: inline-block;
		padding: .25em .4em;
		font-size: 75%;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		white-space: nowrap;
		vertical-align: baseline;
		border-radius: .25rem;
		font-weight: bold;
		text-transform: uppercase;
		padding: 5px 10px;
		min-width: 19px;
		color: #fff;
		background-color: #3f6ad8;
		border-radius: 10rem;
	}
</style>