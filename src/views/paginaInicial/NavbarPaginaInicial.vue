<template>
  <fragment>
    <b-navbar class="navbar">
      <b-navbar-brand><a href="/"><img src="@/assets/imagens/logo_menor.png" alt="Logo menor"></a></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><a class="btn-login" v-b-modal.modal-1>Empresa</a></b-nav-item>
          <b-nav-item><a class="btn-login" v-b-modal.modal-2>Usuário</a></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-1" centered title="Empresa" hide-footer>
        <ModalLoginEmp />
    </b-modal>
    <b-modal id="modal-2" centered title="Usuário" hide-footer>
      <ModalLoginUser />
    </b-modal>
  </fragment>
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
