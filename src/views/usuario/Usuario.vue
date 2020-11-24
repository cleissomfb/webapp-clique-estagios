<template>
  <div>
    <NavbarUser />
    <SidebarUser />
    <router-view name="usuarioView" />
    <Contato />
    <Footer />
  </div>
</template>

<script>
import NavbarUser from "./NavBarUser";
import SidebarUser from "./SideBarUser";

import Contato from "../paginaInicial/Contato.vue";
import Footer from "../paginaInicial/Footer.vue";

export default {
  name: "Usuario",
  components: {
    NavbarUser,
    SidebarUser,
    Footer,
    Contato,
  },
};
</script>

<style>
</style>