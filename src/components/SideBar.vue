<template>
  <div>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      bg-variant="dark"
      text-variant="light"
      backdrop
      backdrop-variant="dark"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <b-avatar
              variant="primary"
              text="PS"
              size="5rem"
              class="mb-3 mt-3"
            ></b-avatar>
            <h4 id="sidebar-no-header-title">Programando Soluções</h4>
            <div class="divide-menu"></div>
          </div>
          <nav class="my-5">
            <b-nav vertical>
              <b-nav-item active @click="hide"
                ><b-icon icon="bar-chart-fill" class="mr-3"></b-icon
                >Dashboard</b-nav-item
              >
              <b-nav-item href="#link-1" @click="hide"
                ><b-icon icon="truck" class="mr-3"></b-icon
                >Caminhões</b-nav-item
              >
              <b-nav-item href="#link-2" @click="hide"
                ><b-icon icon="person" class="mr-3"></b-icon>Pessoas</b-nav-item
              >
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Fechar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.nav-item > .nav-link {
  color: #fff;
}

.nav-item > .nav-link:hover {
  color: #ccc;
}

.divide-menu {
  border: 1px solid #fff;
  width: 100%;
}
</style>
