<template>
  <div>
    <template v-if="$store.state.auth">
      <div
        class="
          app-container app-theme-white
          body-tabs-shadow
          fixed-header fixed-sidebar
        "
      >
        <!-- ENCABEZADO -->
        <div class="app-header header-shadow">
          <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  class="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div class="app-header__mobile-menu">
            <div>
              <button
                type="button"
                class="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>

          <div class="app-header__menu">
            <span>
              <button
                type="button"
                class="
                  btn-icon btn-icon-only btn btn-primary btn-sm
                  mobile-toggle-header-nav
                "
              >
                <span class="btn-icon-wrapper">
                  <i class="fa fa-ellipsis-v fa-w-6"></i>
                </span>
              </button>
            </span>
          </div>

          <div class="app-header__content">
            <div class="app-header-right">
              <div class="header-dots">
                <div class="dropdown">
                  <button
                    aria-haspopup="true"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tooltip on bottom"
                    aria-expanded="false"
                    class="p-0 btn btn-link dd-chart-btn"
                  >
                    <span class="icon-wrapper icon-wrapper-alt rounded-circle">
                      <span class="icon-wrapper-bg bg-success"></span>
                      <i class="fas fa-sign-out-alt"></i>
                    </span>
                  </button>
                </div>
              </div>

              <div class="header-btn-lg pr-0">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                      <div class="btn-group">
                        <!-- FOTO PERFIL -->
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          class="p-0 btn"
                        >
                          <img
                           :src="'data:image/jpeg;base64,'+$store.state.user.photo"
                            height="45em"
                          />
                          <i class="fa fa-angle-down ml-2 opacity-8"></i>
                        </a>

                        <!-- PERFIL -->
                        <div
                          tabindex="-1"
                          role="menu"
                          aria-hidden="true"
                          class="
                            rm-pointers
                            dropdown-menu-lg dropdown-menu dropdown-menu-right
                          "
                        >
                          <div class="dropdown-menu-header">
                            <div class="dropdown-menu-header-inner bg-primary">
                              <div
                                class="menu-header-image opacity-2"
                                style="
                                  background-image: url('images/dropdown-header/city3.jpg');
                                "
                              ></div>
                              <div class="menu-header-content text-left">
                                <div class="widget-content p-0">
                                  <div class="widget-content-wrapper">
                                    <div class="widget-content-left mr-3">
                                      <img
											:src="'data:image/jpeg;base64,'+$store.state.user.photo"
											height="45em"
										/>
                                    </div>
                                    <div class="widget-content-left">
                                      <div class="widget-heading">
                                        {{ $store.state.user.name }}
                                      </div>
                                      <!--<div class="widget-subheading opacity-8">A short profile description</div>-->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- SALIR -->
                          <ul class="nav flex-column">
                            <li class="nav-item-btn text-center nav-item">
                              <a @click="logout"
                                ><button
                                  class="btn-wide btn btn-primary btn-sm"
                                >
                                  Cerrar Sesión
                                </button></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="widget-content-left ml-3 header-user-info">
                      <div class="widget-heading">
                        {{ $store.state.user.name }}
                      </div>
                      <!--<div class="widget-subheading">asasd</div>-->
                    </div>
                  </div>
                </div>
              </div>

              <div class="header-btn-lg">
                <button
                  type="button"
                  class="hamburger hamburger--elastic open-right-drawer"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- FIN ENCABEZADO -->
        <div></div>
        <div class="app-main">
          <div class="app-sidebar sidebar-shadow">
            <!-- MENU -->

            <div class="app-header__logo">
              <div class="logo-src"></div>
              <div class="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    class="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div class="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  class="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </div>
            </div>

            <div class="app-header__menu">
              <span>
                <button
                  type="button"
                  class="
                    btn-icon btn-icon-only btn btn-primary btn-sm
                    mobile-toggle-header-nav
                  "
                >
                  <span class="btn-icon-wrapper">
                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                  </span>
                </button>
              </span>
            </div>

            <div class="scrollbar-sidebar">
              <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu">
                  <li class="app-sidebar__heading">Menu</li>

                  <li>
                    <router-link to="/" class="mm-active">
                      <i class="metismenu-icon pe-7s-graph"></i>
                      Inicio
                    </router-link>
                  </li>
 
                </ul>
              </div>
            </div>
            <!-- FIN MENU -->
          </div>

          <div class="app-main__outer">
            <!-- COTENIDO -->
            <div class="app-main__inner">
              <router-view></router-view>
            </div>
            <!-- FIN COTENIDO -->

            <!-- PIE -->

            <!-- FIN PIE -->
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <router-view @login="setLogin"> </router-view>
    </template>
  </div>
</template> 
<script>
import { API } from "../common/api";
export default {
  data() {
    return {};
  },

  created() {
     this.verificarToken();
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/iniciar-sesion");
    },
    setLogin() {
      this.logged = sessionStorage.getItem("logged");
      console.log(this.logged);
    },
    verificarToken() {
      let token = sessionStorage.getItem("token");
      let url = "/api/verificar-token";
      API.post(url, {
        token: token,
      })
        .then((response) => {
          console.log(response.data);
           
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>