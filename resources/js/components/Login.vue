<template>
  <div class="app-container app-theme-white body-tabs-shadow">
    <div class="app-container">
      <div class="h-100">
        <div class="h-100 g-0 row">
          <div class="d-none d-lg-block col-lg-4">
            <div class="slider-light">
              <div class="slick-slider">
                <div>
                  <div
                    class="
                      position-relative
                      h-100
                      d-flex
                      justify-content-center
                      align-items-center
                      bg-plum-plate
                    "
                    tabindex="-1"
                  >
                    <div
                      class="slide-img-bg"
                      style="
                        background-image: url('architectui/assets/images/originals/city.jpg');
                      "
                    ></div>
                    <div class="slider-content">
                      <h3>Perfect Balance</h3>
                      <p>
                        ArchitectUI is like a dream. Some think it's too good to
                        be true! Extensive collection of unified React Boostrap
                        Components and Elements.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="
                      position-relative
                      h-100
                      d-flex
                      justify-content-center
                      align-items-center
                      bg-premium-dark
                    "
                    tabindex="-1"
                  >
                    <div
                      class="slide-img-bg"
                      style="
                        background-image: url('architectui/assets/images/originals/citynights.jpg');
                      "
                    ></div>
                    <div class="slider-content">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don't require.
                        Lightweight, consistent Bootstrap based styles across
                        all elements and components
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="
                      position-relative
                      h-100
                      d-flex
                      justify-content-center
                      align-items-center
                      bg-sunny-morning
                    "
                    tabindex="-1"
                  >
                    <div
                      class="slide-img-bg"
                      style="
                        background-image: url('architectui/assets/images/originals/citydark.jpg');
                      "
                    ></div>
                    <div class="slider-content">
                      <h3>Complex, but lightweight</h3>
                      <p>
                        We've included a lot of components that cover almost all
                        use cases for any type of application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              h-100
              d-flex
              bg-white
              justify-content-center
              align-items-center
              col-md-12 col-lg-8
            "
          >
            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
              <div class="app-logo"></div>
              <h4 class="mb-0">
                <span class="d-block">Bienvenido</span>
                <span>Inicia sesión en tu cuenta</span>
              </h4>

              <div class="divider row"></div>
              <div>
                <form @submit.prevent="login">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="position-relative mb-3">
                        <label for="usuario" class="form-label">Usuario</label>
                        <input
                          name="usuario"
                          id="usuario"
                          placeholder="Escribe tu usuario aquí..."
                          type="text"
                          class="form-control"
                          v-model="usuario"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="position-relative mb-3">
                        <label for="password" class="form-label"
                          >Contraseña</label
                        >
                        <input
                          name="password"
                          id="password"
                          placeholder="Escribe tu contraseña aquí..."
                          type="password"
                          class="form-control"
                          v-model="password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="position-relative form-check-"></div>
                  <div class="divider row"></div>
                  <div class="d-flex align-items-center">
                    <div class="ms-auto">
                      <button type="submit" class="btn btn-primary btn-lg">
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </form>
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
  name: "Login",
  data: function () {
    return {
      usuario: "",
      password: "",
    };
  },

  created: function () {
	  console.log("Login created");
	  console.log("logged",this.$store.state.auth);
    if (this.$store.state.auth) {
  
	  console.log("logged",this.$store.state.auth);
      this.$router.push("/").catch(err => {});
    } 
  },
  methods: {
    async login() {
      var data = {
        user: this.usuario,
        password: this.password,
      };

      let res = axios.post("/api/login", data);
      try {
        let response = await axios.post("/api/login", data);
         console.log(JSON.stringify(response.data));
		 sessionStorage.setItem('token',response.data.token)
      	 sessionStorage.setItem('loggedIn',true)
		 this.$store.dispatch("login", response.data);
		 this.$router.push("/"); 
      } catch (error) {
		  
        console.log("Error",error);
      }
      //console.log(res.status);
     
    },
  },
};
</script>