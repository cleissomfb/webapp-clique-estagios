<template>
  <div>
    <NavbarEmp />
    <SidebarEmp />
    <router-view name="empresaView" />
    <Contato />
    <Footer />
  </div>
</template>

<script>
import NavbarEmp from "./NavBarEmp";
import SidebarEmp from "./SideBarEmp";

import Contato from "../paginaInicial/Contato.vue";
import Footer from "../paginaInicial/Footer.vue";

export default {
  name: "Empresa",
  components: {
    NavbarEmp,
    SidebarEmp,
    Footer,
    Contato,
  },
};
</script>

<style>
</style>