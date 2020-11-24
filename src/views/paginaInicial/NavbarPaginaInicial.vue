<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand><router-link to="/"><h3>Clique Estágios</h3></router-link></b-navbar-brand> -->
      <b-navbar-brand
        ><a href="/"><h3>Clique Estágios</h3></a></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item><a v-b-modal.modal-1>Empresa</a></b-nav-item>
            <b-nav-item><a v-b-modal.modal-2>Usuário</a></b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <b-modal id="modal-1" centered title="Login Empresa" hide-footer>
         <ModalLoginEmp />
      </b-modal>
    </div>
    <div>
      <b-modal id="modal-2" centered title="Login Usuário" hide-footer>
       <ModalLoginUser />
      </b-modal>
    </div>
  </div>
</template>

<script>
import ModalLoginEmp from "../empresa/ModalLoginEmp";
import ModalLoginUser from "../usuario/ModalLoginUser";

export default {
  name: "NavbarPaginaIncial",
  components: {
    ModalLoginEmp,
    ModalLoginUser
  },
  data() {
    return {
      // Login Empresa
      loginEmp: "",
      senhaEmp: "",

     
    };
  },
  methods: {
   
  },
};
</script>

<style scoped>
</style>
