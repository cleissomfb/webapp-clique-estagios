<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      backdrop
    >
      <template #default="{ hide }">
        <div class="p-3 mt-5">
          <div class="d-flex align-items-center flex-column">
            <b-avatar
              icon="people"
              size="5rem"
              class="mb-3 mt-3"
            ></b-avatar>
            <h4 id="sidebar-no-header-title" class="text-uppercase text-center txt-sidebar">Olá {{nomeUsuario}}</h4>
            <div class="divide-menu"></div>
          </div>
          <nav class="my-5 mx-4">
            <b-nav vertical>
               <b-nav-item active href="/usuario/homeUsuario"
                ><b-icon icon="bar-chart-fill" class="mr-3 "></b-icon
                >Página Incial</b-nav-item
              >
              <b-nav-item active href="/usuario/perfilUsuario"
                ><b-icon icon="pencil" class="mr-3"></b-icon
                >Perfil Perfil</b-nav-item
              >
              <b-nav-item v-b-modal.visualizarVagas  @click="hide"
                ><b-icon icon="card-list" class="mr-3"></b-icon
                >Visualizar Vagas</b-nav-item
              >
              <b-nav-item v-b-modal.vagasSelecionadas @click="hide"
                ><b-icon icon="card-list" class="mr-3"></b-icon>Vagas Selecionadas</b-nav-item
              >
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      usuario: {},
      nomeUsuario: '',
    }
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.nomeUsuario = this.usuario.informacoes.pessoais.nome;
  }
};
</script>

<style scoped>
.nav-item > .nav-link {
  color: #2ad2b3;
}

.nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: #2ad2b3;
}

.divide-menu {
  border: 1px solid #2ad2b3;
  width: 100%;
}
</style>
