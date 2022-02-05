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
          <button
            type="button"
            data-toggle="modal"
            title="Agregar RVOE"
            data-target="#modal_crear"
            data-placement="bottom"
            class="btn-shadow mr-3 btn btn-dark"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="main-card mb-3 ">
       
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-xl-3"
          v-for="grupo in grupos"
          :key="grupo.ID_Grupo"
        >
          <div class="card widget-chart" @click="verGrupo(grupo)">
            <div class="widget-chart-content">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-warning"></div>
                <i class="lnr-bookmark"></i>
              </div>
              <div class="widget-numbers" style="font-size: 1.2rem !important">
                <span> {{ grupo.Gpo }}  </span>
              </div>
              <div
                class="
                  widget-subheading
                  fsize-1
                  pt-2
                  opacity-10
                  text-warning
                  font-weight-bold
                "
              >
			  {{ grupo.DescripcionMateria  }}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grupos",
  data: function () {
    return {
      grupos: [],
    };
  },
  mounted: function () {
    this.getGrupos();
  },
  methods: {
    getGrupos() {
      axios
        .post("/api/grupos", { userid: this.$store.state.user.id })
        .then((response) => {
          this.grupos = response.data;
          console.log(this.grupos);
        });
    },
    verGrupo(grupo) {
      var slug = this.sluging(grupo.DescripcionMateria);
      this.$store.dispatch("setData", grupo);
      this.$router
        .push({
          name: "grupo-alumnos",
          params: { slug: slug, grupo: grupo.ID_Grupo },
        })
        .catch((err) => {});
    },
    sluging(texto) {
      var txt = texto.toLowerCase();
      var t = txt.replaceAll(" ", "-");
      var sinAcentos = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return sinAcentos;
    },
  },
  computed: {},
};
</script>
<style>
	.card:hover{
		cursor: pointer;
	}
	.card{
		min-height: 100%; 
		margin-bottom:2em;
	}
</style>