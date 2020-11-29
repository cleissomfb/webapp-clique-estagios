<template>
  <div>
    <NavbarUser />
    <SidebarUser />
    <router-view name="usuarioView" />
    <Contato />
    <Footer />
    <div id="voltarTopo">
      <b-button id="btnTop" @click="backToTop()" class="btn-up"
        ><b-icon class="icon" icon="arrow-up"></b-icon
      ></b-button>
    </div>
  </div>
</template>

<script>
import NavbarUser from "./NavBarUser";
import SidebarUser from "./SideBarUser";

import Contato from "../paginaInicial/Contato.vue";
import Footer from "../paginaInicial/Footer.vue";

import { btnTop } from "@/assets/js";

export default {
  name: "Usuario",
  components: {
    NavbarUser,
    SidebarUser,
    Footer,
    Contato,
  },
  methods: {
    backToTop() {
      btnTop.backToTop();
    }
  },
};
</script>

<style>
</style>