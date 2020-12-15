<template>
  <fragment>
    <NavbarEmp />
    <SidebarEmp />
    <router-view name="empresaView" />
    <Contato />
    <Footer />
    <div id="voltarTopo">
      <b-button id="btnTop" @click="backToTop()" class="btn-up"
        ><b-icon class="icon" icon="arrow-up"></b-icon
      ></b-button>
    </div>
  </fragment>
</template>

<script>
import NavbarEmp from "./NavBarEmp";
import SidebarEmp from "./SideBarEmp";

import Contato from "../paginaInicial/Contato.vue";
import Footer from "../paginaInicial/Footer.vue";

import { btnTop } from "@/assets/js";

export default {
  name: "Empresa",
  components: {
    NavbarEmp,
    SidebarEmp,
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