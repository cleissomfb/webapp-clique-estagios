<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      backdrop
      class="sidebar"
    >
      <template #default="{ hide }">
        <div class="p-3 mt-5" >
          <div class="d-flex align-items-center flex-column">
            <b-avatar
              icon="building"
              size="5rem"
              class="mb-3 mt-3"
            ></b-avatar>
            <h4 id="sidebar-no-header-title" class="text-uppercase text-center txt-sidebar">Olá {{nomeEmpresa}}</h4>
            <div class="divide-menu"></div>
          </div>
          <nav class="my-5 mx-4">
            <b-nav vertical>
              <b-nav-item active href="/empresa/homeEmpresa"
                ><b-icon icon="bar-chart-fill" class="mr-3 "></b-icon
                >Página Incial</b-nav-item
              >
              <b-nav-item active href="/empresa/perfilEmpresa"
                ><b-icon icon="pencil" class="mr-3"></b-icon
                >Editar Perfil</b-nav-item
              >
              <b-nav-item href="/empresa/cadastrarVaga" @click="hide"
                ><b-icon icon="card-list" class="mr-3"></b-icon
                >Cadastrar Vaga</b-nav-item
              >
              <b-nav-item v-b-modal.vagasCadastradas @click="hide"
                ><b-icon icon="card-list" class="mr-3"></b-icon
                >Vagas Cadastradas</b-nav-item
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
      empresa: {},
      nomeEmpresa: '',
    }
  },
  mounted() {
    this.empresa = JSON.parse(localStorage.getItem("empresa"));
    this.nomeEmpresa = this.empresa.informacoes.principais.nomeFantasia;
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
